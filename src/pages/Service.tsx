import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

const API_URL = 'https://functions.poehali.dev/665592c9-5ce8-4dc9-813b-296a3866cb7f';
const baseRate = 6000;

const Service = () => {
  const [hours, setHours] = useState(24);
  const [engineers, setEngineers] = useState(2);
  const [urgency, setUrgency] = useState('planned');
  const [weekend, setWeekend] = useState(false);
  const [location, setLocation] = useState('moscow');
  const [parts, setParts] = useState('');
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const baseCost = hours * engineers * baseRate;
    let coefficients = 0;
    if (urgency === 'urgent') coefficients += baseCost * 0.2;
    if (urgency === 'emergency') coefficients += baseCost * 0.5;
    if (weekend) coefficients += baseCost * 0.3;
    if (location === 'region500') coefficients += baseCost * 0.15;
    if (location === 'region500plus') coefficients += baseCost * 0.3;
    const partsCost = parts ? parseInt(parts.replace(/\s/g, '')) || 0 : 0;
    setTotalCost(baseCost + coefficients + partsCost);
  }, [hours, engineers, urgency, weekend, location, parts]);

  const formatPrice = (price: number) => price.toLocaleString('ru-RU') + ' ₽';



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

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-[#1B263B] mb-4 uppercase">Рассчитайте стоимость ремонта</h2>
            <p className="text-xl text-gray-500 mb-2">Прозрачное ценообразование</p>
            <p className="text-sm text-gray-400">Базовая ставка: 6 000 ₽/час на одного сервисного инженера + стоимость запчастей</p>
          </div>

          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#1B263B]">ПАРАМЕТРЫ РЕМОНТА</h3>

              <div>
                <label className="text-sm font-medium mb-3 block text-gray-700">Тип работ:</label>
                <select
                  className="w-full p-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-[#CD7F32]"
                  onChange={(e) => setHours(parseInt(e.target.value))}
                  value={hours}
                >
                  <option value="3">Диагностика и настройка (2-4 часа)</option>
                  <option value="6">Мелкий ремонт (4-8 часов)</option>
                  <option value="12">Средний ремонт (8-16 часов)</option>
                  <option value="24">Крупный ремонт (16-40 часов)</option>
                  <option value="80">Капитальный ремонт (40-120 часов)</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium mb-3 block text-gray-700">
                  Предполагаемое время работ: <span className="font-mono text-[#CD7F32]">{hours}</span> часов
                </label>
                <Slider min={1} max={120} step={1} value={[hours]} onValueChange={(v) => setHours(v[0])} className="mb-2" />
                <div className="flex justify-between text-xs text-gray-400">
                  <span>1 час</span><span>120 часов</span>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-3 block text-gray-700">
                  Количество инженеров: <span className="font-mono text-[#CD7F32]">{engineers}</span> чел.
                </label>
                <Slider min={1} max={4} step={1} value={[engineers]} onValueChange={(v) => setEngineers(v[0])} className="mb-2" />
                <div className="flex justify-between text-xs text-gray-400">
                  <span>1</span><span>4</span>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-3 block text-gray-700">Срочность выезда:</label>
                <div className="space-y-2">
                  {[
                    { value: 'planned', label: 'Плановый (2-5 дней) — без наценки' },
                    { value: 'urgent', label: 'Срочный (24 часа) — +20%' },
                    { value: 'emergency', label: 'Экстренный (2-4 часа) — +50%' },
                  ].map((opt) => (
                    <label key={opt.value} className="flex items-center gap-3 p-3 border border-gray-200 rounded cursor-pointer hover:bg-gray-50">
                      <input type="radio" name="urgency" value={opt.value} checked={urgency === opt.value} onChange={(e) => setUrgency(e.target.value)} />
                      <span className="text-sm">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <label className="flex items-center gap-3 p-3 border border-gray-200 rounded cursor-pointer hover:bg-gray-50">
                <input type="checkbox" checked={weekend} onChange={(e) => setWeekend(e.target.checked)} />
                <span className="text-sm">Выезд в выходные/праздники (+30%)</span>
              </label>

              <div>
                <label className="text-sm font-medium mb-3 block text-gray-700">Удалённость объекта:</label>
                <select className="w-full p-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-[#CD7F32]" value={location} onChange={(e) => setLocation(e.target.value)}>
                  <option value="moscow">Екатеринбург / Свердловская область</option>
                  <option value="region500">Регионы (до 500 км) — +15%</option>
                  <option value="region500plus">Регионы (500+ км) — +30% + командировочные</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium mb-3 block text-gray-700">Необходимые запчасти (опционально):</label>
                <input
                  type="text"
                  placeholder="0"
                  className="w-full p-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-[#CD7F32]"
                  value={parts}
                  onChange={(e) => setParts(e.target.value)}
                />
                <p className="text-xs text-gray-400 mt-2">Ориентировочная стоимость, если известна</p>
              </div>
            </div>

            <div>
              <div className="bg-gray-50 rounded border border-gray-200 p-8 sticky top-24">
                <h3 className="text-xl font-semibold text-[#1B263B] mb-4">СТОИМОСТЬ РАБОТ</h3>
                <div className="h-0.5 bg-[#CD7F32] w-16 mb-6" />

                <div className="space-y-3 text-sm mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Базовая ставка:</span>
                    <span className="font-mono">6 000 ₽/час</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Количество часов:</span>
                    <span className="font-mono">{hours} ч.</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Количество инженеров:</span>
                    <span className="font-mono">{engineers} чел.</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between font-medium">
                      <span>Работы (базовая):</span>
                      <span className="font-mono">{formatPrice(hours * engineers * baseRate)}</span>
                    </div>
                  </div>
                </div>

                {(urgency !== 'planned' || weekend || location !== 'moscow') && (
                  <div className="mb-6 space-y-2 text-sm">
                    <p className="font-medium text-gray-700">Коэффициенты:</p>
                    {urgency === 'urgent' && (
                      <div className="flex justify-between"><span>• Срочность (+20%):</span><span className="font-mono">+{formatPrice(hours * engineers * baseRate * 0.2)}</span></div>
                    )}
                    {urgency === 'emergency' && (
                      <div className="flex justify-between"><span>• Экстренный (+50%):</span><span className="font-mono">+{formatPrice(hours * engineers * baseRate * 0.5)}</span></div>
                    )}
                    {weekend && (
                      <div className="flex justify-between"><span>• Выходной день (+30%):</span><span className="font-mono">+{formatPrice(hours * engineers * baseRate * 0.3)}</span></div>
                    )}
                    {location === 'region500' && (
                      <div className="flex justify-between"><span>• Удалённость (+15%):</span><span className="font-mono">+{formatPrice(hours * engineers * baseRate * 0.15)}</span></div>
                    )}
                    {location === 'region500plus' && (
                      <div className="flex justify-between"><span>• Удалённость (+30%):</span><span className="font-mono">+{formatPrice(hours * engineers * baseRate * 0.3)}</span></div>
                    )}
                  </div>
                )}

                {parts && (
                  <div className="mb-6 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Запчасти:</span>
                      <span className="font-mono">+{formatPrice(parseInt(parts.replace(/\s/g, '')) || 0)}</span>
                    </div>
                  </div>
                )}

                <div className="border-t-2 border-[#CD7F32] pt-4 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-[#1B263B]">ОБЩАЯ СТОИМОСТЬ:</span>
                    <span className="text-2xl font-bold text-[#CD7F32] font-mono">{formatPrice(totalCost)}</span>
                  </div>
                </div>

                <Button
                  className="w-full bg-[#CD7F32] hover:bg-[#D4822B] text-white mb-4"
                  onClick={() => openModal('order')}
                >
                  Заказать выезд инженера
                </Button>

                <div className="text-xs text-gray-400 space-y-1">
                  <p>* Точная стоимость определяется после диагностики</p>
                  <p>* Бесплатный аудит для оценки объёма работ</p>
                </div>
              </div>
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