import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

const Engineering = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Инжиниринг производств под ключ | От проекта до запуска за 6-12 мес"
        description="🎯 Проектируем цех с нуля → Подбираем станки → Запускаем за 6-12 месяцев. ✅ Технический аудит бесплатно ✅ 3D-моделирование ✅ ROI расчёт ✅ Собственное КБ ✅ Гарантия запуска. 1200+ цехов работают. Получите расчёт → +7 (343) 287-30-58"
        keywords="инжиниринг производства, проектирование цеха под ключ, технологический аудит производства, модернизация цеха металлообработки, запуск производства с нуля, планировка производственного цеха, roi производства, окупаемость оборудования"
        canonical="https://pumori360.online/engineering"
      />
      <BreadcrumbSchema items={[
        { name: 'Главная', url: 'https://pumori360.online/' },
        { name: 'Решения', url: 'https://pumori360.online/' },
        { name: 'Инжиниринг и проектирование', url: 'https://pumori360.online/engineering' }
      ]} />
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-3 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-primary">Главная</Link>
            <Icon name="ChevronRight" size={16} />
            <span>Решения</span>
            <Icon name="ChevronRight" size={16} />
            <span className="text-primary font-medium">Инжиниринг</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#0D1B2A] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(59, 130, 246, 0.1) 10px, rgba(59, 130, 246, 0.1) 20px)`
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#E8EAED] via-[#C0C5CE] to-[#8B96A5] animate-shimmer">
                Инжиниринг и проектирование производств
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-[#CD7F32] to-[#D4822B] mb-6" />
              <p className="text-xl text-[#A8B2C0] mb-8">
                От технического аудита до запуска цеха под ключ. Более 1200 проектов.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/5 backdrop-blur-sm border border-[#3B82F6]/30 p-4">
                  <div className="text-3xl font-black text-[#3B82F6] mb-1">35+</div>
                  <div className="text-xs text-gray-400 uppercase">лет экспертизы</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-[#CD7F32]/30 p-4">
                  <div className="text-3xl font-black text-[#CD7F32] mb-1">КБ</div>
                  <div className="text-xs text-gray-400 uppercase">Своё</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-[#3B82F6]/30 p-4">
                  <div className="text-3xl font-black text-[#3B82F6] mb-1">TOP</div>
                  <div className="text-xs text-gray-400 uppercase">Партнёры</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#CD7F32] to-[#D4822B] hover:from-[#D4822B] hover:to-[#CD7F32] text-white font-black uppercase"
                  onClick={() => window.open('https://t.me/pumori360_bot', '_blank')}
                >
                  Заказать консультацию
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white"
                  onClick={() => window.open('https://disk.yandex.ru/i/v1bo8dkoM4wZwQ', '_blank')}
                >
                  <Icon name="Download" size={20} className="mr-2" />
                  Скачать презентацию
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative shine-effect overflow-hidden rounded-lg">
                <img 
                  src="https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/252f6d8c-44a7-4d8c-abf6-06882b0f28bd.jpg"
                  alt="Инжиниринг и проектирование"
                  className="w-full h-full object-cover aspect-video"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block text-sm font-bold text-[#CD7F32] uppercase tracking-wider mb-4">
              НАШИ УСЛУГИ
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1B263B] mb-4 uppercase">
              Что мы делаем
            </h2>
            <div className="w-20 h-1 bg-[#CD7F32] mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: 'Wrench', title: 'Техническое перевооружение', desc: 'Модернизация действующих производств' },
              { icon: 'Building', title: 'Проектирование цехов под ключ', desc: 'От концепции до запуска' },
              { icon: 'FileCode', title: 'Разработка технологий', desc: 'Оптимизация производственных процессов' },
              { icon: 'Cpu', title: 'Автоматизация производства', desc: 'Роботизация и цифровизация' },
              { icon: 'Search', title: 'Технологический аудит', desc: 'Анализ и поиск узких мест' },
              { icon: 'GraduationCap', title: 'Обучение и консалтинг', desc: 'Подготовка персонала' }
            ].map((service, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-[#3B82F6] p-6 transition-all hover:shadow-xl group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={service.icon as any} size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-black text-[#1B263B] mb-2 uppercase">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block text-sm font-bold text-[#CD7F32] uppercase tracking-wider mb-4">
              ПРОЦЕСС РАБОТЫ
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1B263B] mb-4 uppercase">
              Как мы работаем
            </h2>
            <div className="w-20 h-1 bg-[#CD7F32] mx-auto" />
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3B82F6] to-[#CD7F32]" />

              {[
                { num: '01', title: 'АУДИТ', desc: 'Анализ текущего состояния производства, выявление проблем', duration: '1-2 недели' },
                { num: '02', title: 'ТКП', desc: 'Техническое коммерческое предложение с решением', duration: '3-5 дней' },
                { num: '03', title: 'ПРОЕКТИРОВАНИЕ', desc: 'Разработка проектной документации и 3D-моделей', duration: '1-3 месяца' },
                { num: '04', title: 'ПОСТАВКА', desc: 'Закупка и доставка оборудования, инструмента', duration: '2-4 месяца' },
                { num: '05', title: 'МОНТАЖ И НАЛАДКА', desc: 'Установка, подключение, тестирование', duration: '1-2 месяца' },
                { num: '06', title: 'ПОДДЕРЖКА', desc: 'Обучение персонала, гарантия, сервис 24/7', duration: 'Постоянно' }
              ].map((step, idx) => (
                <div key={idx} className="relative mb-12 lg:mb-16">
                  <div className={`bg-white border-2 border-[#3B82F6] p-6 relative hover:shadow-xl transition-shadow ${idx % 2 === 0 ? 'lg:mr-auto lg:ml-0' : 'lg:ml-auto lg:mr-0'} lg:w-[calc(50%-2rem)]`}>
                    <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] flex items-center justify-center">
                      <span className="text-2xl font-black text-white">{step.num}</span>
                    </div>
                    <div className="ml-20">
                      <h3 className="text-2xl font-black text-[#1B263B] mb-2 uppercase">{step.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{step.desc}</p>
                      <div className="inline-flex items-center gap-2 text-xs font-bold text-[#CD7F32]">
                        <Icon name="Clock" size={14} />
                        {step.duration}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#CD7F32] to-[#D4822B] hover:from-[#D4822B] hover:to-[#CD7F32] text-white font-black text-lg px-12 py-6 uppercase"
              onClick={() => window.open('https://t.me/pumoriinvestbot', '_blank')}
            >
              Начать проект
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white font-black text-lg px-12 py-6 uppercase"
              onClick={() => window.open('https://disk.yandex.ru/i/8Kn2CZqfKwEgiA', '_blank')}
            >
              <Icon name="Download" size={20} className="mr-2" />
              Скачать кейс PDF
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Engineering;