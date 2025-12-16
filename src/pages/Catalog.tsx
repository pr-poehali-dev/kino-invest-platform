import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Catalog = () => {
  const [showFilters, setShowFilters] = useState(false);

  const products = [
    { id: 1, name: 'Пластина токарная CNMG 120408', brand: 'PUMORI', price: 450, stock: true, badge: 'Made in Russia' },
    { id: 2, name: 'Фреза концевая D12 Z4', brand: 'ISCAR', price: 3200, stock: true, badge: 'Хит продаж' },
    { id: 3, name: 'Сверло спиральное D10', brand: 'PUMORI', price: 850, stock: true, badge: 'Made in Russia' },
    { id: 4, name: 'Резец расточной S20R-SCLCR09', brand: 'Sandvik', price: 8900, stock: true, badge: null },
    { id: 5, name: 'Патрон токарный 3-кулачковый', brand: 'SMW', price: 45000, stock: false, badge: null },
    { id: 6, name: 'Измерительная головка', brand: 'Renishaw', price: 125000, stock: true, badge: 'Хит продаж' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white py-3 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-primary">Главная</Link>
            <Icon name="ChevronRight" size={16} />
            <span className="text-primary font-medium">Каталог</span>
          </div>
        </div>
      </div>

      <section className="py-12 bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-6 uppercase text-center">
            КАТАЛОГ ОБОРУДОВАНИЯ И ИНСТРУМЕНТА
          </h1>
          <div className="max-w-3xl mx-auto relative">
            <Input 
              placeholder="Поиск по каталогу или артикулу..."
              className="h-14 text-lg pl-14 bg-white border-none"
            />
            <Icon name="Search" size={24} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <aside className={`lg:block ${showFilters ? 'block' : 'hidden'} lg:w-1/4`}>
            <div className="bg-white border-2 border-gray-200 p-6 sticky top-4">
              <h3 className="text-xl font-black mb-6 uppercase">ФИЛЬТРЫ</h3>

              <div className="mb-6">
                <h4 className="font-bold mb-3">Категория</h4>
                <div className="space-y-2">
                  {[
                    { label: 'Оборудование', count: 125 },
                    { label: 'Режущий инструмент', count: 850 },
                    { label: 'Инструмент Пумори 🇷🇺', count: 320 },
                    { label: 'Вспомогательный', count: 1100 },
                    { label: 'Измерительный', count: 180 },
                    { label: 'Запчасти', count: 425 }
                  ].map((cat, idx) => (
                    <label key={idx} className="flex items-center gap-2 cursor-pointer hover:text-primary">
                      <Checkbox />
                      <span className="text-sm">{cat.label} ({cat.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold mb-3">Наличие</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <Checkbox defaultChecked />
                    <span className="text-sm">В наличии (2840)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <Checkbox />
                    <span className="text-sm">Под заказ (160)</span>
                  </label>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-[#CD7F32] to-[#D4822B] hover:from-[#D4822B] hover:to-[#CD7F32] text-white font-bold uppercase mb-4">
                ПРИМЕНИТЬ ФИЛЬТРЫ
              </Button>
              <button className="w-full text-sm text-gray-600 hover:text-primary">Сбросить все</button>

              <div className="mt-6 bg-[#3B82F6]/10 border-2 border-[#3B82F6] p-4">
                <div className="text-sm font-bold mb-2">💬 НЕ НАШЛИ?</div>
                <p className="text-xs text-gray-600 mb-3">Напишите в Telegram</p>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="w-full border-[#3B82F6] text-[#3B82F6]"
                  onClick={() => window.open('https://t.me/pumoriinvestbot', '_blank')}
                >
                  @pumoriinvestbot
                </Button>
              </div>
            </div>
          </aside>

          <main className="flex-1">
            <div className="bg-white border-2 border-gray-200 p-4 mb-6 flex items-center justify-between">
              <div className="font-bold text-gray-700">Найдено: <span className="text-[#3B82F6]">2840 товаров</span></div>
              <div className="flex items-center gap-4">
                <select className="border-2 border-gray-200 rounded px-3 py-2 text-sm">
                  <option>По популярности</option>
                  <option>По цене ↑</option>
                  <option>По цене ↓</option>
                  <option>Новинки</option>
                </select>
                <button className="lg:hidden" onClick={() => setShowFilters(!showFilters)}>
                  <Icon name="Filter" size={20} />
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {products.map(product => (
                <div key={product.id} className="bg-white border-2 border-gray-200 hover:border-[#3B82F6] transition-all hover:shadow-lg group">
                  <div className="aspect-square bg-gray-100 relative flex items-center justify-center">
                    <Icon name="Wrench" size={80} className="text-gray-300" />
                    {product.badge && (
                      <div className={`absolute top-2 right-2 ${product.badge === 'Made in Russia' ? 'bg-[#CD7F32]' : 'bg-red-600'} text-white text-xs font-bold px-2 py-1 uppercase`}>
                        {product.badge}
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="text-xs font-bold text-gray-500 mb-1">{product.brand}</div>
                    <h3 className="font-bold text-sm mb-3 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-2xl font-black text-[#3B82F6]">{product.price.toLocaleString()} ₽</div>
                      {product.stock ? (
                        <span className="text-xs font-bold text-green-600">✓ В наличии</span>
                      ) : (
                        <span className="text-xs font-bold text-gray-400">Под заказ</span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1 bg-gradient-to-r from-[#CD7F32] to-[#D4822B] hover:from-[#D4822B] hover:to-[#CD7F32] text-white font-bold uppercase">
                        В КОРЗИНУ
                      </Button>
                      <Button size="sm" variant="outline" className="border-[#3B82F6]">
                        <Icon name="Heart" size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-2">
              <Button variant="outline" size="sm">← Назад</Button>
              {[1, 2, 3, 4, 5].map(n => (
                <Button 
                  key={n} 
                  variant={n === 1 ? 'default' : 'outline'} 
                  size="sm"
                  className={n === 1 ? 'bg-[#3B82F6]' : ''}
                >
                  {n}
                </Button>
              ))}
              <Button variant="outline" size="sm">Вперёд →</Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Catalog;