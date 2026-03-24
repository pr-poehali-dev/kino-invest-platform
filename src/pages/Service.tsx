import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

const API_URL = 'https://functions.poehali.dev/665592c9-5ce8-4dc9-813b-296a3866cb7f';

const Service = () => {
  const [hours, setHours] = useState(24);
  const [engineers, setEngineers] = useState(2);
  const [urgent, setUrgent] = useState(false);

  const hourlyRate = 6000;
  const total = hours * engineers * hourlyRate * (urgent ? 1.5 : 1);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'engineer' | 'order'>('engineer');
  const [form, setForm] = useState({ name: '', phone: '', company: '', machine: '', problem: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const openModal = (type: 'engineer' | 'order') => {
    setModalType(type);
    setModalOpen(true);
    setSent(false);
    setError('');
    setForm({ name: '', phone: '', company: '', machine: '', problem: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setError('Пожалуйста, заполните имя и телефон');
      return;
    }
    setSending(true);
    setError('');
    try {
      const payload: Record<string, unknown> = {
        ...form,
        request_type: modalType === 'engineer' ? 'Вызов инженера' : 'Заказ выезда (расчёт)',
      };
      if (modalType === 'order') {
        payload.hours = hours;
        payload.engineers = engineers;
        payload.urgent = urgent;
        payload.total = total.toLocaleString('ru-RU');
      }
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
      } else {
        setError('Ошибка отправки. Попробуйте позвонить: +7 (343) 287-08-08');
      }
    } catch {
      setError('Ошибка сети. Попробуйте позвонить: +7 (343) 287-08-08');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Ремонт станков ЧПУ 24/7 | Выезд за 4 часа, запчасти в наличии"
        description="⚡ Станок встал? → Инженеры выезжают за 4 часа круглосуточно. ✅ Ремонт на месте ✅ Запчасти в наличии ✅ Гарантия на работы ✅ Бригады по всей РФ ✅ Модернизация старых станков. Простой дорого обходится → Звоните сейчас: +7 (343) 287-08-08"
        keywords="ремонт станков чпу круглосуточно, аварийный ремонт станков, запчасти для станков в наличии, выездной ремонт оборудования, обслуживание станков с чпу, модернизация токарных станков, восстановление точности станка, профилактика станков"
        canonical="https://pumori360.online/service"
      />
      <BreadcrumbSchema items={[
        { name: 'Главная', url: 'https://pumori360.online/' },
        { name: 'Решения', url: 'https://pumori360.online/' },
        { name: 'Сервис и обслуживание', url: 'https://pumori360.online/service' }
      ]} />
      <div className="bg-gray-50 py-3 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-primary">Главная</Link>
            <Icon name="ChevronRight" size={16} />
            <span>Решения</span>
            <Icon name="ChevronRight" size={16} />
            <span className="text-primary font-medium">Сервис</span>
          </div>
        </div>
      </div>

      <section className="relative min-h-[90vh] bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#0D1B2A] text-white flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1565008576549-57569a49371d?q=80&w=2000')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B2A]/60 to-[#0D1B2A]/90" />

        <div className="container mx-auto px-4 relative z-10 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-wider text-white/70 mb-4">
                ЭКСПЕРТНЫЙ СЕРВИС ЧПУ-ОБОРУДОВАНИЯ С 2000 ГОДА
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold leading-tight mb-6">
                Профессиональный ремонт и обслуживание станков с ЧПУ
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-[#CD7F32] to-[#D4822B] mb-6" />
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Экстренный ремонт, пуско-наладка, гарантийное обслуживание. Поставка оригинальных запчастей, в том числе под санкциями.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button
                  size="lg"
                  className="bg-[#CD7F32] hover:bg-[#D4822B] text-white font-semibold"
                  onClick={() => openModal('order')}
                >
                  Заказать бесплатный аудит
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-red-500 text-red-400 hover:bg-red-600 hover:text-white hover:border-red-600"
                  onClick={() => openModal('engineer')}
                >
                  Экстренный ремонт 24/7
                </Button>
              </div>

              <div className="space-y-3">
                {[
                  'Выезд инженера за 2-4 часа',
                  'Оригинальные запчасти',
                  'Гарантия на работы 6 месяцев',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Icon name="Check" size={20} className="text-green-400 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded border border-white/20 p-8">
              <h3 className="text-xl font-semibold text-white mb-4">ПУМОРИ В ЦИФРАХ</h3>
              <div className="border-t border-white/20 mb-6" />

              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { value: '30+', label: 'лет опыта' },
                  { value: '200+', label: 'проектов в год' },
                  { value: '98%', label: 'клиентов остаются' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-white/70">{stat.label}</div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-white/70 mb-3 uppercase tracking-wider">Работаем с брендами</p>
              <div className="flex flex-wrap gap-3 text-sm font-semibold text-white">
                {['OKUMA', 'DMG MORI', 'FANUC', 'HEADMAN', 'MAZAK', 'HAAS'].map((brand, i, arr) => (
                  <span key={brand} className="flex items-center gap-3">
                    {brand}{i < arr.length - 1 && <span className="text-white/40">|</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#1B263B] mb-4 uppercase">Наши услуги</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Комплексное сервисное обслуживание промышленного оборудования
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: 'Zap',
                title: 'Экстренный ремонт 24/7',
                description: 'Аварийные поломки, восстановление работоспособности станков любой сложности. Выезд инженера за 2-4 часа.',
                items: ['Диагностика на месте', 'Ремонт критичных узлов', 'Поставка запчастей срочно', 'Гарантия 12 месяцев'],
                primary: false,
              },
              {
                icon: 'Clipboard',
                title: 'Бесплатный технический аудит',
                description: 'Комплексная диагностика состояния оборудования. Отчёт с рекомендациями и сметой на устранение проблем.',
                items: ['47-точечная проверка станка', 'Тепловизионная диагностика', 'Анализ вибраций и точности', 'Отчёт за 24-48 часов'],
                primary: true,
              },
              {
                icon: 'Settings',
                title: 'Пуско-наладка и обслуживание',
                description: 'Ввод в эксплуатацию нового оборудования, плановое техническое обслуживание.',
                items: ['Монтаж и выставка по уровню', 'Настройка и калибровка', 'Обучение операторов', 'Гарантийное ТО по графику'],
                primary: false,
              },
              {
                icon: 'Package',
                title: 'Поставка оригинальных запчастей',
                description: 'Оригинальные и сертифицированные запчасти для станков Okuma, Headman и других брендов. Работаем под санкциями.',
                items: ['Оригинальные запчасти Okuma', 'Поставка из Европы/Азии', 'Срочная доставка за 3-7 дней', 'Сертификаты и гарантия завода'],
                primary: false,
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded border-2 border-gray-200 hover:border-[#CD7F32] transition-colors p-8 shadow-sm hover:shadow-md"
              >
                <div className="w-14 h-14 bg-[#1B263B]/10 rounded flex items-center justify-center mb-6">
                  <Icon name={service.icon} size={28} className="text-[#1B263B]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1B263B] mb-4">{service.title}</h3>
                <div className="h-0.5 bg-[#CD7F32] w-16 mb-6" />
                <p className="text-gray-500 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <span className="text-[#CD7F32] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {service.primary ? (
                  <Button
                    className="bg-[#CD7F32] hover:bg-[#D4822B] text-white"
                    onClick={() => openModal('order')}
                  >
                    Заказать аудит
                  </Button>
                ) : (
                  <button
                    className="text-[#1B263B] font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all hover:text-[#CD7F32]"
                    onClick={() => openModal('engineer')}
                  >
                    Подробнее
                    <Icon name="ArrowRight" size={16} />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block text-sm font-bold text-[#CD7F32] uppercase tracking-wider mb-4">
              КАЛЬКУЛЯТОР
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1B263B] mb-4 uppercase">
              Рассчитать стоимость
            </h2>
            <div className="w-20 h-1 bg-[#CD7F32] mx-auto" />
          </div>

          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-gray-200 p-8 space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Время работ (часы)</label>
                <input
                  type="range"
                  min="1"
                  max="120"
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="w-full"
                />
                <div className="text-right text-2xl font-black text-[#3B82F6] mt-2">{hours} часов</div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Количество инженеров</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4].map(n => (
                    <button
                      key={n}
                      onClick={() => setEngineers(n)}
                      className={`w-12 h-12 border-2 font-black text-lg transition-all ${
                        engineers === n
                          ? 'bg-[#3B82F6] text-white border-[#3B82F6]'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-[#3B82F6]'
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={urgent}
                    onChange={(e) => setUrgent(e.target.checked)}
                    className="w-5 h-5"
                  />
                  <span className="font-bold text-gray-700">Срочный выезд (+50%)</span>
                </label>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] text-white p-8 flex flex-col justify-center">
              <div className="text-sm font-bold uppercase mb-2 text-white/70">ОРИЕНТИРОВОЧНАЯ СТОИМОСТЬ</div>
              <div className="text-5xl font-black mb-6">{total.toLocaleString('ru-RU')} ₽</div>
              <div className="text-sm text-white/80 mb-6 space-y-1">
                <div>• Ставка: {hourlyRate.toLocaleString()} ₽/час</div>
                <div>• Часы: {hours}</div>
                <div>• Инженеры: {engineers}</div>
                {urgent && <div>• Срочность: +50%</div>}
              </div>
              <Button
                size="lg"
                className="bg-white text-[#1E3A8A] hover:bg-gray-100 font-black uppercase w-full"
                onClick={() => openModal('order')}
              >
                ЗАКАЗАТЬ ВЫЕЗД
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={() => setModalOpen(false)}>
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-8 relative" onClick={e => e.stopPropagation()}>
            <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-700" onClick={() => setModalOpen(false)}>
              <Icon name="X" size={22} />
            </button>

            {sent ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircle" size={36} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-black text-[#1B263B] mb-2">Заявка принята!</h3>
                <p className="text-gray-600 mb-6">Наш специалист свяжется с вами в ближайшее время.</p>
                <Button className="bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white font-bold" onClick={() => setModalOpen(false)}>
                  Закрыть
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-xl font-black text-[#1B263B] mb-1">
                    {modalType === 'engineer' ? '🚨 Вызвать инженера' : '📋 Заказать выезд'}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {modalType === 'engineer'
                      ? 'Заявка придёт нашим специалистам, выедем за 2-4 часа'
                      : `Сумма по расчёту: ${total.toLocaleString('ru-RU')} ₽`}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Ваше имя *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="Иван Петров"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Телефон *</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    placeholder="+7 (343) 000-00-00"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Предприятие</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                    placeholder="ОАО Завод"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Станок / оборудование</label>
                  <input
                    type="text"
                    value={form.machine}
                    onChange={e => setForm(f => ({ ...f, machine: e.target.value }))}
                    placeholder="DMG MORI NLX 2500"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Описание проблемы</label>
                  <textarea
                    value={form.problem}
                    onChange={e => setForm(f => ({ ...f, problem: e.target.value }))}
                    placeholder="Опишите кратко что случилось..."
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] resize-none"
                  />
                </div>

                {error && <p className="text-red-600 text-sm">{error}</p>}

                <Button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-black uppercase text-lg py-3"
                >
                  {sending ? 'Отправляем...' : 'Отправить заявку'}
                </Button>

                <p className="text-xs text-gray-400 text-center">
                  Заявка отправляется на почту нашим специалистам
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Service;