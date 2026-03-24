import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface ServicesListProps {
  openModal: (type: 'engineer' | 'order') => void;
}

const ServicesList = ({ openModal }: ServicesListProps) => {
  const services = [
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
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#1B263B] mb-4 uppercase">Наши услуги</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Комплексное сервисное обслуживание промышленного оборудования
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, idx) => (
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
  );
};

export default ServicesList;
