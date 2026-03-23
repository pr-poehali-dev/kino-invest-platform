import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

const Tools = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Инструмент для ЧПУ от УЗИС | 3000+ позиций, отгрузка в день заказа"
        description="🔧 Собственное производство УЗИС → Фрезы, резцы, оснастка. ✅ В наличии 3000+ позиций ✅ Отгрузка день-в-день ✅ Доставка по РФ ✅ Техподдержка 24/7 ✅ Цены от производителя. Нужен инструмент срочно? → Звоните: +7 (343) 287-08-08"
        keywords="инструмент узис, режущий инструмент купить екатеринбург, фрезы для чпу купить, оснастка для токарных станков, быстросменная оснастка vdi, державки инструментальные, сверла твердосплавные, инструмент в наличии склад, инструмент российского производства"
        canonical="https://pumori360.online/tools"
      />
      <BreadcrumbSchema items={[
        { name: 'Главная', url: 'https://pumori360.online/' },
        { name: 'Решения', url: 'https://pumori360.online/' },
        { name: 'Инструмент и оснастка', url: 'https://pumori360.online/tools' }
      ]} />
      <div className="bg-gray-50 py-3 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-primary">Главная</Link>
            <Icon name="ChevronRight" size={16} />
            <span>Решения</span>
            <Icon name="ChevronRight" size={16} />
            <span className="text-primary font-medium">Инструмент</span>
          </div>
        </div>
      </div>

      <section className="py-20 bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#0D1B2A] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#CD7F32] to-[#D4822B] px-4 py-2 mb-4 font-bold text-sm uppercase">
                🇷🇺 СОБСТВЕННОЕ ПРОИЗВОДСТВО
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#E8EAED] via-[#C0C5CE] to-[#8B96A5] animate-shimmer">
                Инструмент и оснастка для станков с ЧПУ
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-[#CD7F32] to-[#D4822B] mb-6" />

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/5 backdrop-blur-sm border border-[#3B82F6]/30 p-4">
                  <div className="text-3xl font-black text-[#3B82F6] mb-1">3000+</div>
                  <div className="text-xs text-gray-400 uppercase">SKU</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-[#CD7F32]/30 p-4">
                  <div className="text-3xl font-black text-[#CD7F32] mb-1">1-3</div>
                  <div className="text-xs text-gray-400 uppercase">дня поставка</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-[#3B82F6]/30 p-4">
                  <div className="text-3xl font-black text-[#3B82F6] mb-1">-30%</div>
                  <div className="text-xs text-gray-400 uppercase">от импорта</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#CD7F32] to-[#D4822B] hover:from-[#D4822B] hover:to-[#CD7F32] text-white font-black uppercase"
                  onClick={() => window.open('https://t.me/pumori360_bot', '_blank')}
                >
                  Подобрать инструмент
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white"
                  onClick={() => window.open('https://uzis.su/www/files/katalog-pumori-2024.pdf', '_blank')}
                >
                  <Icon name="Download" size={20} className="mr-2" />
                  Скачать каталог
                </Button>
              </div>
            </div>
            <div className="relative shine-effect overflow-hidden rounded-lg">
              <img 
                src="https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/2ce27730-7026-4f8c-9f3f-8829cc4f41db.jpg"
                alt="Инструмент и оснастка"
                className="w-full h-full object-cover aspect-video"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#CD7F32]/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block text-sm font-bold text-[#CD7F32] uppercase tracking-wider mb-4">
              КАТЕГОРИИ
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1B263B] mb-4 uppercase">
              Наш ассортимент
            </h2>
            <div className="w-20 h-1 bg-[#CD7F32] mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { icon: 'Wrench', title: 'Токарный инструмент', count: '850+' },
              { icon: 'Drill', title: 'Фрезерный инструмент', count: '620+' },
              { icon: 'Target', title: 'Расточные системы Пумори 🇷🇺', count: '320+' },
              { icon: 'Drill', title: 'Сверлильный инструмент', count: '410+' },
              { icon: 'Settings', title: 'Резьбонарезной', count: '280+' },
              { icon: 'Ruler', title: 'Измерительный', count: '180+' },
              { icon: 'Box', title: 'Вспомогательный', count: '1100+' },
              { icon: 'Star', title: 'Нестандартный под заказ', count: 'КБ' }
            ].map((cat, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-[#3B82F6] p-6 transition-all hover:shadow-xl cursor-pointer"
                onClick={() => window.open('https://t.me/pumoriinvestbot', '_blank')}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={cat.icon as any} size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-black text-[#1B263B] mb-2 uppercase">{cat.title}</h3>
                <div className="text-2xl font-black text-[#CD7F32]">{cat.count}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0D1B2A] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block text-sm font-bold text-[#CD7F32] uppercase tracking-wider mb-4">
              AI ПОМОЩНИК
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase">
              НЕ ЗНАЕТЕ, КАКОЙ ИНСТРУМЕНТ НУЖЕН?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Наш AI-бот в Telegram подберёт оптимальное решение за 5 минут
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#CD7F32] to-[#D4822B] hover:from-[#D4822B] hover:to-[#CD7F32] text-white font-black text-lg px-12 py-6 uppercase"
              onClick={() => window.open('https://t.me/pumoriinvestbot', '_blank')}
            >
              <Icon name="Send" size={24} className="mr-3" />
              ПОДОБРАТЬ ИНСТРУМЕНТ С AI
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Tools;