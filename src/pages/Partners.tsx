import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Partners = () => {
  const partners = [
    {
      name: 'Okuma',
      category: 'Станкостроение',
      description: 'Эксклюзивный партнёр по поставке токарных и фрезерных обрабатывающих центров с ЧПУ',
      logo: 'https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/okuma-logo.png'
    },
    {
      name: 'ACE Micromatic Group',
      category: 'Станкостроение',
      description: 'Современные высококачественные станки экономкласса (Индия)',
      logo: 'https://www.pumori.ru/static/cache/partner/14/list_logo.png'
    },
    {
      name: 'Micromatic Grinding',
      category: 'Шлифовальное оборудование',
      description: 'Шлифовальные станки (Индия)',
      logo: 'https://www.pumori.ru/static/cache/partner/52/list_logo.png'
    },
    {
      name: 'ДиКом',
      category: 'Складское оборудование',
      description: 'Автоматизированные системы складского хранения (Россия)',
      logo: 'https://www.pumori.ru/static/cache/partner/46/list_logo.png'
    },
    {
      name: 'G. WEIKE',
      category: 'Лазерная резка',
      description: 'Станки лазерной резки (КНР)',
      logo: 'https://www.pumori.ru/static/cache/partner/47/list_logo.png'
    },
    {
      name: 'КЗТС',
      category: 'Режущий инструмент',
      description: 'Режущий инструмент, твердосплавные пластины (Россия)',
      logo: 'https://www.pumori.ru/static/cache/partner/48/list_logo.png'
    },
    {
      name: 'СКИФ-М',
      category: 'Фрезерный инструмент',
      description: 'Фрезы и сменные твердосплавные пластины для фрезерования (Россия)',
      logo: 'https://www.pumori.ru/static/cache/partner/49/list_logo.png'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="bg-gray-50 py-3 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-primary">Главная</Link>
            <Icon name="ChevronRight" size={16} />
            <span className="text-primary font-medium">Партнёры</span>
          </div>
        </div>
      </div>

      <section className="py-20 bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#0D1B2A] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block text-sm font-bold text-[#CD7F32] uppercase tracking-wider mb-4">
              НАШИ ПАРТНЁРЫ
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#E8EAED] via-[#C0C5CE] to-[#8B96A5] animate-shimmer">
              Работаем с лидерами отрасли
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-[#CD7F32] to-[#D4822B] mb-6" />
            <p className="text-xl text-[#A8B2C0] mb-8">
              Поставляем оборудование и инструмент от ведущих мировых производителей с гарантией качества и официальной поддержкой
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-black text-[#1B263B] mb-4 uppercase">
                Эксклюзивное партнёрство
              </h2>
              <div className="w-20 h-1 bg-[#CD7F32] mx-auto mb-6" />
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Мы — эксклюзивный дистрибьютор Okuma в России. Поставляем оборудование напрямую от производителя с полной технической поддержкой.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, idx) => (
                <div 
                  key={idx} 
                  className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-[#3B82F6] p-8 transition-all hover:shadow-xl group"
                >
                  <div className="flex items-center justify-center h-24 mb-6 bg-white rounded-lg p-4">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all"
                    />
                  </div>
                  <div className="text-xs font-bold text-[#CD7F32] uppercase tracking-wider mb-2">
                    {partner.category}
                  </div>
                  <h3 className="text-xl font-black text-[#1B263B] mb-3 uppercase">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-[#1B263B] mb-6 uppercase">
              Преимущества работы с нами
            </h2>
            <div className="w-20 h-1 bg-[#CD7F32] mx-auto mb-12" />
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 border-l-4 border-[#3B82F6]">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Icon name="Shield" size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-black text-[#1B263B] mb-2 uppercase">
                  Официальная гарантия
                </h3>
                <p className="text-sm text-gray-600">
                  Прямые контракты с производителями, официальная гарантия и сервис
                </p>
              </div>

              <div className="bg-white p-6 border-l-4 border-[#CD7F32]">
                <div className="w-12 h-12 bg-gradient-to-br from-[#CD7F32] to-[#D4822B] rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Icon name="Wrench" size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-black text-[#1B263B] mb-2 uppercase">
                  Техподдержка 24/7
                </h3>
                <p className="text-sm text-gray-600">
                  Экстренный выезд специалистов, запчасти на складе в России
                </p>
              </div>

              <div className="bg-white p-6 border-l-4 border-[#3B82F6]">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Icon name="GraduationCap" size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-black text-[#1B263B] mb-2 uppercase">
                  Обучение персонала
                </h3>
                <p className="text-sm text-gray-600">
                  Полное обучение работе с оборудованием на вашей площадке
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;
