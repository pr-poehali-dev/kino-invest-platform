import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

const Service = () => {
  const [hours, setHours] = useState(24);
  const [engineers, setEngineers] = useState(2);
  const [urgent, setUrgent] = useState(false);
  
  const hourlyRate = 6000;
  const total = hours * engineers * hourlyRate * (urgent ? 1.5 : 1);

  return (
    <div className="min-h-screen">
      <SEO 
        title="Ремонт станков ЧПУ 24/7 | Выезд за 4 часа, запчасти в наличии"
        description="⚡ Станок встал? → Инженеры выезжают за 4 часа круглосуточно. ✅ Ремонт на месте ✅ Запчасти в наличии ✅ Гарантия на работы ✅ Бригады по всей РФ ✅ Модернизация старых станков. Простой дорого обходится → Звоните сейчас: +7 (343) 287-08-08"
        keywords="ремонт станков чпу круглосуточно, аварийный ремонт станков, запчасти для станков в наличии, выездной ремонт оборудования, обслуживание станков с чпу, модернизация токарных станков, восстановление точности станка, профилактика станков"
        canonical="https://pumori360.online/service"
      />
      <BreadcrumbSchema items={[
        { name: 'Главная', url: 'https://pumori360.online/' },
        { name: 'Решения', url: 'https://pumori360.online/' },
        { name: 'Сервис и обслуживание', url: 'https://pumori360.online/service' }
      ]} />
      <div className="bg-gray-50 py-3 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-primary">Главная</Link>
            <Icon name="ChevronRight" size={16} />
            <span>Решения</span>
            <Icon name="ChevronRight" size={16} />
            <span className="text-primary font-medium">Сервис</span>
          </div>
        </div>
      </div>

      <section className="py-20 bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#0D1B2A] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-600 px-4 py-2 mb-4 font-bold text-sm uppercase animate-pulse">
                🚨 ЭКСТРЕННЫЙ РЕМОНТ 24/7
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#E8EAED] via-[#C0C5CE] to-[#8B96A5] animate-shimmer">
                Сервис и обслуживание станков с ЧПУ
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-[#CD7F32] to-[#D4822B] mb-6" />

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/5 backdrop-blur-sm border border-red-500/50 p-4">
                  <div className="text-3xl font-black text-red-500 mb-1">2-4ч</div>
                  <div className="text-xs text-gray-400 uppercase">Выезд</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-[#3B82F6]/30 p-4">
                  <div className="text-3xl font-black text-[#3B82F6] mb-1">24/7</div>
                  <div className="text-xs text-gray-400 uppercase">Всегда</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-[#CD7F32]/30 p-4">
                  <div className="text-3xl font-black text-[#CD7F32] mb-1">6 мес</div>
                  <div className="text-xs text-gray-400 uppercase">Гарантия</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700 text-white font-black text-lg uppercase shadow-lg"
                  onClick={() => window.open('https://t.me/pumori360_bot', '_blank')}
                >
                  ВЫЗВАТЬ ИНЖЕНЕРА
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white"
                  onClick={() => {
                    const calculator = document.getElementById('calculator');
                    if (calculator) {
                      calculator.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
            <div className="relative shine-effect overflow-hidden rounded-lg">
              <img 
                src="https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/d7440e05-db88-4d6c-b060-45a572306403.jpg"
                alt="Сервис и обслуживание"
                className="w-full h-full object-cover aspect-video"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section id="calculator" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block text-sm font-bold text-[#CD7F32] uppercase tracking-wider mb-4">
              УСЛУГИ
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1B263B] mb-4 uppercase">
              Что мы делаем
            </h2>
            <div className="w-20 h-1 bg-[#CD7F32] mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { icon: 'Wrench', title: 'Экстренный ремонт 24/7', price: 'От 6 000₽/час', color: 'red' },
              { icon: 'Settings', title: 'Пуско-наладка', price: 'От 25 000₽', color: 'blue' },
              { icon: 'CheckCircle', title: 'Техническое обслуживание', price: 'От 15 000₽', color: 'blue' },
              { icon: 'Package', title: 'Поставка запчастей', price: '1-3 дня', color: 'bronze' }
            ].map((service, idx) => (
              <div key={idx} className={`bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-${service.color === 'red' ? '[#EF4444]' : service.color === 'blue' ? '[#3B82F6]' : '[#CD7F32]'} p-6 transition-all hover:shadow-xl group`}>
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color === 'red' ? 'from-red-600 to-red-700' : service.color === 'blue' ? 'from-[#1E3A8A] to-[#3B82F6]' : 'from-[#CD7F32] to-[#D4822B]'} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon name={service.icon as any} size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-black text-[#1B263B] mb-2 uppercase">{service.title}</h3>
                <div className={`text-xl font-black ${service.color === 'red' ? 'text-red-600' : service.color === 'blue' ? 'text-[#3B82F6]' : 'text-[#CD7F32]'}`}>{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block text-sm font-bold text-[#CD7F32] uppercase tracking-wider mb-4">
              КАЛЬКУЛЯТОР
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1B263B] mb-4 uppercase">
              Рассчитать стоимость
            </h2>
            <div className="w-20 h-1 bg-[#CD7F32] mx-auto" />
          </div>

          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-gray-200 p-8 space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Время работ (часы)</label>
                <input 
                  type="range" 
                  min="1" 
                  max="120" 
                  value={hours} 
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="w-full"
                />
                <div className="text-right text-2xl font-black text-[#3B82F6] mt-2">{hours} часов</div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Количество инженеров</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4].map(n => (
                    <button
                      key={n}
                      onClick={() => setEngineers(n)}
                      className={`flex-1 py-3 font-bold border-2 transition-all ${
                        engineers === n 
                          ? 'bg-[#3B82F6] text-white border-[#3B82F6]' 
                          : 'bg-white text-gray-700 border-gray-200 hover:border-[#3B82F6]'
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={urgent}
                    onChange={(e) => setUrgent(e.target.checked)}
                    className="w-5 h-5"
                  />
                  <span className="font-bold text-gray-700">Срочный выезд (+50%)</span>
                </label>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] text-white p-8 flex flex-col justify-center">
              <div className="text-sm font-bold uppercase mb-2 text-white/70">ОРИЕНТИРОВОЧНАЯ СТОИМОСТЬ</div>
              <div className="text-5xl font-black mb-6">{total.toLocaleString('ru-RU')} ₽</div>
              <div className="text-sm text-white/80 mb-6 space-y-1">
                <div>• Ставка: {hourlyRate.toLocaleString()} ₽/час</div>
                <div>• Часы: {hours}</div>
                <div>• Инженеры: {engineers}</div>
                {urgent && <div>• Срочность: +50%</div>}
              </div>
              <Button 
                size="lg" 
                className="bg-white text-[#1E3A8A] hover:bg-gray-100 font-black uppercase w-full"
                onClick={() => window.open('https://t.me/pumoriinvestbot', '_blank')}
              >
                ЗАКАЗАТЬ ВЫЕЗД
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Service;