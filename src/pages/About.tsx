import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import SEO from '@/components/SEO';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO 
        title="О Пумори | 35 лет опыта, УЗИС завод, представительства в РФ"
        description="🏢 С 1990 года помогаем предприятиям РФ. ✅ Собственный завод УЗИС ✅ КБ из 40 инженеров ✅ Представительства во всех промрегионах ✅ Партнёры мировых брендов ✅ 1200+ запущенных производств. Стать клиентом → +7 (343) 287-30-58"
        keywords="корпорация пумори екатеринбург, узис уральский завод инструментальных систем, техтрейд компания, российский производитель инструмента, представительства пумори регионы, история компании пумори 1990"
        canonical="https://pumori360.online/about"
      />
      <Header />
      
      <section className="relative bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#0D1B2A] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(74, 144, 164, 0.1) 10px, rgba(74, 144, 164, 0.1) 20px)`
        }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#CD7F32] to-[#D4822B] px-4 py-2 mb-6 font-bold text-sm text-white uppercase tracking-wider">
              <div className="w-2 h-2 bg-white animate-pulse" />
              С 1990 ГОДА
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase">
              О КОРПОРАЦИИ ПУМОРИ
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-[#CD7F32] to-[#D4822B] mb-6" />
            <p className="text-xl text-[#A8B2C0] leading-relaxed">
              Российский производитель и эксперт в области инжиниринга для металлообработки. Партнёр ведущих мировых производителей оборудования и инструмента. Предприятия и представительства корпорации успешно функционируют во всех основных индустриальных регионах Российской Федерации.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
            <div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-8 bg-gradient-to-br from-[#0D1B2A] to-[#1B263B] text-white">
                  <div className="text-6xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#CD7F32] to-[#D4822B]">
                    30+
                  </div>
                  <div className="text-xs uppercase tracking-wider text-[#A8B2C0]">Лет на рынке</div>
                </div>
                <div className="text-center p-8 bg-gradient-to-br from-[#0D1B2A] to-[#1B263B] text-white">
                  <div className="text-6xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#4A90A4] to-[#6BC1E0]">
                    12000+
                  </div>
                  <div className="text-xs uppercase tracking-wider text-[#A8B2C0]">Проектов реализовано</div>
                </div>
                <div className="text-center p-8 bg-gradient-to-br from-[#0D1B2A] to-[#1B263B] text-white">
                  <div className="text-6xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#CD7F32] to-[#D4822B]">
                    3000+
                  </div>
                  <div className="text-xs uppercase tracking-wider text-[#A8B2C0]">Позиций инструмента</div>
                </div>
                <div className="text-center p-8 bg-gradient-to-br from-[#0D1B2A] to-[#1B263B] text-white">
                  <div className="text-6xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#4A90A4] to-[#6BC1E0]">
                    24/7
                  </div>
                  <div className="text-xs uppercase tracking-wider text-[#A8B2C0]">Сервисная поддержка</div>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/97d08a30-baea-4701-b910-6c473473435d.jpg"
                alt="Современное производство"
                className="w-full h-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/60 to-transparent" />
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase text-[#1B263B]">
              Комплексные решения полного цикла
            </h2>
            <p className="text-lg text-[#4A5568] mb-8">
              Корпорация «Пумори» предлагает полный комплекс инженерных услуг для металлообрабатывающих производств — от проектирования и поставки оборудования до технологического сопровождения и обучения персонала.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <div className="border-l-4 border-[#CD7F32] pl-6 py-4 bg-[#0D1B2A]/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#CD7F32] to-[#D4822B] flex items-center justify-center">
                    <Icon name="Factory" size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-black uppercase text-[#1B263B]">Инжиниринг</h3>
                </div>
                <ul className="space-y-2 text-[#4A5568]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#CD7F32] mt-1">▸</span>
                    Проектирование производств под ключ
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#CD7F32] mt-1">▸</span>
                    Передовые технологии металлообработки
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#CD7F32] mt-1">▸</span>
                    Промышленная автоматизация
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#CD7F32] mt-1">▸</span>
                    Учебные и демонстрационные центры
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-[#4A90A4] pl-6 py-4 bg-[#0D1B2A]/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#4A90A4] to-[#6BC1E0] flex items-center justify-center">
                    <Icon name="Settings" size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-black uppercase text-[#1B263B]">Оборудование</h3>
                </div>
                <ul className="space-y-2 text-[#4A5568]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A90A4] mt-1">▸</span>
                    Металлорежущие станки
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A90A4] mt-1">▸</span>
                    Собственные лопатки для турбин
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A90A4] mt-1">▸</span>
                    Лизинговое финансирование
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A90A4] mt-1">▸</span>
                    Сервис и модернизация
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-[#8B7355] pl-6 py-4 bg-[#0D1B2A]/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#8B7355] to-[#A89080] flex items-center justify-center">
                    <Icon name="Wrench" size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-black uppercase text-[#1B263B]">Инструмент</h3>
                </div>
                <ul className="space-y-2 text-[#4A5568]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B7355] mt-1">▸</span>
                    Режущий инструмент от мировых брендов
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B7355] mt-1">▸</span>
                    Вспомогательная оснастка собственного производства
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B7355] mt-1">▸</span>
                    Системы управления инструментом
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-[#FF6B00] pl-6 py-4 bg-[#0D1B2A]/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B00] to-[#FF8534] flex items-center justify-center">
                    <Icon name="Cog" size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-black uppercase text-[#1B263B]">Производство</h3>
                </div>
                <ul className="space-y-2 text-[#4A5568]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF6B00] mt-1">▸</span>
                    Аутсорсинг металлообработки любой сложности
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF6B00] mt-1">▸</span>
                    Собственные производственные мощности
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF6B00] mt-1">▸</span>
                    Работа с крупными, средними и малыми предприятиями
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
              <div className="relative overflow-hidden rounded-lg shadow-2xl order-2 lg:order-1">
                <img 
                  src="https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/93ceaa7b-aaad-4f6b-8e4f-1d6d4bba970e.jpg"
                  alt="Команда профессионалов"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/60 to-transparent" />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase text-[#1B263B]">
                  Принцип работы: «Обещал — Сделал»
                </h2>
                <p className="text-lg text-[#4A5568] leading-relaxed mb-6">
                  Основа нашей философии — это доверие, уважение и выполнение обещаний. Мы развиваем персонал, ставим клиента на первое место и внедряем инновации как принцип работы.
                </p>
                <p className="text-lg text-[#4A5568] leading-relaxed">
                  Наш успех — это успех наших клиентов. Мы не просто поставляем оборудование, мы создаём долгосрочные партнёрские отношения с машиностроительными предприятиями России, стран СНГ (Белоруссии, Казахстана) и международных рынков.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase text-[#1B263B]">
                  Собственное производство
                </h2>
                <p className="text-lg text-[#4A5568] mb-8 leading-relaxed">
                  Корпорация «Пумори» управляет собственными производственными мощностями для выпуска высокотехнологичной продукции.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 bg-white border border-[#E2E8F0] p-6 hover:border-[#CD7F32] transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#CD7F32] to-[#D4822B] flex items-center justify-center flex-shrink-0">
                      <Icon name="Wrench" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 uppercase text-sm text-[#1B263B]">Инструмент PUMORI</h3>
                      <p className="text-sm text-[#4A5568]">Вспомогательный инструмент собственного производства</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white border border-[#E2E8F0] p-6 hover:border-[#4A90A4] transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#4A90A4] to-[#6BC1E0] flex items-center justify-center flex-shrink-0">
                      <Icon name="Settings" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 uppercase text-sm text-[#1B263B]">Станки с ЧПУ</h3>
                      <p className="text-sm text-[#4A5568]">Токарные обрабатывающие центры с ЧПУ</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white border border-[#E2E8F0] p-6 hover:border-[#FF6B00] transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B00] to-[#FF8534] flex items-center justify-center flex-shrink-0">
                      <Icon name="Zap" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 uppercase text-sm text-[#1B263B]">Турбинные лопатки</h3>
                      <p className="text-sm text-[#4A5568]">Лопатки паровых и газовых турбин</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/c17f3c8c-6e25-4125-8d79-0062f14dbc9f.jpg"
                  alt="Производственный процесс"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/60 to-transparent" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase text-[#1B263B] text-center">
              Корпоративные Ценности
            </h2>
            <p className="text-center text-[#4A5568] mb-12 max-w-3xl mx-auto">
              Более 30 лет опыта генерального директора Александра Ивановича Баландина в машиностроении легли в основу культуры компании.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="bg-white border border-[#E2E8F0] p-6 hover:border-[#CD7F32] transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-[#CD7F32] to-[#D4822B] flex items-center justify-center mb-4">
                  <Icon name="Target" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Клиент на первом месте</h3>
                <p className="text-[#4A5568]">
                  Полный цикл инжиниринговых услуг и техническое сопровождение на всех этапах
                </p>
              </div>

              <div className="bg-white border border-[#E2E8F0] p-6 hover:border-[#4A90A4] transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-[#4A90A4] to-[#6BC1E0] flex items-center justify-center mb-4">
                  <Icon name="Heart" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Уважение и доверие</h3>
                <p className="text-[#4A5568]">
                  Долгосрочные партнёрские отношения как основа коммуникации с клиентами
                </p>
              </div>

              <div className="bg-white border border-[#E2E8F0] p-6 hover:border-[#8B7355] transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-[#8B7355] to-[#A89080] flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Развитие персонала</h3>
                <p className="text-[#4A5568]">
                  Инвестиции в обучение и развитие команды профессионалов с экспертизой в металлообработке
                </p>
              </div>

              <div className="bg-white border border-[#E2E8F0] p-6 hover:border-[#FF6B00] transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B00] to-[#FF8534] flex items-center justify-center mb-4">
                  <Icon name="Lightbulb" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Инновации как принцип</h3>
                <p className="text-[#4A5568]">
                  Внедрение передовых технологий металлообработки и развитие собственных производственных решений
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0D1B2A] to-[#1B263B] p-8 md:p-16 text-white mb-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#CD7F32] opacity-5 rounded-full -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#4A90A4] opacity-5 rounded-full -ml-24 -mb-24" />
              
              <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase text-center relative z-10">
                История Корпорации
              </h2>
              <p className="text-center text-[#A8B2C0] mb-16 relative z-10 max-w-2xl mx-auto">
                Путь от небольшой компании до ведущего поставщика комплексных решений для металлообработки
              </p>
              
              <div className="relative z-10 max-w-5xl mx-auto">
                <div className="relative">
                  {/* Vertical Timeline Line */}
                  <div className="absolute left-[52px] top-0 bottom-0 w-1 bg-gradient-to-b from-[#CD7F32] via-[#4A90A4] to-[#CD7F32] opacity-30 hidden md:block" />

                  <div className="space-y-12">
                    {/* 1990 */}
                    <div className="relative flex gap-8 items-start">
                      <div className="flex-shrink-0 relative">
                        <div className="w-28 h-28 bg-gradient-to-br from-[#CD7F32] to-[#D4822B] flex items-center justify-center font-black text-3xl shadow-2xl">
                          1990
                        </div>
                        <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-1 bg-[#CD7F32] hidden md:block" />
                      </div>
                      <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8">
                        <h3 className="text-2xl md:text-3xl font-black mb-3 text-[#CD7F32] uppercase tracking-tight">
                          Основание компании
                        </h3>
                        <p className="text-base md:text-lg text-[#C0C5CE] leading-relaxed">
                          Создание Корпорации «Пумори» под руководством Александра Ивановича Баландина. Начало деятельности в области поставки металлорежущего инструмента для машиностроительных предприятий Урала.
                        </p>
                      </div>
                    </div>

                    {/* 1995-2000 */}
                    <div className="relative flex gap-8 items-start">
                      <div className="flex-shrink-0 relative">
                        <div className="w-28 h-28 bg-gradient-to-br from-[#4A90A4] to-[#6BC1E0] flex items-center justify-center font-black text-xl text-center leading-tight shadow-2xl">
                          1995-<br/>2000
                        </div>
                        <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-1 bg-[#4A90A4] hidden md:block" />
                      </div>
                      <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8">
                        <h3 className="text-2xl md:text-3xl font-black mb-3 text-[#6BC1E0] uppercase tracking-tight">
                          Расширение портфолио
                        </h3>
                        <p className="text-base md:text-lg text-[#C0C5CE] leading-relaxed">
                          Развитие направления по поставке металлообрабатывающего оборудования. Установление партнёрских отношений с ведущими мировыми производителями станков с ЧПУ и режущего инструмента.
                        </p>
                      </div>
                    </div>

                    {/* 2000-2010 */}
                    <div className="relative flex gap-8 items-start">
                      <div className="flex-shrink-0 relative">
                        <div className="w-28 h-28 bg-gradient-to-br from-[#8B7355] to-[#A89080] flex items-center justify-center font-black text-xl text-center leading-tight shadow-2xl">
                          2000-<br/>2010
                        </div>
                        <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-1 bg-[#8B7355] hidden md:block" />
                      </div>
                      <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8">
                        <h3 className="text-2xl md:text-3xl font-black mb-3 text-[#A89080] uppercase tracking-tight">
                          Развитие сервиса
                        </h3>
                        <p className="text-base md:text-lg text-[#C0C5CE] leading-relaxed">
                          Запуск собственных сервисных центров. Создание инженерного подразделения для проектирования производств под ключ. Открытие представительств в крупнейших промышленных регионах России.
                        </p>
                      </div>
                    </div>

                    {/* 2010-2020 */}
                    <div className="relative flex gap-8 items-start">
                      <div className="flex-shrink-0 relative">
                        <div className="w-28 h-28 bg-gradient-to-br from-[#FF6B00] to-[#FF8534] flex items-center justify-center font-black text-xl text-center leading-tight shadow-2xl">
                          2010-<br/>2020
                        </div>
                        <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-1 bg-[#FF6B00] hidden md:block" />
                      </div>
                      <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8">
                        <h3 className="text-2xl md:text-3xl font-black mb-3 text-[#FF8534] uppercase tracking-tight">
                          Собственное производство
                        </h3>
                        <p className="text-base md:text-lg text-[#C0C5CE] leading-relaxed">
                          Открытие собственных производственных мощностей: выпуск вспомогательного инструмента PUMORI, токарных центров с ЧПУ и турбинных лопаток. Создание лизинговой компании для финансирования поставок.
                        </p>
                      </div>
                    </div>

                    {/* 2020+ */}
                    <div className="relative flex gap-8 items-start">
                      <div className="flex-shrink-0 relative">
                        <div className="w-28 h-28 bg-gradient-to-br from-[#CD7F32] to-[#D4822B] flex items-center justify-center font-black text-2xl relative shadow-2xl">
                          <div className="absolute inset-0 border-4 border-[#CD7F32] animate-pulse" />
                          <span className="relative z-10">2020+</span>
                        </div>
                        <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-1 bg-[#CD7F32] hidden md:block" />
                      </div>
                      <div className="flex-1 bg-white/5 backdrop-blur-sm border-2 border-[#CD7F32]/50 p-6 md:p-8">
                        <h3 className="text-2xl md:text-3xl font-black mb-3 text-[#CD7F32] uppercase tracking-tight">
                          Цифровизация и инновации
                        </h3>
                        <p className="text-base md:text-lg text-[#C0C5CE] leading-relaxed">
                          Внедрение цифровых технологий управления производством. Развитие направления промышленной автоматизации и роботизации. Создание учебных и демонстрационных центров для обучения персонала клиентов. Выход на международные рынки.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/20 text-center">
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#CD7F32] to-[#D4822B] px-8 py-4 shadow-2xl">
                    <Icon name="TrendingUp" size={28} className="text-white" />
                    <span className="text-xl font-black text-white uppercase tracking-wide">
                      30+ лет лидерства в металлообработке
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F7FAFC] p-8 md:p-12 border-l-4 border-[#CD7F32]">
              <h2 className="text-3xl font-black mb-6 uppercase text-[#1B263B]">
                География присутствия
              </h2>
              <p className="text-lg text-[#4A5568] leading-relaxed mb-6">
                Предприятия и представительства корпорации успешно функционируют во всех основных индустриальных регионах Российской Федерации.
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-2 bg-white px-4 py-2 border border-[#E2E8F0]">
                  <Icon name="MapPin" size={20} className="text-[#CD7F32]" />
                  <span className="font-semibold text-[#1B263B]">Екатеринбург</span>
                  <span className="text-sm text-[#718096]">(головной офис)</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 border border-[#E2E8F0]">
                  <Icon name="Building2" size={20} className="text-[#4A90A4]" />
                  <span className="text-sm text-[#4A5568]">Представительства по РФ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#0D1B2A] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black mb-12 uppercase text-center">
              Руководство
            </h2>
            <div className="bg-white/5 backdrop-blur-sm border-2 border-white/20 p-8 md:p-12">
              <div className="grid md:grid-cols-[300px,1fr] gap-8 items-center">
                <div className="relative">
                  <div className="relative overflow-hidden rounded-lg shadow-2xl">
                    <img 
                      src="https://cdn.poehali.dev/files/IMG_0687.jpeg"
                      alt="Баландин Александр Иванович"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 ring-4 ring-[#CD7F32]/30 ring-inset" />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Баландин Александр Иванович</h3>
                  <div className="text-[#CD7F32] font-semibold mb-6 uppercase text-sm tracking-wider">
                    Генеральный директор
                  </div>
                  <p className="text-[#C0C5CE] leading-relaxed text-lg mb-4">
                    Более 30 лет опыта работы в машиностроении. Под его руководством корпорация «Пумори» стала одним из ведущих поставщиков технологических решений для металлообработки в России.
                  </p>
                  <p className="text-[#A8B2C0] leading-relaxed">
                    Основатель компании, который превратил небольшую торговую организацию в крупную корпорацию полного цикла с собственными производственными мощностями и представительствами во всех индустриальных регионах РФ.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;