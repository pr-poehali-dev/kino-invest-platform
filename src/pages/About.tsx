import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
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
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-gradient-to-br from-[#0D1B2A] to-[#1B263B] text-white">
              <div className="text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#CD7F32] to-[#D4822B]">
                30+
              </div>
              <div className="text-sm uppercase tracking-wide">Лет на рынке</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-[#0D1B2A] to-[#1B263B] text-white">
              <div className="text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#4A90A4] to-[#6BC1E0]">
                12000+
              </div>
              <div className="text-sm uppercase tracking-wide">Проектов реализовано</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-[#0D1B2A] to-[#1B263B] text-white">
              <div className="text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#CD7F32] to-[#D4822B]">
                3000+
              </div>
              <div className="text-sm uppercase tracking-wide">Позиций инструмента</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-[#0D1B2A] to-[#1B263B] text-white">
              <div className="text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#4A90A4] to-[#6BC1E0]">
                24/7
              </div>
              <div className="text-sm uppercase tracking-wide">Сервисная поддержка</div>
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

            <div className="bg-gradient-to-br from-[#0D1B2A] to-[#1B263B] p-8 md:p-12 text-white mb-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#CD7F32] opacity-10 rounded-full -mr-16 -mt-16" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#4A90A4] opacity-10 rounded-full -ml-24 -mb-24" />
              
              <h2 className="text-3xl font-black mb-6 uppercase">Принцип работы: «Обещал — Сделал»</h2>
              <p className="text-lg text-[#A8B2C0] leading-relaxed mb-6">
                Основа нашей философии — это доверие, уважение и выполнение обещаний. Мы развиваем персонал, ставим клиента на первое место и внедряем инновации как принцип работы.
              </p>
              <p className="text-lg text-[#A8B2C0] leading-relaxed">
                Наш успех — это успех наших клиентов. Мы не просто поставляем оборудование, мы создаём долгосрочные партнёрские отношения с машиностроительными предприятиями России, стран СНГ (Белоруссии, Казахстана) и международных рынков.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0D1B2A] to-[#1B263B] p-8 md:p-12 text-white mb-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#CD7F32] opacity-10 rounded-full -mr-16 -mt-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#4A90A4] opacity-10 rounded-full -ml-12 -mb-12" />
              
              <h2 className="text-3xl font-black mb-6 uppercase relative z-10">
                Собственное производство
              </h2>
              <div className="grid md:grid-cols-3 gap-6 relative z-10">
                <div className="bg-white/5 backdrop-blur-sm border border-white/20 p-6">
                  <div className="text-4xl mb-3">🔧</div>
                  <h3 className="font-bold mb-2 uppercase text-sm">Инструмент PUMORI</h3>
                  <p className="text-sm text-[#A8B2C0]">Вспомогательный инструмент собственного производства</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/20 p-6">
                  <div className="text-4xl mb-3">⚙️</div>
                  <h3 className="font-bold mb-2 uppercase text-sm">Станки с ЧПУ</h3>
                  <p className="text-sm text-[#A8B2C0]">Токарные обрабатывающие центры с ЧПУ</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/20 p-6">
                  <div className="text-4xl mb-3">⚡</div>
                  <h3 className="font-bold mb-2 uppercase text-sm">Турбинные лопатки</h3>
                  <p className="text-sm text-[#A8B2C0]">Лопатки паровых и газовых турбин</p>
                </div>
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

            <div className="bg-gradient-to-br from-[#0D1B2A] to-[#1B263B] p-8 md:p-12 text-white mb-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#CD7F32] opacity-5 rounded-full -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#4A90A4] opacity-5 rounded-full -ml-24 -mb-24" />
              
              <h2 className="text-3xl md:text-4xl font-black mb-12 uppercase text-center relative z-10">
                История Корпорации
              </h2>
              
              <div className="relative z-10 max-w-4xl mx-auto">
                <div className="space-y-8">
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 bg-gradient-to-br from-[#CD7F32] to-[#D4822B] flex items-center justify-center font-black text-2xl">
                        1990
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-xl font-black mb-2 text-[#CD7F32]">ОСНОВАНИЕ КОМПАНИИ</h3>
                      <p className="text-[#A8B2C0] leading-relaxed">
                        Создание Корпорации «Пумори» под руководством Александра Ивановича Баландина. Начало деятельности в области поставки металлорежущего инструмента для машиностроительных предприятий Урала.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 bg-gradient-to-br from-[#4A90A4] to-[#6BC1E0] flex items-center justify-center font-black text-xl text-center leading-tight">
                        1995-<br/>2000
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-xl font-black mb-2 text-[#6BC1E0]">РАСШИРЕНИЕ ПОРТФОЛИО</h3>
                      <p className="text-[#A8B2C0] leading-relaxed">
                        Развитие направления по поставке металлообрабатывающего оборудования. Установление партнёрских отношений с ведущими мировыми производителями станков с ЧПУ и режущего инструмента.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 bg-gradient-to-br from-[#8B7355] to-[#A89080] flex items-center justify-center font-black text-xl text-center leading-tight">
                        2000-<br/>2010
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-xl font-black mb-2 text-[#A89080]">РАЗВИТИЕ СЕРВИСА И ИНЖИНИРИНГА</h3>
                      <p className="text-[#A8B2C0] leading-relaxed">
                        Запуск собственных сервисных центров. Создание инженерного подразделения для проектирования производств под ключ. Открытие представительств в крупнейших промышленных регионах России.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 bg-gradient-to-br from-[#FF6B00] to-[#FF8534] flex items-center justify-center font-black text-xl text-center leading-tight">
                        2010-<br/>2020
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-xl font-black mb-2 text-[#FF8534]">СОБСТВЕННОЕ ПРОИЗВОДСТВО</h3>
                      <p className="text-[#A8B2C0] leading-relaxed">
                        Открытие собственных производственных мощностей: выпуск вспомогательного инструмента PUMORI, токарных центров с ЧПУ и турбинных лопаток. Создание лизинговой компании для финансирования поставок.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 bg-gradient-to-br from-[#CD7F32] to-[#D4822B] flex items-center justify-center font-black text-xl relative">
                        <div className="absolute inset-0 border-4 border-white/20 animate-pulse" />
                        2020+
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-xl font-black mb-2 text-[#CD7F32]">ЦИФРОВИЗАЦИЯ И ИННОВАЦИИ</h3>
                      <p className="text-[#A8B2C0] leading-relaxed">
                        Внедрение цифровых технологий управления производством. Развитие направления промышленной автоматизации и роботизации. Создание учебных и демонстрационных центров для обучения персонала клиентов. Выход на международные рынки.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/20 text-center">
                  <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3">
                    <Icon name="TrendingUp" size={24} className="text-[#CD7F32]" />
                    <span className="text-lg font-bold">
                      30+ лет непрерывного развития и лидерства в металлообработке
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
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase">
              Руководство
            </h2>
            <div className="bg-white/5 backdrop-blur-sm border-2 border-white/20 p-8 md:p-12">
              <div className="w-24 h-24 bg-gradient-to-br from-[#CD7F32] to-[#D4822B] rounded-full mx-auto mb-6 flex items-center justify-center">
                <Icon name="User" size={48} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Баландин Александр Иванович</h3>
              <div className="text-[#CD7F32] font-semibold mb-4 uppercase text-sm tracking-wider">
                Генеральный директор
              </div>
              <p className="text-[#A8B2C0] leading-relaxed">
                Более 30 лет опыта работы в машиностроении. Под его руководством корпорация «Пумори» стала одним из ведущих поставщиков технологических решений для металлообработки в России.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;