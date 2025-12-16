import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const TasksSection = () => {
  return (
    <>
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1B263B] via-[#8B7355] to-[#1B263B]" />
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block text-sm font-bold text-[#8B7355] uppercase tracking-wider mb-4">
              ЧЕМ МЫ МОЖЕМ ПОМОЧЬ
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1B263B] mb-4 uppercase">
              ВЫБЕРИТЕ ВАШУ ЗАДАЧУ
            </h2>
            <div className="w-20 h-1 bg-[#8B7355] mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Link
              to="/engineering"
              className="group relative bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-[#1B263B] p-8 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#1B263B] transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
              <div className="text-6xl mb-4">🏭</div>
              <h3 className="text-xl font-black text-[#1B263B] mb-3 uppercase leading-tight">
                Построить производство
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                Инжиниринг, проектирование, техническое перевооружение
              </p>
              <div className="flex items-center text-[#1B263B] font-bold text-sm uppercase">
                Подробнее <Icon name="ArrowRight" size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>

            <Link
              to="/tools"
              className="group relative bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-[#8B7355] p-8 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#8B7355] transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
              <div className="text-6xl mb-4">🔧</div>
              <h3 className="text-xl font-black text-[#1B263B] mb-3 uppercase leading-tight">
                Оснастить инструментом
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                3000+ позиций, собственное производство режущего инструмента
              </p>
              <div className="flex items-center text-[#8B7355] font-bold text-sm uppercase">
                Подробнее <Icon name="ArrowRight" size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>

            <Link
              to="/service"
              className="group relative bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-[#1B263B] p-8 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#1B263B] transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
              <div className="text-6xl mb-4">⚙️</div>
              <h3 className="text-xl font-black text-[#1B263B] mb-3 uppercase leading-tight">
                Ремонт и обслуживание
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                Экстренный ремонт 24/7, пуско-наладка, техническое обслуживание
              </p>
              <div className="flex items-center text-[#1B263B] font-bold text-sm uppercase">
                Подробнее <Icon name="ArrowRight" size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>

            <Link
              to="/production"
              className="group relative bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-[#8B7355] p-8 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#8B7355] transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-xl font-black text-[#1B263B] mb-3 uppercase leading-tight">
                Изготовить детали
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                Механообработка на заказ, формообразующая оснастка
              </p>
              <div className="flex items-center text-[#8B7355] font-bold text-sm uppercase">
                Подробнее <Icon name="ArrowRight" size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0D1B2A] relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/631b940d-0890-4ab1-b942-fe9d4decfecd.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block text-sm font-bold text-[#A8B2C0] uppercase tracking-wider mb-4">
              НАШЕ ПРЕИМУЩЕСТВО
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#C0C5CE] mb-4 uppercase">
              РАБОТАЕМ ПО ПОЛНОМУ ЦИКЛУ
            </h2>
            <div className="w-20 h-1 bg-[#8B7355] mx-auto mb-6" />
            <p className="text-xl text-[#8B96A5] max-w-3xl mx-auto">
              От проектирования до круглосуточного сервиса — закрываем все задачи производства
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
            <div className="relative bg-white/5 backdrop-blur-sm border-2 border-[#4A90A4] p-8 group hover:bg-[#4A90A4]/20 hover:shadow-[0_0_30px_rgba(74,144,164,0.5)] transition-all">
              <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-[#4A90A4] group-hover:border-[#6BC1E0]" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-[#4A90A4] group-hover:border-[#6BC1E0]" />
              
              <div className="text-5xl font-black text-[#4A90A4] mb-4">01</div>
              <div className="text-5xl mb-4">📐</div>
              <h3 className="text-2xl font-black text-[#C0C5CE] mb-3 uppercase">Проектируем</h3>
              <ul className="space-y-2 text-sm text-[#8B96A5]">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-[#A8B2C0] mt-1 flex-shrink-0" />
                  <span>Инжиниринг</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-[#FBBF24] mt-1 flex-shrink-0" />
                  <span>Чертежи</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-[#FBBF24] mt-1 flex-shrink-0" />
                  <span>Техдокументация</span>
                </li>
              </ul>
            </div>

            <div className="relative bg-white/5 backdrop-blur-sm border-2 border-[#8B7355] p-8 group hover:bg-[#8B7355]/20 transition-all">
              <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-[#8B7355]" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-[#8B7355]" />
              
              <div className="text-5xl font-black text-[#D4AF37] group-hover:text-[#FFD700] mb-4">02</div>
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-2xl font-black text-white mb-3 uppercase">Оснащаем</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-[#FBBF24] mt-1 flex-shrink-0" />
                  <span>Поставка оборудования</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-[#FBBF24] mt-1 flex-shrink-0" />
                  <span>Режущий инструмент</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-[#FBBF24] mt-1 flex-shrink-0" />
                  <span>Оснастка</span>
                </li>
              </ul>
            </div>

            <div className="relative bg-white/5 backdrop-blur-sm border-2 border-[#4A90A4] p-8 group hover:bg-[#4A90A4]/20 hover:shadow-[0_0_30px_rgba(74,144,164,0.5)] transition-all">
              <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-[#4A90A4] group-hover:border-[#6BC1E0]" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-[#4A90A4] group-hover:border-[#6BC1E0]" />
              
              <div className="text-5xl font-black text-[#4A90A4] group-hover:text-[#6BC1E0] mb-4">03</div>
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-black text-white mb-3 uppercase">Производим</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-[#FBBF24] mt-1 flex-shrink-0" />
                  <span>Пуско-наладка</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-[#FBBF24] mt-1 flex-shrink-0" />
                  <span>Механообработка</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-[#FBBF24] mt-1 flex-shrink-0" />
                  <span>Аутсорсинг</span>
                </li>
              </ul>
            </div>

            <div className="relative bg-white/5 backdrop-blur-sm border-2 border-[#D4AF37] p-8 group hover:bg-[#D4AF37]/20 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all">
              <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-[#D4AF37] group-hover:border-[#FFD700]" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-[#D4AF37] group-hover:border-[#FFD700]" />
              
              <div className="text-5xl font-black text-[#D4AF37] group-hover:text-[#FFD700] mb-4">04</div>
              <div className="text-5xl mb-4">⚙️</div>
              <h3 className="text-2xl font-black text-white mb-3 uppercase">Обслуживаем</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-[#FBBF24] mt-1 flex-shrink-0" />
                  <span>Экстренный ремонт 24/7</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-[#FBBF24] mt-1 flex-shrink-0" />
                  <span>Техобслуживание</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-[#FBBF24] mt-1 flex-shrink-0" />
                  <span>Поставка запчастей</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] hover:from-[#F4D03F] hover:via-[#FFD700] hover:to-[#F4D03F] text-[#0D1B2A] font-black text-lg px-12 py-6 uppercase shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:shadow-[0_0_50px_rgba(255,215,0,0.8)] transition-all duration-300 glow-gold"
            >
              Заказать комплексное решение
            </Button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8B7355] to-transparent" />
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block text-sm font-bold text-[#8B7355] uppercase tracking-wider mb-4">
              НАШИ ПРЕИМУЩЕСТВА
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1B263B] mb-4 uppercase">
              Почему выбирают Пумори
            </h2>
            <div className="w-20 h-1 bg-[#8B7355] mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="relative bg-gradient-to-br from-gray-50 to-white border-l-4 border-[#4A90A4] p-8 hover:shadow-xl transition-shadow">
              <Icon name="Shield" size={48} className="text-[#4A90A4] mb-4" />
              <h3 className="text-2xl font-black text-[#1B263B] mb-3 uppercase">
                35 лет опыта
              </h3>
              <p className="text-gray-600 leading-relaxed">
                С 1990 года решаем задачи производственных предприятий по всей России и СНГ
              </p>
            </div>

            <div className="relative bg-gradient-to-br from-gray-50 to-white border-l-4 border-[#8B7355] p-8 hover:shadow-xl transition-shadow">
              <Icon name="Factory" size={48} className="text-[#8B7355] mb-4" />
              <h3 className="text-2xl font-black text-[#1B263B] mb-3 uppercase">
                Своё производство
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Собственные мощности для изготовления инструмента и оснастки высочайшего качества
              </p>
            </div>

            <div className="relative bg-gradient-to-br from-gray-50 to-white border-l-4 border-[#4A90A4] p-8 hover:shadow-xl transition-shadow">
              <Icon name="Clock" size={48} className="text-[#4A90A4] mb-4" />
              <h3 className="text-2xl font-black text-[#0A1628] mb-3 uppercase">
                Сервис 24/7
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Экстренная техподдержка и выезд специалистов в любое время суток
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TasksSection;