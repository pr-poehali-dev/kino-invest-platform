'''
Business: Отправка заявок на сервисное обслуживание станков с ЧПУ на почту pii@pumori.ru
Args: event - dict с httpMethod, body (JSON с данными заявки)
      context - object с атрибутами request_id, function_name
Returns: HTTP response dict
'''
import json
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
import os
from typing import Dict, Any


def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'POST')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'})
        }

    body_data = json.loads(event.get('body', '{}'))
    name = body_data.get('name', 'Не указано')
    phone = body_data.get('phone', 'Не указан')
    company = body_data.get('company', '')
    machine = body_data.get('machine', '')
    problem = body_data.get('problem', '')
    request_type = body_data.get('request_type', 'Заявка на сервис')
    hours = body_data.get('hours', '')
    engineers = body_data.get('engineers', '')
    urgent = body_data.get('urgent', False)
    total = body_data.get('total', '')
    submitted_at = datetime.now().strftime('%d.%m.%Y %H:%M:%S')

    smtp_host = os.environ.get('SMTP_HOST', 'smtp.gmail.com')
    smtp_port = int(os.environ.get('SMTP_PORT', '587'))
    smtp_user = os.environ.get('SMTP_USER', '')
    smtp_password = os.environ.get('SMTP_PASSWORD', '')
    recipient_email = 'pii@pumori.ru'

    if not smtp_user or not smtp_password:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Email configuration not set'})
        }

    extra_rows = ''
    if company:
        extra_rows += f'<div class="field"><div class="label">🏭 Предприятие:</div><div class="value">{company}</div></div>'
    if machine:
        extra_rows += f'<div class="field"><div class="label">⚙️ Станок / оборудование:</div><div class="value">{machine}</div></div>'
    if problem:
        extra_rows += f'<div class="field"><div class="label">🔧 Описание проблемы:</div><div class="value">{problem}</div></div>'
    if hours:
        extra_rows += f'<div class="field"><div class="label">⏱ Время работ:</div><div class="value">{hours} ч</div></div>'
    if engineers:
        extra_rows += f'<div class="field"><div class="label">👷 Инженеров:</div><div class="value">{engineers}</div></div>'
    if urgent:
        extra_rows += '<div class="field"><div class="label">🚨 Срочность:</div><div class="value">Срочный выезд (+50%)</div></div>'
    if total:
        extra_rows += f'<div class="field"><div class="label">💰 Ориентировочная стоимость:</div><div class="value">{total}</div></div>'

    html_body = f'''
    <html>
    <head>
      <style>
        body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
        .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
        .header {{ background: linear-gradient(135deg, #0D1B2A 0%, #1E3A8A 100%);
                   color: white; padding: 30px; border-radius: 10px 10px 0 0; }}
        .content {{ background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }}
        .field {{ margin: 12px 0; padding: 14px; background: white; border-radius: 5px; border-left: 4px solid #CD7F32; }}
        .label {{ font-weight: bold; color: #1E3A8A; margin-bottom: 4px; font-size: 13px; }}
        .value {{ color: #333; font-size: 15px; }}
        .footer {{ margin-top: 20px; padding-top: 20px; border-top: 2px solid #CD7F32;
                   text-align: center; color: #666; font-size: 13px; }}
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin:0;">🔧 ПУМОРИ — {request_type}</h1>
          <p style="margin:8px 0 0 0; opacity:0.8;">Новая заявка с сайта pumori360.online</p>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">👤 Имя:</div>
            <div class="value">{name}</div>
          </div>
          <div class="field">
            <div class="label">📱 Телефон:</div>
            <div class="value">{phone}</div>
          </div>
          {extra_rows}
          <div class="field">
            <div class="label">🕐 Дата заявки:</div>
            <div class="value">{submitted_at}</div>
          </div>
          <div class="footer">
            Автоматическое уведомление · pumori360.online
          </div>
        </div>
      </div>
    </body>
    </html>
    '''

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'[Сервис] {request_type} — {name} ({phone})'
    msg['From'] = smtp_user
    msg['To'] = recipient_email
    msg.attach(MIMEText(html_body, 'html', 'utf-8'))

    with smtplib.SMTP(smtp_host, smtp_port) as server:
        server.starttls()
        server.login(smtp_user, smtp_password)
        server.send_message(msg)

    return {
        'statusCode': 200,
        'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True, 'message': 'Заявка отправлена'})
    }