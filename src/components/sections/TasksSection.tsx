import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const TasksSection = () => {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">КАКУЮ ЗАДАЧУ ВАМ НУЖНО РЕШИТЬ?</h2>
            <p className="text-muted-foreground text-lg">
              Выберите вашу задачу — мы направим вас к нужному решению
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Link
              to="/engineering"
              className="group relative p-8 rounded-2xl border-l-4 border-primary bg-card hover:bg-gradient-to-br hover:from-primary/5 hover:to-transparent transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex flex-col gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Factory" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold">ПОСТРОИТЬ/МОДЕРНИЗИРОВАТЬ ПРОИЗВОДСТВО</h3>
                <p className="text-muted-foreground">
                  Инжиниринг, проектирование, техперевооружение, автоматизация
                </p>
                <div className="flex items-center text-primary font-semibold group-hover:gap-3 gap-2 transition-all">
                  Подробнее <Icon name="ArrowRight" size={20} />
                </div>
              </div>
            </Link>

            <Link
              to="/tools"
              className="group relative p-8 rounded-2xl border-l-4 border-secondary bg-card hover:bg-gradient-to-br hover:from-secondary/5 hover:to-transparent transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex flex-col gap-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Wrench" size={32} className="text-secondary" />
                </div>
                <h3 className="text-xl font-bold">ОСНАСТИТЬ СТАНКИ ИНСТРУМЕНТОМ</h3>
                <p className="text-muted-foreground">
                  3000+ позиций на складе, собственное производство, поставка за 1-3 дня
                </p>
                <div className="flex items-center text-secondary font-semibold group-hover:gap-3 gap-2 transition-all">
                  Подробнее <Icon name="ArrowRight" size={20} />
                </div>
              </div>
            </Link>

            <Link
              to="/service"
              className="group relative p-8 rounded-2xl border-l-4 border-primary bg-card hover:bg-gradient-to-br hover:from-primary/5 hover:to-transparent transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex flex-col gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Settings" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold">ОТРЕМОНТИРОВАТЬ/ОБСЛУЖИТЬ ОБОРУДОВАНИЕ</h3>
                <p className="text-muted-foreground">
                  Экстренный ремонт 24/7, выезд за 2-4 часа, пуско-наладка, техподдержка
                </p>
                <div className="flex items-center text-primary font-semibold group-hover:gap-3 gap-2 transition-all">
                  Подробнее <Icon name="ArrowRight" size={20} />
                </div>
              </div>
            </Link>

            <Link
              to="/production"
              className="group relative p-8 rounded-2xl border-l-4 border-secondary bg-card hover:bg-gradient-to-br hover:from-secondary/5 hover:to-transparent transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex flex-col gap-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Factory" size={32} className="text-secondary" />
                </div>
                <h3 className="text-xl font-bold">ЗАКАЗАТЬ ИЗГОТОВЛЕНИЕ ДЕТАЛЕЙ</h3>
                <p className="text-muted-foreground">
                  Механообработка на заказ, формообразующая оснастка, серийное производство
                </p>
                <div className="flex items-center text-secondary font-semibold group-hover:gap-3 gap-2 transition-all">
                  Подробнее <Icon name="ArrowRight" size={20} />
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-8 p-6 bg-muted/50 rounded-2xl max-w-2xl mx-auto">
            <p className="text-muted-foreground mb-3">
              💬 Не уверены? Напишите в Telegram — подберём решение за 5 минут
            </p>
            <Button
              variant="outline"
              onClick={() => window.open('https://t.me/pumori_bot', '_blank')}
            >
              @pumori_bot
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">МЫ ЗАКРЫВАЕМ ВЕСЬ ЦИКЛ</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              От проектирования до безостановочной работы — комплексное решение всех задач производства
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-primary to-primary/80 text-white p-8 rounded-2xl hover:scale-105 transition-transform">
                <div className="text-4xl font-bold mb-2">1</div>
                <div className="text-5xl mb-4">🏭</div>
                <h3 className="text-xl font-bold mb-4">ПРОЕКТИРУЕМ</h3>
                <ul className="space-y-2 text-sm text-white/90">
                  <li>• Техперевооружение производства</li>
                  <li>• Проектирование цехов под ключ</li>
                  <li>• Разработка технологий</li>
                  <li>• Внедрение автоматизации</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-secondary to-secondary/80 text-white p-8 rounded-2xl hover:scale-105 transition-transform">
                <div className="text-4xl font-bold mb-2">2</div>
                <div className="text-5xl mb-4">🔧</div>
                <h3 className="text-xl font-bold mb-4">ОСНАЩАЕМ</h3>
                <ul className="space-y-2 text-sm text-white/90">
                  <li>• Металлообрабатывающее оборудование</li>
                  <li>• Режущий инструмент (3000+ SKU)</li>
                  <li>• Инструмент собственного производства</li>
                  <li>• Нестандартная оснастка под заказ</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary to-primary/80 text-white p-8 rounded-2xl hover:scale-105 transition-transform">
                <div className="text-4xl font-bold mb-2">3</div>
                <div className="text-5xl mb-4">🏭</div>
                <h3 className="text-xl font-bold mb-4">ПРОИЗВОДИМ</h3>
                <ul className="space-y-2 text-sm text-white/90">
                  <li>• Механообработка на заказ</li>
                  <li>• Формообразующая оснастка</li>
                  <li>• Серийное изготовление деталей</li>
                  <li>• Производственный аутсорсинг</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-secondary to-secondary/80 text-white p-8 rounded-2xl hover:scale-105 transition-transform">
                <div className="text-4xl font-bold mb-2">4</div>
                <div className="text-5xl mb-4">⚙️</div>
                <h3 className="text-xl font-bold mb-4">ОБСЛУЖИВАЕМ</h3>
                <ul className="space-y-2 text-sm text-white/90">
                  <li>• Экстренный ремонт 24/7</li>
                  <li>• Пуско-наладка оборудования</li>
                  <li>• Техническое обслуживание</li>
                  <li>• Поставка оригинальных запчастей</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white">
                ЗАКАЗАТЬ КОМПЛЕКСНОЕ РЕШЕНИЕ
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Или выберите отдельную услугу выше ↑
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">ПОЧЕМУ ИНЖЕНЕРНЫЙ ЦЕНТР ПУМОРИ?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="relative p-8 bg-card rounded-2xl border-2 border-primary/10 hover:border-primary/30 transition-colors">
              <div className="absolute top-4 right-4 w-12 h-12 bg-primary/10" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}></div>
              <div className="text-5xl mb-4">🏭</div>
              <h3 className="text-xl font-bold mb-3">ЕДИНСТВЕННЫЕ С ПОЛНЫМ ЦИКЛОМ</h3>
              <p className="text-muted-foreground">
                От чертежа до ремонта — закрываем все задачи производства в одном месте. Не нужно искать 10 подрядчиков.
              </p>
            </div>

            <div className="relative p-8 bg-card rounded-2xl border-2 border-secondary/10 hover:border-secondary/30 transition-colors">
              <div className="absolute top-4 right-4 w-12 h-12 bg-secondary/10" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}></div>
              <div className="text-5xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold mb-3">СОБСТВЕННОЕ ПРОИЗВОДСТВО</h3>
              <p className="text-muted-foreground mb-3">
                Завод инструментальных систем "Пумори" в Екатеринбурге. Единственное производство расточных систем в России. Качество ISO 9001:2015.
              </p>
              <div className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-semibold">
                🇷🇺 Made in Russia
              </div>
            </div>

            <div className="relative p-8 bg-card rounded-2xl border-2 border-primary/10 hover:border-primary/30 transition-colors">
              <div className="absolute top-4 right-4 w-12 h-12 bg-primary/10" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}></div>
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">35 ЛЕТ НАДЁЖНОСТИ</h3>
              <p className="text-muted-foreground">
                С 1990 года в составе корпорации Пумори. Партнёры мировых лидеров: Okuma, Iscar, Kennametal. Нам доверяют Уралвагонзавод, ВСМПО, Камаз.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TasksSection;
