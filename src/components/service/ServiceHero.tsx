import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface ServiceHeroProps {
  openModal: (type: 'engineer' | 'order') => void;
}

const ServiceHero = ({ openModal }: ServiceHeroProps) => {
  return (
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
                'Выезд инженера от 2 часов*',
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
  );
};

export default ServiceHero;