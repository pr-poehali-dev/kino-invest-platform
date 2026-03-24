import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

const Cases = () => {
  const cases = [
    {
      id: 1,
      industry: 'ЭНЕРГЕТИКА',
      title: 'Уральский турбинный завод',
      client: 'АО "Уральский турбинный завод"',
      description: 'Организация серийного производства маслоохладителей из нержавеющей стали для газотурбинных установок',
      challenge: 'Требовалось обеспечить высочайшую точность (±0.05 мм) и шероховатость Ra 1.6 мкм при обработке крупногабаритных корпусных деталей из нержавейки. Сложность: налипание стружки, ускоренный износ инструмента, риски перегрева материала.',
      solution: [
        'Разработка технологического процесса под серийное производство',
        'Подбор специализированного инструмента для нержавеющей стали',
        'Изготовление оснастки для крупногабаритных деталей',
        'Отладка режимов обработки на пробных партиях',
        'Запуск стабильного серийного производства'
      ],
      results: [
        'Точность геометрии: ±0.05 мм',
        'Шероховатость поверхности: Ra 1.6 мкм',
        'Сохранена коррозионная стойкость материала',
        'Запущено серийное производство'
      ],
      color: 'blue',
      icon: 'Zap',
      date: 'Декабрь 2025'
    },
    {
      id: 2,
      industry: 'АВИАСТРОЕНИЕ',
      title: 'Уральский завод гражданской авиации',
      client: 'АО "Уральский завод гражданской авиации"',
      description: 'Изготовление партии 500 высокоточных втулок из жаропрочного сплава для узлов шасси регионального самолёта',
      challenge: 'Авиационные допуски H7, шероховатость Ra 0.8 мкм, стабильность ±0.005 мм на всей партии 500 деталей. Отклонение даже на 0.01 мм = отказ в приёмке. Жаропрочный сплав требует особых режимов обработки.',
      solution: [
        'Прецизионное токарное оборудование с ЧПУ',
        'Специализированный инструмент для жаропрочных сплавов',
        'Многоступенчатый контроль качества',
        'Термообработка между операциями',
        'Финишная доводка и измерение каждой детали'
      ],
      results: [
        'Партия 500 втулок изготовлена с допуском H7',
        'Шероховатость Ra 0.8 мкм достигнута',
        'Стабильность геометрии ±0.005 мм',
        '100% приёмка заказчиком, оформлены паспорта'
      ],
      color: 'bronze',
      icon: 'Plane',
      date: 'Декабрь 2025'
    },
    {
      id: 3,
      industry: 'МАШИНОСТРОЕНИЕ (ГОЗ)',
      title: 'Липецкий механический завод',
      client: 'ООО "Липецкий механический завод"',
      description: 'Комплексное оснащение горизонтально-фрезерно-расточного станка НС212 для выполнения государственного оборонного заказа',
      challenge: 'Требовалось оснастить современный станок НС212 для расточки отверстий Ø90-480 мм на глубину до 300 мм с высокой производительностью для выполнения ГОЗ.',
      solution: [
        'Выезд специалистов на производство заказчика',
        'Изучение конструкторской документации и техтребований',
        'Подбор расточной оснастки с хвостовиками MAS BT50',
        'Комплектация инструментом Пумори (импортозамещение)',
        'Обучение персонала работе с оснасткой'
      ],
      results: [
        'Станок полностью оснащён инструментом',
        'Диапазон обработки: Ø90-480 мм, глубина 300 мм',
        'Импортозамещение: 100% российский инструмент',
        'Выполнены требования для работы по ГОЗ'
      ],
      color: 'blue',
      icon: 'Shield',
      date: 'Ноябрь 2025'
    },
    {
      id: 4,
      industry: 'ИННОВАЦИИ',
      title: 'Электронные расточные головки Пумори',
      client: 'Собственная разработка для промышленности',
      description: 'Система чистового растачивания с оптической линейкой и выносным электронным пультом',
      challenge: 'Существующие электронные головки имеют электронику внутри корпуса, что делает её уязвимой к повреждениям, СОЖ, вибрациям. Высокая стоимость ремонта при выходе из строя.',
      solution: [
        'Оптическая линейка внутри головки (защищённая)',
        'ВСЯ электроника вынесена в отдельный пульт',
        'Один пульт работает со всеми расточными головками',
        'Повышенная надёжность и защита от повреждений',
        'Точность настройки: 1 мкм на диаметр'
      ],
      results: [
        'Точность настройки: 1 мкм на Ø',
        'Защита электроники от повреждений',
        'Экономия средств предприятия',
        'Не имеет аналогов в мире'
      ],
      color: 'bronze',
      icon: 'Cpu',
      date: 'ИННОПРОМ 2024'
    },
    {
      id: 5,
      industry: 'МЕТРОЛОГИЯ',
      title: 'Измерительное устройство "Пирамида 2.0"',
      client: 'Собственная разработка для промышленности',
      description: 'Внешнее измерительное устройство для точной настройки размера при расточных операциях непосредственно на станке',
      challenge: 'Традиционные методы настройки расточных инструментов требуют снятия со станка, измерения, корректировки, установки обратно. Это отнимает время и снижает точность из-за многократных переустановок.',
      solution: [
        'Настройка инструмента прямо на станке без снятия',
        'Переработанный корпус версии 2.0',
        'Усовершенствованная электроника',
        'Улучшенная система магнитного крепления',
        'Полностью российская разработка и производство'
      ],
      results: [
        'Экономия времени на настройку в 5-7 раз',
        'Повышение точности настройки',
        'Не имеет аналогов в мире',
        'Импортозамещение 100%'
      ],
      color: 'blue',
      icon: 'Ruler',
      date: 'ИННОПРОМ 2024'
    },
    {
      id: 6,
      industry: 'АВТОМОБИЛЕСТРОЕНИЕ',
      title: 'Уралвагонзавод',
      client: 'АО "Научно-производственная корпорация Уралвагонзавод"',
      description: 'Роботизированный комплекс обработки корпусных деталей с внедрением автоматизации производственных процессов',
      challenge: 'Высокий уровень брака (15-18%), низкая производительность устаревшего оборудования, необходимость повышения объёмов производства при сохранении качества.',
      solution: [
        'Проектирование роботизированного комплекса',
        'Поставка 12 обрабатывающих центров Okuma',
        'Внедрение роботизированной системы загрузки/выгрузки',
        'Разработка управляющих программ',
        'Обучение персонала и техническая поддержка'
      ],
      results: [
        'Брак снижен на 85% (с 15% до 2%)',
        'Время цикла сокращено на 40%',
        'Производительность увеличена в 2.5 раза',
        'ROI проекта: 14 месяцев'
      ],
      color: 'bronze',
      icon: 'Truck',
      date: '2024'
    },
    {
      id: 7,
      industry: 'ЭНЕРГЕТИКА',
      title: 'Турбомоторный завод',
      client: 'АО "Турбомоторный завод"',
      description: 'Организация участка обработки крупногабаритных турбинных дисков диаметром до 2500 мм',
      challenge: 'Обработка крупногабаритных дисков требует высокоточного оборудования, способного работать с диаметрами до 2500 мм при сохранении точности ±0.003 мм.',
      solution: [
        'Поставка токарно-фрезерных центров с ЧПУ',
        'Технологический аудит существующего производства',
        'Разработка техпроцессов обработки',
        'Подбор специализированного инструмента',
        'Пуско-наладочные работы и обучение'
      ],
      results: [
        'Точность обработки: ±0.003 мм',
        'Диапазон диаметров: до Ø2500 мм',
        'Сокращение цикла обработки на 35%',
        'Стабильное качество продукции'
      ],
      color: 'blue',
      icon: 'Zap',
      date: '2024'
    },
    {
      id: 8,
      industry: 'МЕТАЛЛУРГИЯ',
      title: 'Челябинский трубопрокатный завод',
      client: 'АО "ЧТПЗ"',
      description: 'Модернизация инструментального цеха трубного завода с полным импортозамещением',
      challenge: 'После ухода импортных поставщиков инструмента встала задача перехода на российские аналоги без потери качества и производительности.',
      solution: [
        'Поставка фрезерных обрабатывающих центров',
        'Производство формообразующей оснастки',
        'Замена импортного инструмента на российский Пумори',
        'Технологическое сопровождение перехода',
        'Обучение персонала работе с новым оснащением'
      ],
      results: [
        'Импортозамещение: 100%',
        'Качество продукции не снизилось',
        'Экономия на закупках: 40%',
        'Независимость от импортных поставок'
      ],
      color: 'bronze',
      icon: 'Factory',
      date: '2024'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Кейсы: УВЗ, УТЗ, Турбомоторный | ROI 14 мес, брак снижен на 85%"
        description="📊 Реальные результаты клиентов: Уралвагонзавод - брак с 15% до 2%, производительность +150%. Турбомоторный завод - точность 0.003 мм, цикл -35%. ✅ 1200+ проектов ✅ Гарантия результата. Хотите так же? → +7 (343) 287-30-58"
        keywords="кейсы уралвагонзавод, проекты турбомоторный завод, роботизация увз, автоматизация производства примеры, снижение брака производство, повышение производительности цеха, roi производственного проекта, успешные кейсы металлообработка"
        canonical="https://pumori360.online/cases"
      />
      <BreadcrumbSchema items={[
        { name: 'Главная', url: 'https://pumori360.online/' },
        { name: 'Кейсы', url: 'https://pumori360.online/cases' }
      ]} />
      <Header />

      <div className="bg-gray-50 py-3 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-primary">Главная</Link>
            <Icon name="ChevronRight" size={16} />
            <span className="text-primary font-medium">Кейсы</span>
          </div>
        </div>
      </div>

      <section className="py-20 bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#0D1B2A] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block text-sm font-bold text-[#CD7F32] uppercase tracking-wider mb-4">
              РЕАЛИЗОВАННЫЕ ПРОЕКТЫ
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#E8EAED] via-[#C0C5CE] to-[#8B96A5] animate-shimmer">
              Кейсы полного цикла
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-[#CD7F32] to-[#D4822B] mb-6" />
            <p className="text-xl text-[#A8B2C0] mb-8">
              От проектирования до запуска и постгарантийной поддержки — реальные результаты работы с крупнейшими предприятиями России
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-16">
            {cases.map((caseItem, idx) => (
              <div key={caseItem.id} className={`bg-gradient-to-br from-gray-50 to-white border-2 ${caseItem.color === 'blue' ? 'border-[#1E3A8A]' : 'border-[#CD7F32]'} overflow-hidden hover:shadow-2xl transition-all`}>
                <div className="grid lg:grid-cols-3">
                  <div className={`p-8 bg-gradient-to-br ${caseItem.color === 'blue' ? 'from-[#1E3A8A] to-[#3B82F6]' : 'from-[#CD7F32] to-[#D4822B]'} text-white lg:col-span-1`}>
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider opacity-80 mb-2">{caseItem.industry}</div>
                        <div className="text-sm opacity-70">📅 {caseItem.date}</div>
                      </div>
                      <Icon name={caseItem.icon as any} size={48} className="opacity-30" />
                    </div>
                    <div className="text-6xl font-black mb-4 opacity-20">0{idx + 1}</div>
                    <h2 className="text-2xl font-black uppercase mb-4">{caseItem.title}</h2>
                    <p className="text-sm opacity-90 mb-6">{caseItem.client}</p>
                    <div className="pt-6 border-t border-white/20">
                      <h3 className="text-xs font-bold uppercase mb-3 opacity-80">Результаты:</h3>
                      <div className="space-y-2">
                        {caseItem.results.map((result, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm">
                            <Icon name="Check" size={16} className="mt-0.5 flex-shrink-0" />
                            <span>{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-8 lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-lg font-black text-[#1B263B] mb-3 uppercase">Описание проекта</h3>
                      <p className="text-gray-700 leading-relaxed">{caseItem.description}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-black text-[#1B263B] mb-3 uppercase">Задачи и вызовы</h3>
                      <p className="text-gray-700 leading-relaxed">{caseItem.challenge}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-black text-[#1B263B] mb-3 uppercase">Решение</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {caseItem.solution.map((item, i) => (
                          <div key={i} className="flex items-start gap-3 bg-gray-50 p-4 border-l-2 border-[#3B82F6]">
                            <div className={`w-6 h-6 rounded-full ${caseItem.color === 'blue' ? 'bg-[#1E3A8A]' : 'bg-[#CD7F32]'} flex items-center justify-center flex-shrink-0 text-white text-xs font-bold`}>
                              {i + 1}
                            </div>
                            <span className="text-sm text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0D1B2A] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase">Готовы повторить такой успех у себя?</h2>
          <p className="text-xl text-[#A8B2C0] mb-8 max-w-2xl mx-auto">
            Решим вашу производственную задачу под ключ с гарантией результата
          </p>
          <Button size="lg" className="bg-gradient-to-r from-[#CD7F32] to-[#D4822B] hover:from-[#D4822B] hover:to-[#CD7F32] text-white font-black text-lg px-12 py-6 uppercase" onClick={() => window.location.href = 'mailto:info@pumori-invest.ru?subject=Обсудить проект'}>
            Обсудить проект
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cases;