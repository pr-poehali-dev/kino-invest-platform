import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Production = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const categories = [
    { id: 'all', label: 'Все услуги', icon: 'Grid3x3' },
    { id: 'turning', label: 'Токарная обработка', icon: 'Circle' },
    { id: 'milling', label: 'Фрезерование', icon: 'Box' },
    { id: 'grinding', label: 'Шлифование', icon: 'Sparkles' },
    { id: 'tooling', label: 'Оснастка', icon: 'Wrench' },
    { id: 'serial', label: 'Серийное производство', icon: 'Package' },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? 'w-72' : 'w-0'} transition-all duration-300 bg-white border-r border-gray-200 overflow-hidden flex-shrink-0`}>
        <div className="p-6 sticky top-0">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-black text-[#1B263B] uppercase">Категории</h2>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden"
            >
              <Icon name="X" size={20} />
            </Button>
          </div>

          <nav className="space-y-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-[#3B82F6] to-[#1E3A8A] text-white shadow-lg'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <Icon name={category.icon as any} size={20} />
                <span className="font-semibold text-sm">{category.label}</span>
              </button>
            ))}
          </nav>

          <div className="mt-8 p-4 bg-gradient-to-br from-[#CD7F32]/10 to-[#D4822B]/10 rounded-lg border border-[#CD7F32]/20">
            <Icon name="Phone" size={24} className="text-[#CD7F32] mb-2" />
            <h3 className="font-black text-[#1B263B] mb-1">Нужна консультация?</h3>
            <p className="text-xs text-gray-600 mb-3">Наши специалисты помогут с выбором</p>
            <Button size="sm" className="w-full bg-[#CD7F32] hover:bg-[#D4822B]">
              Связаться
            </Button>
          </div>

          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <Icon name="Clock" size={16} className="text-[#3B82F6]" />
              <span>Работаем 24/7</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <Icon name="CheckCircle" size={16} className="text-[#3B82F6]" />
              <span>Точность ±0.005 мм</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <Icon name="TrendingUp" size={16} className="text-[#3B82F6]" />
              <span>От 1 до 500 деталей</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 min-w-0">
        <div className="bg-gray-50 py-3 border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Link to="/" className="hover:text-primary">Главная</Link>
                <Icon name="ChevronRight" size={16} />
                <span>Решения</span>
                <Icon name="ChevronRight" size={16} />
                <span className="text-primary font-medium">Производство и аутсорсинг</span>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="gap-2"
              >
                <Icon name={isSidebarOpen ? 'PanelLeftClose' : 'PanelLeftOpen'} size={16} />
                {isSidebarOpen ? 'Скрыть меню' : 'Показать меню'}
              </Button>
            </div>
          </div>
        </div>

      <section className="py-20 bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#0D1B2A] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#E8EAED] via-[#C0C5CE] to-[#8B96A5] animate-shimmer">
                Производство и аутсорсинг
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-[#CD7F32] to-[#D4822B] mb-6" />
              <p className="text-xl text-[#A8B2C0] mb-8">
                Механообработка любой сложности. От единичного производства до крупных серий.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/5 backdrop-blur-sm border border-[#3B82F6]/30 p-4">
                  <div className="text-3xl font-black text-[#3B82F6] mb-1">±0.005</div>
                  <div className="text-xs text-gray-400 uppercase">мм точность</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-[#CD7F32]/30 p-4">
                  <div className="text-3xl font-black text-[#CD7F32] mb-1">24/7</div>
                  <div className="text-xs text-gray-400 uppercase">работа</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-[#3B82F6]/30 p-4">
                  <div className="text-3xl font-black text-[#3B82F6] mb-1">1-500</div>
                  <div className="text-xs text-gray-400 uppercase">деталей</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-[#CD7F32] to-[#D4822B] hover:from-[#D4822B] hover:to-[#CD7F32] text-white font-black uppercase">
                  Заказать расчёт
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Отправить чертёж
                </Button>
              </div>
            </div>
            <div className="relative shine-effect">
              <div className="aspect-video bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] rounded-lg flex items-center justify-center">
                <Icon name="Settings" size={150} className="text-white/80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block text-sm font-bold text-[#CD7F32] uppercase tracking-wider mb-4">
              НАШИ ВОЗМОЖНОСТИ
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1B263B] mb-4 uppercase">
              Что мы производим
            </h2>
            <div className="w-20 h-1 bg-[#CD7F32] mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: 'Wrench',
                title: 'Механообработка',
                items: ['Токарная обработка', 'Фрезерование', 'Сверление', 'Шлифование', 'Расточка'],
                color: 'blue'
              },
              {
                icon: 'Box',
                title: 'Формообразующая оснастка',
                items: ['Штампы', 'Пресс-формы', 'Литейная оснастка', 'Кондукторы', 'Приспособления'],
                color: 'bronze'
              },
              {
                icon: 'Package',
                title: 'Серийное изготовление',
                items: ['До 500 деталей', 'Контроль качества', 'Логистика', 'Упаковка', 'Документация'],
                color: 'blue'
              }
            ].map((service, idx) => (
              <div key={idx} className={`bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-${service.color === 'blue' ? '[#3B82F6]' : '[#CD7F32]'} p-8 transition-all hover:shadow-xl group`}>
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color === 'blue' ? 'from-[#1E3A8A] to-[#3B82F6]' : 'from-[#CD7F32] to-[#D4822B]'} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon name={service.icon as any} size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-black text-[#1B263B] mb-4 uppercase">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <Icon name="Check" size={16} className={`mt-1 flex-shrink-0 ${service.color === 'blue' ? 'text-[#3B82F6]' : 'text-[#CD7F32]'}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block text-sm font-bold text-[#CD7F32] uppercase tracking-wider mb-4">
              ОБОРУДОВАНИЕ
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1B263B] mb-4 uppercase">
              Наш парк станков
            </h2>
            <div className="w-20 h-1 bg-[#CD7F32] mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { name: 'OKUMA LB-3000', type: 'Токарный с ЧПУ', count: '3 шт' },
              { name: 'DMG MORI NVX5100', type: 'Фрезерный 5-осевой', count: '2 шт' },
              { name: 'HAAS VF-4', type: 'Обрабатывающий центр', count: '4 шт' },
              { name: 'Mazak Integrex', type: 'Токарно-фрезерный', count: '2 шт' },
              { name: 'Mitutoyo CNC', type: 'КИМ', count: '1 шт' },
              { name: 'Studer S33', type: 'Круглошлифовальный', count: '2 шт' },
              { name: 'TOS WD130', type: 'Горизонтально-расточной', count: '1 шт' },
              { name: 'Makino V55', type: 'Вертикально-фрезерный', count: '3 шт' }
            ].map((machine, idx) => (
              <div key={idx} className="bg-white border-2 border-gray-200 hover:border-[#3B82F6] p-6 transition-all hover:shadow-lg group">
                <div className="flex items-start justify-between mb-3">
                  <Icon name="Cpu" size={32} className="text-[#3B82F6] group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-[#CD7F32] bg-[#CD7F32]/10 px-2 py-1 rounded">{machine.count}</span>
                </div>
                <h3 className="text-lg font-black text-[#1B263B] mb-1">{machine.name}</h3>
                <p className="text-sm text-gray-600">{machine.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0D1B2A] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block text-sm font-bold text-[#CD7F32] uppercase tracking-wider mb-4">
              КАК ЗАКАЗАТЬ
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">
              Процесс работы
            </h2>
            <div className="w-20 h-1 bg-[#CD7F32] mx-auto" />
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-6">
            {[
              { num: '01', title: 'Отправка чертежа', icon: 'FileText' },
              { num: '02', title: 'Расчёт стоимости', icon: 'Calculator' },
              { num: '03', title: 'Производство', icon: 'Settings' },
              { num: '04', title: 'Контроль ОТК', icon: 'CheckCircle' },
              { num: '05', title: 'Отгрузка', icon: 'Package' }
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={step.icon as any} size={32} className="text-white" />
                </div>
                <div className="text-4xl font-black text-[#CD7F32] mb-2">{step.num}</div>
                <div className="text-sm font-bold uppercase">{step.title}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-[#CD7F32] to-[#D4822B] hover:from-[#D4822B] hover:to-[#CD7F32] text-white font-black text-lg px-12 py-6 uppercase">
              Отправить чертёж на расчёт
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] text-white p-12 rounded-lg">
            <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase">
              НУЖНА КОНСУЛЬТАЦИЯ ТЕХНОЛОГА?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Не уверены в технологии? Свяжитесь с нашим технологом — он поможет выбрать оптимальное решение.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-[#1E3A8A] hover:bg-gray-100 font-black uppercase">
                <Icon name="Phone" size={20} className="mr-2" />
                +7 (343) 287-30-58
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#1E3A8A]">
                <Icon name="Send" size={20} className="mr-2" />
                Написать в Telegram
              </Button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Production;