import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

interface FormState {
  name: string;
  phone: string;
  company: string;
  machine: string;
  problem: string;
}

interface ServiceSubscriptionProps {
  openModal: (type: 'engineer' | 'order') => void;
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  modalType: 'engineer' | 'order';
  form: FormState;
  setForm: (updater: (prev: FormState) => FormState) => void;
  sending: boolean;
  sent: boolean;
  error: string;
  totalCost: number;
  formatPrice: (price: number) => string;
  handleSubmit: (e: React.FormEvent) => void;
}

const ServiceSubscription = ({
  openModal,
  modalOpen,
  setModalOpen,
  modalType,
  form,
  setForm,
  sending,
  sent,
  error,
  totalCost,
  formatPrice,
  handleSubmit,
}: ServiceSubscriptionProps) => {
  return (
    <>
      <section className="py-24 bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#0D1B2A] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">Новое направление для наших клиентов</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              После успешного ремонта и ввода в эксплуатацию мы готовы предложить вам долгосрочное партнёрство
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
            {[
              { num: '1', icon: 'Clipboard', title: 'Аудит бесплатно', sub: 'Диагностика 47 точек' },
              { num: '2', icon: 'Wrench', title: 'Ремонт под ключ', sub: 'Устранение неисправностей' },
              { num: '3', icon: 'CheckCircle', title: 'Подписка на сервис', sub: 'Регулярное обслуживание' },
            ].map((step, i) => (
              <div key={i} className="text-center relative">
                {i > 0 && <div className="hidden md:block absolute top-8 -left-8 w-16 h-0.5 bg-white/20" />}
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                  {step.num}
                </div>
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={step.icon} size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                <p className="text-sm text-white/70">{step.sub}</p>
              </div>
            ))}
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center uppercase">Что даёт подписка</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: 'Shield',
                  title: 'Проактивное обслуживание',
                  description: 'Регулярное ТО по графику предотвращает 80% аварийных поломок. Станок всегда в рабочем состоянии.',
                },
                {
                  icon: 'Calculator',
                  title: 'Предсказуемые расходы',
                  description: 'Фиксированная сумма каждый месяц. Никаких неожиданных счетов за экстренный ремонт.',
                },
                {
                  icon: 'Zap',
                  title: 'Приоритетная поддержка',
                  description: 'Выезд инженера за 1-2 часа даже в выходные. Запчасти на складе — доставка за 4 часа.',
                },
                {
                  icon: 'Smartphone',
                  title: 'Личный кабинет и приложение',
                  description: 'Онлайн мониторинг состояния станков, история обслуживания, заявки в 1 клик, push-уведомления о плановом ТО.',
                },
              ].map((benefit) => (
                <div key={benefit.title} className="bg-white/10 backdrop-blur-sm rounded border border-white/20 p-6">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={benefit.icon} size={24} />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                  <div className="h-0.5 bg-white/20 w-12 mb-3" />
                  <p className="text-sm text-white/80">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-2xl mx-auto text-center bg-white/10 backdrop-blur-sm rounded border border-white/20 p-8">
            <p className="text-white/90 mb-6">
              Подписка на сервис — это новое направление, которое мы запускаем для постоянных клиентов.
              Чтобы узнать подробности и условия, начните с бесплатного аудита вашего оборудования.
            </p>
            <Button
              className="bg-[#CD7F32] hover:bg-[#D4822B] text-white font-semibold"
              onClick={() => openModal('order')}
            >
              Узнать больше о подписке
            </Button>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-20 bg-gradient-to-br from-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#1B263B] mb-4 uppercase">
              Получите бесплатный аудит вашего оборудования
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Наш инженер приедет, проведёт 47-точечную проверку и подготовит отчёт с рекомендациями за 24 часа
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl space-y-5">
              <Input placeholder="Ваше имя *" value={form.name} onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))} required className="h-12" />
              <Input type="tel" placeholder="Телефон * +7 (___) ___-__-__" value={form.phone} onChange={(e) => setForm(f => ({ ...f, phone: e.target.value }))} required className="h-12" />
              <Input placeholder="Компания" value={form.company} onChange={(e) => setForm(f => ({ ...f, company: e.target.value }))} className="h-12" />
              <Input placeholder="Станок / оборудование" value={form.machine} onChange={(e) => setForm(f => ({ ...f, machine: e.target.value }))} className="h-12" />

              <Select onValueChange={(v) => setForm(f => ({ ...f, problem: v }))}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Количество станков *" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-3">1-3 станка</SelectItem>
                  <SelectItem value="3-5">3-5 станков</SelectItem>
                  <SelectItem value="5-10">5-10 станков</SelectItem>
                  <SelectItem value="10+">Более 10 станков</SelectItem>
                </SelectContent>
              </Select>

              <Textarea placeholder="Опишите проблему (если есть)" rows={4} />

              <div className="flex items-start gap-3">
                <Checkbox id="agree-form" />
                <label htmlFor="agree-form" className="text-sm text-gray-500 cursor-pointer">
                  Согласен с политикой обработки персональных данных
                </label>
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}
              {sent && <p className="text-green-600 text-sm font-medium">Заявка отправлена! Мы свяжемся с вами в ближайшее время.</p>}

              <Button
                type="submit"
                size="lg"
                disabled={sending}
                className="w-full bg-[#CD7F32] hover:bg-[#D4822B] text-white text-lg font-bold"
              >
                <Icon name="Wrench" size={20} className="mr-2" />
                {sending ? 'Отправляем...' : 'Заказать бесплатный аудит'}
              </Button>
            </form>

            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Выезд в течение 24-48 часов',
                  'Отчёт с фото и рекомендациями',
                  'Никаких скрытых платежей',
                  'Работаем по всей России',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg space-y-4">
                <h3 className="text-2xl font-bold text-[#1B263B]">Или позвоните нам:</h3>
                <a href="tel:+73432875737" className="text-3xl font-bold text-[#CD7F32] hover:text-[#D4822B] block">
                  +7 (343) 287-57-37
                </a>
                <p className="text-gray-400 text-sm">Пн-Пт: 9:00–18:00</p>

                <h4 className="font-bold text-[#1B263B] pt-2">Напишите в Telegram:</h4>
                <a href="https://t.me/pumori_service" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="w-full border-[#1B263B] text-[#1B263B] hover:bg-[#1B263B] hover:text-white">
                    <Icon name="Send" size={18} className="mr-2" />
                    Telegram
                  </Button>
                </a>

                <div className="pt-4 border-t">
                  <p className="text-gray-400 text-sm mb-1">Email:</p>
                  <a href="mailto:pii@pumori.ru" className="text-lg font-semibold text-[#CD7F32] hover:underline">
                    pii@pumori.ru
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                      : `Сумма по расчёту: ${formatPrice(totalCost)}`}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Ваше имя *</label>
                  <input type="text" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Иван Петров" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Телефон *</label>
                  <input type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} placeholder="+7 (343) 000-00-00" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Предприятие</label>
                  <input type="text" value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))} placeholder="ОАО Завод" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Станок / оборудование</label>
                  <input type="text" value={form.machine} onChange={e => setForm(f => ({ ...f, machine: e.target.value }))} placeholder="DMG MORI NLX 2500" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Описание проблемы</label>
                  <textarea value={form.problem} onChange={e => setForm(f => ({ ...f, problem: e.target.value }))} placeholder="Опишите кратко что случилось..." rows={3} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] resize-none" />
                </div>

                {error && <p className="text-red-600 text-sm">{error}</p>}

                <Button type="submit" disabled={sending} className="w-full bg-red-600 hover:bg-red-700 text-white font-black uppercase text-lg py-3">
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
    </>
  );
};

export default ServiceSubscription;
