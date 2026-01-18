import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Partners = () => {
  const suppliers = [
    {
      name: 'ACE Micromatic Group',
      description: 'Современные высококачественные станки экономкласса (Индия).',
      logo: 'https://www.pumori.ru/static/cache/partner/14/list_logo.png'
    },
    {
      name: 'Micromatic Grinding',
      description: 'Шлифовальные станки (Индия).',
      logo: 'https://www.pumori.ru/static/cache/partner/52/list_logo.png'
    },
    {
      name: 'ДиКом',
      description: 'Автоматизированные системы складского хранения (Россия).',
      logo: 'https://www.pumori.ru/static/cache/partner/46/list_logo.png'
    },
    {
      name: 'G. WEIKE',
      description: 'Станки лазерной резки (КНР).',
      logo: 'https://www.pumori.ru/static/cache/partner/47/list_logo.png'
    },
    {
      name: 'КЗТС',
      description: 'Режущий инструмент, твердосплавные пластины (Россия).',
      logo: 'https://www.pumori.ru/static/cache/partner/48/list_logo.png'
    },
    {
      name: 'СКИФ-М',
      description: 'Фрезы и сменные твердосплавные пластины для фрезерования (Россия).',
      logo: 'https://www.pumori.ru/static/cache/partner/49/list_logo.png'
    },
    {
      name: 'HEADMAN',
      description: 'Токарные станки (КНР).',
      logo: 'https://www.pumori.ru/static/cache/partner/50/list_logo.png'
    },
    {
      name: 'АИС «Диспетчер»',
      description: 'Система непрерывного контроля и управления производственными процессами (Россия).',
      logo: 'https://www.pumori.ru/static/cache/partner/51/list_logo.png'
    },
    {
      name: 'ZCC-CT',
      description: 'Режущий инструмент (КНР).',
      logo: 'https://www.pumori.ru/static/cache/partner/53/list_logo.png'
    },
    {
      name: 'HSG',
      description: 'Станки лазерной резки (КНР).',
      logo: 'https://www.pumori.ru/static/cache/partner/54/list_logo.png'
    },
    {
      name: 'ACCURL',
      description: 'Листогибочные станки и станки лазерной резки (КНР).',
      logo: 'https://www.pumori.ru/static/cache/partner/55/list_logo.png'
    },
    {
      name: 'НИР',
      description: 'Металлорежущий инструмент для высокотехнологичных отраслей промышленности (Россия).',
      logo: 'https://www.pumori.ru/static/cache/partner/56/list_logo.png'
    },
    {
      name: 'WINSTAR',
      description: 'Режущий инструмент (Тайвань).',
      logo: 'https://www.pumori.ru/static/cache/partner/57/list_logo.png'
    },
    {
      name: 'Томский инструмент',
      description: 'Режущий инструмент (Россия).',
      logo: 'https://www.pumori.ru/static/cache/partner/58/list_logo.png'
    },
    {
      name: 'АСП',
      description: 'Металлорежущий инструмент (Россия).',
      logo: 'https://www.pumori.ru/static/cache/partner/59/list_logo.png'
    }
  ];

  const clients = [
    { name: 'URALVAGONZAVOD', logo: 'https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/118dbac3-f09e-4f7c-8db9-690c1f97e3e8.jpg' },
    { name: 'VSMPO-AVISMA', logo: 'https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/66a50c57-1bc4-429a-8fbf-ac58ae487fdf.jpg' },
    { name: 'KAMAZ', logo: 'https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/5bf1a787-4343-4488-80fa-9fdf0855be6e.jpg' },
    { name: 'AVTOVAZ', logo: 'https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/33693780-787e-41c5-b304-c9cb97212d47.jpg' },
    { name: 'ЧТПЗ', logo: 'https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/68bbd5dc-4559-4cc5-b954-11faeba7c23a.jpg' },
    { name: 'УРАЛЬСКИЙ ТУРБИННЫЙ ЗАВОД', logo: 'https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/34b8af74-1026-4356-a51c-bce0a3485d8f.jpg' },
    { name: 'УЗГА', logo: 'https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/37b2ef34-cf50-484e-bab2-bc94ee301c27.jpg' },
    { name: 'ЛИПЕЦКИЙ МЕХАНИЧЕСКИЙ ЗАВОД', logo: 'https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/ed40f3d8-279d-410e-a086-35033cbe0d28.jpg' },
    { name: 'PETROZAVODSK MASH', logo: 'https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/6d89a43a-fe99-497f-a84a-361b281af63f.jpg' },
    { name: 'KRASMASH', logo: 'https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/18ae446b-331f-446e-a7c0-7b42ef7aa3b4.jpg' },
    { name: 'NEVSKY ZAVOD', logo: 'https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/38664c40-0409-414c-aad0-95e6493ed57f.jpg' },
    { name: 'RUSTECHNO', logo: 'https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/b3e46a98-68fc-4a32-aec3-423848ef4375.jpg' }
  ];

  const branches = [
    { city: 'Екатеринбург', address: 'ул. Монтёрская, 3Д', phone: '+7 (343) 287-30-58' },
    { city: 'Москва', address: 'Варшавское шоссе, 125', phone: '+7 (495) 215-50-12' },
    { city: 'Челябинск', address: 'ул. Героев Танкограда, 51', phone: '+7 (351) 777-03-33' },
    { city: 'Пермь', address: 'ул. Героев Хасана, 105', phone: '+7 (342) 241-01-91' },
    { city: 'Нижний Тагил', address: 'ул. Красноармейская, 135', phone: '+7 (3435) 25-46-00' }
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
            <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#E8EAED] via-[#C0C5CE] to-[#8B96A5] animate-shimmer">
              Поставки оборудования, инструмента, технологий от надежных производителей
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-[#CD7F32] to-[#D4822B] mb-6" />
            <p className="text-xl text-[#A8B2C0] mb-8">
              Надежные партнеры и солидные клиенты Корпорации Пумори: присоединяйтесь
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-8 mb-12">
            <a href="#suppliers" className="text-lg font-bold text-[#3B82F6] hover:text-[#1E3A8A] transition-colors uppercase">
              Поставщики
            </a>
            <a href="#clients" className="text-lg font-bold text-[#3B82F6] hover:text-[#1E3A8A] transition-colors uppercase">
              Клиенты
            </a>
            <a href="#branches" className="text-lg font-bold text-[#3B82F6] hover:text-[#1E3A8A] transition-colors uppercase">
              Филиалы
            </a>
          </div>
        </div>
      </section>

      <section id="suppliers" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black text-[#1B263B] mb-6 uppercase text-center">
              Поставщики
            </h2>
            <div className="w-20 h-1 bg-[#CD7F32] mx-auto mb-8" />
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Корпорация «Пумори» поставляет оборудование, инструмент и технологии от ведущих мировых производителей для металлообрабатывающих производств.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {suppliers.map((supplier, idx) => (
                <div 
                  key={idx} 
                  className="bg-white border border-gray-200 p-6 hover:shadow-xl transition-all group"
                >
                  <div className="flex items-center justify-center h-24 mb-4 bg-gray-50 rounded p-4">
                    <img 
                      src={supplier.logo} 
                      alt={supplier.name}
                      className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[#1B263B] mb-2">
                    {supplier.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {supplier.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="clients" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black text-[#1B263B] mb-6 uppercase text-center">
              Клиенты
            </h2>
            <div className="w-20 h-1 bg-[#CD7F32] mx-auto mb-8" />
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Нам доверяют крупнейшие предприятия России
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {clients.map((client, idx) => (
                <div
                  key={idx}
                  className="aspect-video bg-white border border-gray-200 flex items-center justify-center p-4 hover:shadow-lg transition-all hover:scale-105 group"
                >
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="branches" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black text-[#1B263B] mb-6 uppercase text-center">
              Филиалы
            </h2>
            <div className="w-20 h-1 bg-[#CD7F32] mx-auto mb-8" />
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Представительства корпорации в основных индустриальных регионах России
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {branches.map((branch, idx) => (
                <div 
                  key={idx} 
                  className="bg-white border-l-4 border-[#3B82F6] p-6 hover:shadow-xl transition-all"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] rounded flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-[#1B263B] mb-2">
                        {branch.city}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {branch.address}
                      </p>
                      <a href={`tel:${branch.phone.replace(/\s/g, '')}`} className="text-lg font-bold text-[#3B82F6] hover:text-[#1E3A8A] transition-colors">
                        {branch.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;
