import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                industry: 'ЭНЕРГЕТИКА',
                title: 'Уральский турбинный завод',
                description: 'Серийное производство маслоохладителей из нержавейки для ГТУ',
                scope: 'Полный цикл: разработка техпроцесса, оснастка, инструмент, пуск',
                result: 'Точность ±0.05 мм, Ra 1.6',
                color: 'blue',
                icon: 'Zap',
                date: 'Дек 2025',
                image: 'https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/95ad6aba-d684-44bd-a0f5-cbcc8d4ec110.jpg'
              },
              {
                industry: 'АВИАСТРОЕНИЕ',
                title: 'Уральский завод гражданской авиации',
                description: 'Производство 500 высокоточных втулок из жаропрочного сплава',
                scope: 'Допуск H7, шероховатость Ra 0.8, контроль каждой детали',
                result: 'Стабильность ±0.005 мм',
                color: 'bronze',
                icon: 'Plane',
                date: 'Дек 2025',
                image: 'https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/0aa55e77-b8f2-40dc-b75a-1081a398a032.jpg'
              },
              {
                industry: 'МАШИНОСТРОЕНИЕ (ГОЗ)',
                title: 'Липецкий механический завод',
                description: 'Оснащение фрезерно-расточного станка НС212',
                scope: 'Расточка Ø90-480 мм, глубина 300 мм, инструмент Пумори',
                result: 'Импортозамещение 100%',
                color: 'blue',
                icon: 'Shield',
                date: 'Ноя 2025',
                image: 'https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/f2cc32f5-e230-46b9-a69b-93a500963de1.jpg'
              },
              {
                industry: 'ИННОВАЦИИ',
                title: 'Электронные головки Пумори',
                description: 'Чистовое растачивание с оптической линейкой',
                scope: 'Электроника в выносном пульте, универсальность',
                result: 'Точность 1 мкм на Ø',
                color: 'bronze',
                icon: 'Cpu',
                date: 'ИННОПРОМ 2024',
                image: 'https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/92c21235-149b-4b25-a677-fb4d7e7d9137.jpg'
              },
              {
                industry: 'ЭНЕРГЕТИКА',
                title: 'Турбомоторный завод',
                description: 'Участок обработки турбинных дисков Ø до 2500 мм',
                scope: 'Токарно-фрезерные центры с ЧПУ, технологический аудит',
                result: 'Точность ±0.003 мм',
                color: 'blue',
                icon: 'Zap',
                date: '2024',
                image: 'https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/95ad6aba-d684-44bd-a0f5-cbcc8d4ec110.jpg'
              },
              {
                industry: 'АВТОМОБИЛЕСТРОЕНИЕ',
                title: 'Уралвагонзавод',
                description: 'Роботизированный комплекс обработки корпусов',
                scope: 'Проектирование, поставка 12 станков Mazak, робототехника',
                result: 'Брак -85%, ROI 14 мес',
                color: 'bronze',
                icon: 'Truck',
                date: '2024',
                image: 'https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/27702f11-390a-4c2b-b0b9-4c9f040c972a.jpg'
              },
              {
                industry: 'МЕТАЛЛУРГИЯ',
                title: 'ЧТПЗ',
                description: 'Инструментальный цех трубного завода',
                scope: 'Фрезерные центры, формообразующая оснастка',
                result: 'Импортозамещение 100%',
                color: 'blue',
                icon: 'Factory',
                date: '2024',
                image: 'https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/f2cc32f5-e230-46b9-a69b-93a500963de1.jpg'
              },
              {
                industry: 'МЕТРОЛОГИЯ',
                title: 'Измерительное устройство "Пирамида 2.0"',
                description: 'Настройка размера при расточке прямо на станке',
                scope: 'Модернизированная электроника, магнитное крепление',
                result: 'Аналогов в мире нет',
                color: 'bronze',
                icon: 'Ruler',
                date: 'ИННОПРОМ 2024',
                image: 'https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/92c21235-149b-4b25-a677-fb4d7e7d9137.jpg'
              }
            ].map((project, idx) => (
              <div key={idx} className={`bg-white border-l-4 ${project.color === 'blue' ? 'border-[#1E3A8A]' : 'border-[#CD7F32]'} hover:shadow-xl transition-all group overflow-hidden`}>
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color === 'blue' ? 'from-[#1E3A8A]' : 'from-[#CD7F32]'} to-transparent opacity-80`} />
                  <div className="absolute top-4 left-4 right-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="text-xs font-bold text-white uppercase tracking-wider bg-black/30 px-2 py-1">{project.industry}</div>
                      <Icon name={project.icon as any} size={24} className="text-white opacity-70" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-black text-white uppercase leading-tight">{project.title}</h3>
                    {project.date && (
                      <div className="text-xs text-white/80 mt-1">📅 {project.date}</div>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm font-bold text-[#1B263B] mb-3">{project.description}</p>
                  <p className="text-xs text-gray-600 mb-4 leading-relaxed">{project.scope}</p>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className={`inline-flex items-center gap-2 px-3 py-2 ${project.color === 'blue' ? 'bg-[#1E3A8A]/10 text-[#1E3A8A]' : 'bg-[#CD7F32]/10 text-[#CD7F32]'} text-xs font-bold uppercase`}>
                      <Icon name="TrendingUp" size={14} />
                      {project.result}
                    </div>
                  </div>
                  <Link to="/cases" className={`inline-flex items-center gap-2 text-xs font-bold uppercase ${project.color === 'blue' ? 'text-[#1E3A8A] hover:text-[#3B82F6]' : 'text-[#CD7F32] hover:text-[#D4822B]'} transition-colors group`}>
                    Подробнее
                    <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/cases">
              <Button size="lg" className="bg-gradient-to-r from-[#CD7F32] to-[#D4822B] hover:from-[#D4822B] hover:to-[#CD7F32] text-white font-black text-lg px-12 py-6 uppercase shadow-lg hover:shadow-xl transition-all duration-300">
                Все проекты и кейсы
              </Button>
            </Link>
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