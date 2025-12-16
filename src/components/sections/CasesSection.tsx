import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const CasesSection = () => {
  return (
    <>
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1B263B] via-[#8B7355] to-[#1B263B]" />
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block text-sm font-bold text-[#8B7355] uppercase tracking-wider mb-4">
              НАШИ РЕЗУЛЬТАТЫ
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1B263B] mb-4 uppercase">
              Проекты полного цикла
            </h2>
            <div className="w-20 h-1 bg-[#8B7355] mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              От проектирования до запуска и обслуживания — реальные результаты крупнейших производств
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="bg-white border-l-4 border-[#1E3A8A] hover:shadow-2xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <Icon name="Factory" size={200} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white" />
                </div>
                <div className="relative z-10 text-white text-center p-6">
                  <div className="text-6xl font-black mb-2">01</div>
                  <div className="text-sm font-bold uppercase tracking-wider">Кейс</div>
                </div>
              </div>
              <div className="p-6">
                <div className="inline-block bg-[#4A90A4]/10 text-[#4A90A4] px-3 py-1 text-xs font-bold uppercase tracking-wide mb-4">
                  ООО «КРАСМАШ»
                </div>
                <h3 className="text-xl font-black text-[#1B263B] mb-3 uppercase">Модернизация токарного участка</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Требовалась точность ±0.005 мм. Брак составлял 15-20%. Полный цикл: проектирование → поставка станков Okuma → подбор инструмента → пуско-наладка
                </p>
                <div className="bg-[#A8B2C0]/10 p-4 space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm font-bold">
                    <div className="w-2 h-2 bg-[#4A90A4]" />
                    <span>Брак: 15% → 0%</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold">
                    <div className="w-2 h-2 bg-[#D97706]" />
                    <span>Производительность: +150%</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold">
                    <div className="w-2 h-2 bg-[#D97706]" />
                    <span>Экономия: 500 000₽/год</span>
                  </div>
                </div>
                <Button variant="link" className="p-0 text-[#1E3A8A] font-bold uppercase">
                  Читать кейс полностью →
                </Button>
              </div>
            </div>

            <div className="bg-white border-l-4 border-[#D4AF37] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:border-[#FFD700] transition-all">
              <div className="aspect-video bg-gradient-to-br from-[#B8860B] to-[#D4AF37] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <Icon name="Factory" size={200} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white" />
                </div>
                <div className="relative z-10 text-white text-center p-6">
                  <div className="text-6xl font-black mb-2">02</div>
                  <div className="text-sm font-bold uppercase tracking-wider">Кейс</div>
                </div>
              </div>
              <div className="p-6">
                <div className="inline-block bg-[#D4AF37]/10 text-[#D4AF37] px-3 py-1 text-xs font-bold uppercase tracking-wide mb-4">
                  УРАЛВАГОНЗАВОД
                </div>
                <h3 className="text-xl font-black text-[#1B263B] mb-3 uppercase">Автоматизация фрезерного участка</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Задача — повысить производительность. Решение: внедрение обрабатывающих центров + роботизация производственных процессов
                </p>
                <div className="bg-[#A8B2C0]/10 p-4 space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm font-bold">
                    <div className="w-2 h-2 bg-[#4A90A4]" />
                    <span>Брак: -80%</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold">
                    <div className="w-2 h-2 bg-[#1E3A8A]" />
                    <span>Время цикла: -40%</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold">
                    <div className="w-2 h-2 bg-[#1E3A8A]" />
                    <span>ROI: 18 месяцев</span>
                  </div>
                </div>
                <Button variant="link" className="p-0 text-[#D4AF37] hover:text-[#FFD700] font-bold uppercase transition-colors">
                  Читать кейс полностью →
                </Button>
              </div>
            </div>

            <div className="bg-white border-l-4 border-[#1E3A8A] hover:shadow-2xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <Icon name="Factory" size={200} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white" />
                </div>
                <div className="relative z-10 text-white text-center p-6">
                  <div className="text-6xl font-black mb-2">03</div>
                  <div className="text-sm font-bold uppercase tracking-wider">Кейс</div>
                </div>
              </div>
              <div className="p-6">
                <div className="inline-block bg-[#4A90A4]/10 text-[#4A90A4] px-3 py-1 text-xs font-bold uppercase tracking-wide mb-4">
                  ВСМПО-AVISMA
                </div>
                <h3 className="text-xl font-black text-[#1B263B] mb-3 uppercase">Обработка титановых сплавов</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Поставка специализированного инструмента. Решение: расточные системы Пумори + пластины Iscar для работы с титаном
                </p>
                <div className="bg-[#A8B2C0]/10 p-4 space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm font-bold">
                    <div className="w-2 h-2 bg-[#4A90A4]" />
                    <span>Точность: +50%</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold">
                    <div className="w-2 h-2 bg-[#D97706]" />
                    <span>Срок службы: x2.5</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold">
                    <div className="w-2 h-2 bg-[#D97706]" />
                    <span>Экономия: 1 200 000₽/год</span>
                  </div>
                </div>
                <Button variant="link" className="p-0 text-[#1E3A8A] font-bold uppercase">
                  Читать кейс полностью →
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] hover:from-[#F4D03F] hover:via-[#FFD700] hover:to-[#F4D03F] text-[#0D1B2A] font-black text-lg px-12 py-6 uppercase shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:shadow-[0_0_50px_rgba(255,215,0,0.8)] transition-all duration-300 glow-gold">
              Все проекты и кейсы
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0D1B2A] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block text-sm font-bold text-[#A8B2C0] uppercase tracking-wider mb-4">
              КЛИЕНТЫ
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#C0C5CE] mb-4 uppercase">
              Нам доверяют лидеры
            </h2>
            <div className="w-20 h-1 bg-[#8B7355] mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
            {['URALVAGONZAVOD', 'VSMPO-AVISMA', 'KAMAZ', 'AVTOVAZ', 'PETROZAVODSK MASH', 'KRASMASH', 'NEVSKY ZAVOD', 'RUSTECHNO'].map((client) => (
              <div
                key={client}
                className="aspect-video bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all hover:scale-105"
              >
                <span className="text-xs font-mono text-white/80 text-center px-4">{client}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm border-2 border-[#1E3A8A] relative">
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#4A90A4]" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#4A90A4]" />
              <div className="text-6xl font-black text-[#A8B2C0] mb-2">35+</div>
              <div className="font-bold text-white uppercase tracking-wide mb-1">Лет экспертизы</div>
              <div className="text-sm text-gray-400">С 1990 года</div>
            </div>

            <div className="text-center p-8 bg-white/5 backdrop-blur-sm border-2 border-[#8B7355] relative">
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#8B7355]" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#8B7355]" />
              <div className="text-6xl font-black text-[#A0826D] mb-2">12000+</div>
              <div className="font-bold text-white uppercase tracking-wide mb-1">Проектов</div>
              <div className="text-sm text-gray-400">По всей России</div>
            </div>

            <div className="text-center p-8 bg-white/5 backdrop-blur-sm border-2 border-[#4A90A4] relative">
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#4A90A4]" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#4A90A4]" />
              <div className="text-6xl font-black text-[#A8B2C0] mb-2">3000+</div>
              <div className="font-bold text-white uppercase tracking-wide mb-1">Инструмента</div>
              <div className="text-sm text-gray-400">На складе</div>
            </div>

            <div className="text-center p-8 bg-white/5 backdrop-blur-sm border-2 border-[#8B7355] relative">
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#8B7355]" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#8B7355]" />
              <div className="text-6xl font-black text-[#A0826D] mb-2">24/7</div>
              <div className="font-bold text-white uppercase tracking-wide mb-1">Сервис</div>
              <div className="text-sm text-gray-400">Круглосуточно</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CasesSection;