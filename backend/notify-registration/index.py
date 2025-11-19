'''
Business: Отправка email уведомлений о новых регистрациях инвесторов
Args: event - dict с httpMethod, body (JSON с данными инвестора)
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
    
    # Handle CORS OPTIONS request
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-User-Id',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    # Parse request body
    body_data = json.loads(event.get('body', '{}'))
    investor_name = body_data.get('name', 'Не указано')
    investor_email = body_data.get('email', 'Не указан')
    investor_phone = body_data.get('phone', 'Не указан')
    investor_type = body_data.get('type', 'Не указан')
    registration_date = datetime.now().strftime('%d.%m.%Y %H:%M:%S')
    
    # Get SMTP settings from environment
    smtp_host = os.environ.get('SMTP_HOST', 'smtp.gmail.com')
    smtp_port = int(os.environ.get('SMTP_PORT', '587'))
    smtp_user = os.environ.get('SMTP_USER', '')
    smtp_password = os.environ.get('SMTP_PASSWORD', '')
    recipient_email = os.environ.get('RECIPIENT_EMAIL', '')
    
    if not smtp_user or not smtp_password or not recipient_email:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({
                'error': 'Email configuration not set',
                'message': 'Пожалуйста, настройте секреты SMTP_USER, SMTP_PASSWORD и RECIPIENT_EMAIL'
            })
        }
    
    # Create email message
    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'🎬 Новая регистрация инвестора: {investor_name}'
    msg['From'] = smtp_user
    msg['To'] = recipient_email
    
    # HTML email body
    html_body = f'''
    <html>
        <head>
            <style>
                body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
                .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
                .header {{ background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                           color: white; padding: 30px; border-radius: 10px 10px 0 0; }}
                .content {{ background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }}
                .field {{ margin: 15px 0; padding: 15px; background: white; border-radius: 5px; }}
                .label {{ font-weight: bold; color: #667eea; margin-bottom: 5px; }}
                .value {{ color: #333; font-size: 16px; }}
                .footer {{ margin-top: 20px; padding-top: 20px; border-top: 2px solid #667eea; 
                          text-align: center; color: #666; }}
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1 style="margin: 0;">🎬 CineInvest</h1>
                    <p style="margin: 10px 0 0 0;">Новая регистрация инвестора</p>
                </div>
                <div class="content">
                    <div class="field">
                        <div class="label">👤 Имя:</div>
                        <div class="value">{investor_name}</div>
                    </div>
                    <div class="field">
                        <div class="label">📧 Email:</div>
                        <div class="value">{investor_email}</div>
                    </div>
                    <div class="field">
                        <div class="label">📱 Телефон:</div>
                        <div class="value">{investor_phone}</div>
                    </div>
                    <div class="field">
                        <div class="label">💼 Тип инвестора:</div>
                        <div class="value">{investor_type}</div>
                    </div>
                    <div class="field">
                        <div class="label">🕐 Дата регистрации:</div>
                        <div class="value">{registration_date}</div>
                    </div>
                    <div class="footer">
                        <p>Это автоматическое уведомление от платформы CineInvest</p>
                    </div>
                </div>
            </div>
        </body>
    </html>
    '''
    
    # Attach HTML body
    html_part = MIMEText(html_body, 'html', 'utf-8')
    msg.attach(html_part)
    
    # Send email
    try:
        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.starttls()
            server.login(smtp_user, smtp_password)
            server.send_message(msg)
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({
                'success': True,
                'message': 'Уведомление отправлено'
            })
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({
                'error': str(e),
                'message': 'Ошибка при отправке email'
            })
        }
