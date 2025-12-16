import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const TasksSection = () => {
  return (
    <>
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <img 
            src="https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/55fefcc1-bc12-4c71-ac42-8b14fae2a73e.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-4">КАКУЮ ЗАДАЧУ ВАМ НУЖНО РЕШИТЬ?</h2>
            <p className="text-muted-foreground text-lg">
              Выберите вашу задачу — мы направим вас к нужному решению
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Link
              to="/engineering"
              className="group relative p-8 bg-gradient-to-br from-white to-gray-50 border-2 border-[#1E3A8A]/10 hover:border-[#1E3A8A]/30 transition-all duration-300 hover:shadow-2xl"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 95%, 95% 100%, 0 100%)' }}
            >
              <div className="flex flex-col gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-4xl">🏭</span>
                </div>
                <h3 className="text-xl font-bold text-[#1E3A8A]">ПОСТРОИТЬ/МОДЕРНИЗИРОВАТЬ ПРОИЗВОДСТВО</h3>
                <p className="text-muted-foreground">
                  Инжиниринг, проектирование, техперевооружение
                </p>
                <div className="flex items-center text-[#1E3A8A] font-semibold group-hover:gap-3 gap-2 transition-all">
                  Подробнее <Icon name="ArrowRight" size={20} />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/0 to-[#3B82F6]/0 group-hover:from-[#1E3A8A]/5 group-hover:to-[#3B82F6]/5 transition-colors pointer-events-none"
                   style={{ clipPath: 'polygon(0 0, 100% 0, 100% 95%, 95% 100%, 0 100%)' }}></div>
            </Link>

            <Link
              to="/tools"
              className="group relative p-8 bg-gradient-to-br from-white to-gray-50 border-2 border-[#D97706]/10 hover:border-[#D97706]/30 transition-all duration-300 hover:shadow-2xl"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 95%, 95% 100%, 0 100%)' }}
            >
              <div className="flex flex-col gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D97706] to-[#FBBF24] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-4xl">🔧</span>
                </div>
                <h3 className="text-xl font-bold text-[#D97706]">ОСНАСТИТЬ СТАНКИ ИНСТРУМЕНТОМ</h3>
                <p className="text-muted-foreground">
                  3000+ позиций, собственное производство
                </p>
                <div className="flex items-center text-[#D97706] font-semibold group-hover:gap-3 gap-2 transition-all">
                  Подробнее <Icon name="ArrowRight" size={20} />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#D97706]/0 to-[#FBBF24]/0 group-hover:from-[#D97706]/5 group-hover:to-[#FBBF24]/5 transition-colors pointer-events-none"
                   style={{ clipPath: 'polygon(0 0, 100% 0, 100% 95%, 95% 100%, 0 100%)' }}></div>
            </Link>

            <Link
              to="/service"
              className="group relative p-8 bg-gradient-to-br from-white to-gray-50 border-2 border-[#1E3A8A]/10 hover:border-[#1E3A8A]/30 transition-all duration-300 hover:shadow-2xl"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 95%, 95% 100%, 0 100%)' }}
            >
              <div className="flex flex-col gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-4xl">⚙️</span>
                </div>
                <h3 className="text-xl font-bold text-[#1E3A8A]">ОТРЕМОНТИРОВАТЬ/ОБСЛУЖИТЬ ОБОРУДОВАНИЕ</h3>
                <p className="text-muted-foreground">
                  Экстренный ремонт 24/7, пуско-наладка, сервис
                </p>
                <div className="flex items-center text-[#1E3A8A] font-semibold group-hover:gap-3 gap-2 transition-all">
                  Подробнее <Icon name="ArrowRight" size={20} />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/0 to-[#3B82F6]/0 group-hover:from-[#1E3A8A]/5 group-hover:to-[#3B82F6]/5 transition-colors pointer-events-none"
                   style={{ clipPath: 'polygon(0 0, 100% 0, 100% 95%, 95% 100%, 0 100%)' }}></div>
            </Link>

            <Link
              to="/production"
              className="group relative p-8 bg-gradient-to-br from-white to-gray-50 border-2 border-[#D97706]/10 hover:border-[#D97706]/30 transition-all duration-300 hover:shadow-2xl"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 95%, 95% 100%, 0 100%)' }}
            >
              <div className="flex flex-col gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D97706] to-[#FBBF24] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-4xl">🏭</span>
                </div>
                <h3 className="text-xl font-bold text-[#D97706]">ЗАКАЗАТЬ ИЗГОТОВЛЕНИЕ ДЕТАЛЕЙ</h3>
                <p className="text-muted-foreground">
                  Механообработка, формообразующая оснастка
                </p>
                <div className="flex items-center text-[#D97706] font-semibold group-hover:gap-3 gap-2 transition-all">
                  Подробнее <Icon name="ArrowRight" size={20} />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#D97706]/0 to-[#FBBF24]/0 group-hover:from-[#D97706]/5 group-hover:to-[#FBBF24]/5 transition-colors pointer-events-none"
                   style={{ clipPath: 'polygon(0 0, 100% 0, 100% 95%, 95% 100%, 0 100%)' }}></div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F9FAFB] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <img 
            src="https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/631b940d-0890-4ab1-b942-fe9d4decfecd.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-4">МЫ ЗАКРЫВАЕМ ВЕСЬ ЦИКЛ</h2>
            <p className="text-muted-foreground text-lg">
              От проектирования до безостановочной работы — комплексное решение всех задач производства
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative aspect-square max-w-2xl mx-auto">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <defs>
                  <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1E3A8A" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                  <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D97706" />
                    <stop offset="100%" stopColor="#FBBF24" />
                  </linearGradient>
                </defs>
                
                <g className="cursor-pointer hover:opacity-80 transition-opacity">
                  <path d="M 200 50 L 320 200 L 200 200 Z" fill="url(#blueGrad)" stroke="#1E3A8A" strokeWidth="3" />
                  <text x="240" y="140" fill="white" fontSize="18" fontWeight="bold">1</text>
                  <text x="215" y="165" fill="white" fontSize="14" fontWeight="bold">ПРОЕКТИ-</text>
                  <text x="225" y="180" fill="white" fontSize="14" fontWeight="bold">РУЕМ</text>
                </g>
                
                <g className="cursor-pointer hover:opacity-80 transition-opacity">
                  <path d="M 320 200 L 200 350 L 200 200 Z" fill="url(#goldGrad)" stroke="#D97706" strokeWidth="3" />
                  <text x="240" y="260" fill="white" fontSize="18" fontWeight="bold">2</text>
                  <text x="220" y="285" fill="white" fontSize="14" fontWeight="bold">ОСНАЩАЕМ</text>
                </g>
                
                <g className="cursor-pointer hover:opacity-80 transition-opacity">
                  <path d="M 200 350 L 80 200 L 200 200 Z" fill="url(#blueGrad)" stroke="#1E3A8A" strokeWidth="3" />
                  <text x="140" y="260" fill="white" fontSize="18" fontWeight="bold">3</text>
                  <text x="115" y="285" fill="white" fontSize="14" fontWeight="bold">ПРОИЗВО-</text>
                  <text x="135" y="300" fill="white" fontSize="14" fontWeight="bold">ДИМ</text>
                </g>
                
                <g className="cursor-pointer hover:opacity-80 transition-opacity">
                  <path d="M 80 200 L 200 50 L 200 200 Z" fill="url(#goldGrad)" stroke="#D97706" strokeWidth="3" />
                  <text x="140" y="140" fill="white" fontSize="18" fontWeight="bold">4</text>
                  <text x="110" y="165" fill="white" fontSize="14" fontWeight="bold">ОБСЛУЖИ-</text>
                  <text x="125" y="180" fill="white" fontSize="14" fontWeight="bold">ВАЕМ</text>
                </g>
                
                <circle cx="200" cy="200" r="35" fill="white" stroke="#1E3A8A" strokeWidth="3" />
                <image 
                  href="https://cdn.poehali.dev/files/IMG_0679.jpeg" 
                  x="175" 
                  y="175" 
                  width="50" 
                  height="50"
                  clipPath="circle(25px at center)"
                />
              </svg>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-5xl mb-2">🏭</div>
                <h3 className="font-bold text-[#1E3A8A] mb-2">ПРОЕКТИРУЕМ</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Техперевооружение</li>
                  <li>Проектирование цехов</li>
                  <li>Разработка технологий</li>
                </ul>
              </div>

              <div className="text-center">
                <div className="text-5xl mb-2">🔧</div>
                <h3 className="font-bold text-[#D97706] mb-2">ОСНАЩАЕМ</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Оборудование</li>
                  <li>Режущий инструмент</li>
                  <li>Собственное производство</li>
                </ul>
              </div>

              <div className="text-center">
                <div className="text-5xl mb-2">🏭</div>
                <h3 className="font-bold text-[#1E3A8A] mb-2">ПРОИЗВОДИМ</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Механообработка</li>
                  <li>Формообразующая оснастка</li>
                  <li>Серийное изготовление</li>
                </ul>
              </div>

              <div className="text-center">
                <div className="text-5xl mb-2">⚙️</div>
                <h3 className="font-bold text-[#D97706] mb-2">ОБСЛУЖИВАЕМ</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Экстренный ремонт 24/7</li>
                  <li>Пуско-наладка</li>
                  <li>Техобслуживание</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] hover:from-[#1a3470] hover:to-[#2563EB] text-white px-8 py-6 text-lg"
            >
              ЗАКАЗАТЬ КОМПЛЕКСНОЕ РЕШЕНИЕ
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <img 
            src="https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/55fefcc1-bc12-4c71-ac42-8b14fae2a73e.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A]">ПОЧЕМУ ИНЖЕНЕРНЫЙ ЦЕНТР ПУМОРИ?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="relative p-8 bg-gradient-to-br from-white to-gray-50 border-2 border-[#1E3A8A]/10 hover:border-[#1E3A8A]/30 transition-colors">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6]" 
                   style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}></div>
              <div className="text-5xl mb-4">🏭</div>
              <h3 className="text-xl font-bold text-[#1E3A8A] mb-3">ЕДИНСТВЕННЫЕ С ПОЛНЫМ ЦИКЛОМ</h3>
              <p className="text-muted-foreground">
                От чертежа до ремонта — закрываем все задачи производства в одном месте. Не нужно искать 10 подрядчиков.
              </p>
            </div>

            <div className="relative p-8 bg-gradient-to-br from-white to-gray-50 border-2 border-[#D97706]/10 hover:border-[#D97706]/30 transition-colors">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#D97706] to-[#FBBF24]" 
                   style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}></div>
              <div className="text-5xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-[#D97706] mb-3">СОБСТВЕННОЕ ПРОИЗВОДСТВО</h3>
              <p className="text-muted-foreground mb-3">
                Завод инструментальных систем "Пумори" в Екатеринбурге. Единственное производство расточных систем в России.
              </p>
              <div className="inline-block bg-[#D97706]/10 text-[#D97706] px-3 py-1 rounded-full text-sm font-semibold">
                🇷🇺 Made in Russia
              </div>
            </div>

            <div className="relative p-8 bg-gradient-to-br from-white to-gray-50 border-2 border-[#1E3A8A]/10 hover:border-[#1E3A8A]/30 transition-colors">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6]" 
                   style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}></div>
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-[#1E3A8A] mb-3">35 ЛЕТ НАДЁЖНОСТИ</h3>
              <p className="text-muted-foreground">
                С 1990 года в составе корпорации Пумори. Партнёры мировых лидеров: Okuma, Iscar, Kennametal.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TasksSection;