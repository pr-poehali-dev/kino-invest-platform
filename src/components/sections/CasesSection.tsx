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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                industry: 'АВИАСТРОЕНИЕ',
                title: 'ОДК-УМПО',
                description: 'Техперевооружение токарного участка лопаток',
                scope: 'Поставка 5-осевых центров OKUMA, разработка техпроцессов, обучение персонала',
                result: 'Производительность +180%',
                color: 'blue',
                icon: 'Plane'
              },
              {
                industry: 'АВТОМОБИЛЕСТРОЕНИЕ',
                title: 'Уралвагонзавод',
                description: 'Роботизированный комплекс обработки корпусов',
                scope: 'Проектирование, поставка 12 станков Mazak, внедрение робототехники',
                result: 'Брак -85%, ROI 14 мес',
                color: 'bronze',
                icon: 'Truck'
              },
              {
                industry: 'ЭНЕРГЕТИКА',
                title: 'Турбомоторный завод',
                description: 'Участок обработки турбинных дисков Ø до 2500 мм',
                scope: 'Токарно-фрезерные центры с ЧПУ, технологический аудит',
                result: 'Точность ±0.003 мм',
                color: 'blue',
                icon: 'Zap'
              },
              {
                industry: 'НЕФТЕГАЗ',
                title: 'Арматурный завод',
                description: 'Производство запорной арматуры DN до 600',
                scope: 'Модернизация 8 станков, оснастка, режущий инструмент',
                result: 'Цикл -35%, экономия 2М₽/год',
                color: 'bronze',
                icon: 'PipeDrop'
              },
              {
                industry: 'ТРАНСПОРТ',
                title: 'РЖД, ТЧЭ-5',
                description: 'Ремонтный участок колесных пар локомотивов',
                scope: 'Токарные с ЧПУ, круглошлифовальные, КИМ',
                result: 'Производительность x2.2',
                color: 'blue',
                icon: 'Train'
              },
              {
                industry: 'МЕТАЛЛУРГИЯ',
                title: 'ЧТПЗ',
                description: 'Инструментальный цех трубного завода',
                scope: 'Фрезерные центры, формообразующая оснастка',
                result: 'Импортозамещение 100%',
                color: 'bronze',
                icon: 'Factory'
              },
              {
                industry: 'МЕДТЕХНИКА',
                title: 'Эндопротезирование',
                description: 'Производство имплантатов Ti-6Al-4V',
                scope: '5-осевые центры, биосовместимая обработка, контроль',
                result: 'Шероховатость Ra 0.2',
                color: 'blue',
                icon: 'Heart'
              },
              {
                industry: 'ОБОРОНПРОМ',
                title: 'Машиностроительный завод',
                description: 'Техперевооружение механического участка',
                scope: 'Комплексный проект под ключ: от аудита до пуска',
                result: 'Мощность +250%',
                color: 'bronze',
                icon: 'Shield'
              }
            ].map((project, idx) => (
              <div key={idx} className={`bg-white border-l-4 ${project.color === 'blue' ? 'border-[#1E3A8A]' : 'border-[#CD7F32]'} hover:shadow-xl transition-all group`}>
                <div className={`p-6 bg-gradient-to-br ${project.color === 'blue' ? 'from-[#1E3A8A] to-[#3B82F6]' : 'from-[#CD7F32] to-[#D4822B]'} text-white`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-xs font-bold uppercase tracking-wider opacity-80">{project.industry}</div>
                    <Icon name={project.icon as any} size={24} className="opacity-50" />
                  </div>
                  <h3 className="text-xl font-black uppercase">{project.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-sm font-bold text-[#1B263B] mb-3">{project.description}</p>
                  <p className="text-xs text-gray-600 mb-4 leading-relaxed">{project.scope}</p>
                  <div className={`inline-flex items-center gap-2 px-3 py-2 ${project.color === 'blue' ? 'bg-[#1E3A8A]/10 text-[#1E3A8A]' : 'bg-[#CD7F32]/10 text-[#CD7F32]'} text-xs font-bold uppercase`}>
                    <Icon name="TrendingUp" size={14} />
                    {project.result}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-[#CD7F32] to-[#D4822B] hover:from-[#D4822B] hover:to-[#CD7F32] text-white font-black text-lg px-12 py-6 uppercase shadow-lg hover:shadow-xl transition-all duration-300">
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