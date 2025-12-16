import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-20 w-32 h-32">
            <Icon name="Settings" size={128} className="animate-spin" style={{ animationDuration: '20s' }} />
          </div>
          <div className="absolute bottom-20 left-32 w-24 h-24">
            <Icon name="Settings" size={96} className="animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
                35 ЛЕТ ЭКСПЕРТИЗЫ
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                ОТ ИДЕИ ПРОИЗВОДСТВА ДО БЕЗОСТАНОВОЧНОЙ РАБОТЫ
              </h1>

              <p className="text-lg text-white/90 max-w-xl">
                Единственные в России, кто закрывает все задачи: от чертежа до ремонта
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                  <div className="text-2xl font-bold">12000+</div>
                  <div className="text-sm text-white/80">проектов</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                  <div className="text-2xl font-bold">🇷🇺</div>
                  <div className="text-sm text-white/80">Свое производство</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm text-white/80">Сервис</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <p className="text-sm text-white/70">Нам доверяют:</p>
                <div className="flex flex-wrap gap-4 opacity-60">
                  <span className="text-xs font-mono">URALVAGONZAVOD</span>
                  <span className="text-xs font-mono">VSMPO-AVISMA</span>
                  <span className="text-xs font-mono">KAMAZ</span>
                  <span className="text-xs font-mono">AVTOVAZ</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  onClick={() => window.open('https://t.me/pumori_bot', '_blank')}
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  Написать в Telegram
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary"
                  onClick={() => window.location.href = 'tel:+73432873058'}
                >
                  <Icon name="Phone" className="mr-2" size={20} />
                  Позвонить
                </Button>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl transform rotate-3"></div>
                <div className="relative aspect-[4/3] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center">
                  <Icon name="Factory" size={200} className="text-white/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ПРОЕКТЫ ПОЛНОГО ЦИКЛА</h2>
            <p className="text-muted-foreground text-lg">
              От проектирования до запуска и обслуживания — реальные результаты наших клиентов
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden border-l-4 border-primary hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  ООО «КРАСМАШ», г. Красноярск
                </div>
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Factory" size={64} className="text-muted-foreground" />
                </div>
                <h3 className="text-lg font-bold mb-3">ЗАДАЧА</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Модернизация токарного участка. Требовалась точность ±0.005 мм. Брак 15-20%.
                </p>
                <h3 className="text-lg font-bold mb-3">РЕШЕНИЕ</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Полный цикл: Проектирование → Поставка станков Okuma → Подбор инструмента → Пуско-наладка
                </p>
                <div className="bg-secondary/10 p-4 rounded-lg space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="CheckCircle2" size={16} className="text-secondary" />
                    <span className="font-semibold">Брак: 15% → 0%</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="CheckCircle2" size={16} className="text-secondary" />
                    <span className="font-semibold">Производительность: +150%</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="CheckCircle2" size={16} className="text-secondary" />
                    <span className="font-semibold">Экономия: 500 000₽/год</span>
                  </div>
                </div>
                <Button variant="link" className="mt-4 p-0">
                  Читать кейс →
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border-l-4 border-secondary hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  УРАЛВАГОНЗАВОД
                </div>
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Factory" size={64} className="text-muted-foreground" />
                </div>
                <h3 className="text-lg font-bold mb-3">ЗАДАЧА</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Автоматизация фрезерного участка для повышения производительности.
                </p>
                <h3 className="text-lg font-bold mb-3">РЕШЕНИЕ</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Внедрение обрабатывающих центров + роботизация
                </p>
                <div className="bg-secondary/10 p-4 rounded-lg space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="CheckCircle2" size={16} className="text-secondary" />
                    <span className="font-semibold">Брак: -80%</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="CheckCircle2" size={16} className="text-secondary" />
                    <span className="font-semibold">Время цикла: -40%</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="CheckCircle2" size={16} className="text-secondary" />
                    <span className="font-semibold">ROI: 18 месяцев</span>
                  </div>
                </div>
                <Button variant="link" className="mt-4 p-0">
                  Читать кейс →
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border-l-4 border-primary hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  ВСМПО-AVISMA
                </div>
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Factory" size={64} className="text-muted-foreground" />
                </div>
                <h3 className="text-lg font-bold mb-3">ЗАДАЧА</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Поставка инструмента для обработки титановых сплавов.
                </p>
                <h3 className="text-lg font-bold mb-3">РЕШЕНИЕ</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Расточные системы Пумори + пластины Iscar
                </p>
                <div className="bg-secondary/10 p-4 rounded-lg space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="CheckCircle2" size={16} className="text-secondary" />
                    <span className="font-semibold">Точность: +50%</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="CheckCircle2" size={16} className="text-secondary" />
                    <span className="font-semibold">Срок службы: x2.5</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="CheckCircle2" size={16} className="text-secondary" />
                    <span className="font-semibold">Экономия: 1 200 000₽/год</span>
                  </div>
                </div>
                <Button variant="link" className="mt-4 p-0">
                  Читать кейс →
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              ВСЕ КЕЙСЫ И ПРОЕКТЫ
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">НАМ ДОВЕРЯЮТ ЛИДЕРЫ ПРОМЫШЛЕННОСТИ</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16">
            {['URALVAGONZAVOD', 'VSMPO-AVISMA', 'KAMAZ', 'AVTOVAZ', 'PETROZAVODSK MASH', 'KRASMASH', 'NEVSKY ZAVOD', 'RUSTECHNO'].map((client) => (
              <div
                key={client}
                className="aspect-video bg-muted/30 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all hover:scale-105"
              >
                <span className="text-xs font-mono text-muted-foreground">{client}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl">
              <div className="text-4xl font-bold text-primary mb-2">35+</div>
              <div className="font-semibold mb-1">ЛЕТ ЭКСПЕРТИЗЫ</div>
              <div className="text-sm text-muted-foreground">С 1990 года в составе корпорации</div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-secondary/5 to-transparent rounded-2xl">
              <div className="text-4xl font-bold text-secondary mb-2">12000+</div>
              <div className="font-semibold mb-1">ПРОЕКТОВ РЕАЛИЗОВАНО</div>
              <div className="text-sm text-muted-foreground">По всей России и СНГ</div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl">
              <div className="text-4xl font-bold text-primary mb-2">3000+</div>
              <div className="font-semibold mb-1">ПОЗИЦИЙ ИНСТРУМЕНТА</div>
              <div className="text-sm text-muted-foreground">На складе в Екатеринбурге</div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-secondary/5 to-transparent rounded-2xl">
              <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
              <div className="font-semibold mb-1">СЕРВИС И ПОДДЕРЖКА</div>
              <div className="text-sm text-muted-foreground">Экстренный выезд за 2-4 часа</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ПОЛУЧИТЕ КОНСУЛЬТАЦИЮ ЭКСПЕРТА</h2>
            <p className="text-white/90 text-lg">
              Ответим сразу. Подберём решение для вашей задачи за 2 часа.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <Icon name="Phone" size={24} className="mb-3" />
                <div className="text-sm text-white/70 mb-1">Единый телефон</div>
                <a href="tel:+73432873058" className="text-xl font-bold hover:text-secondary transition-colors">
                  +7 (343) 287-30-58
                </a>
                <div className="text-sm text-white/70 mt-2">Пн-Пт: 9:00-18:00</div>
                <Button className="w-full mt-4 bg-white text-primary hover:bg-white/90">
                  Позвонить сейчас
                </Button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <Icon name="Send" size={24} className="mb-3" />
                <div className="text-sm text-white/70 mb-1">Telegram-бот</div>
                <div className="text-xl font-bold">@pumori_bot</div>
                <div className="text-sm text-white/70 mt-2">Ответ за 5 минут</div>
                <Button
                  className="w-full mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  onClick={() => window.open('https://t.me/pumori_bot', '_blank')}
                >
                  Написать в Telegram
                </Button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <Icon name="Mail" size={24} className="mb-3" />
                <div className="text-sm text-white/70 mb-1">Email</div>
                <a href="mailto:info@pumori-engineering.ru" className="text-lg font-bold hover:text-secondary transition-colors break-all">
                  info@pumori-engineering.ru
                </a>
                <div className="text-sm text-white/70 mt-2">Ответ в течение дня</div>
              </div>
            </div>

            <div className="lg:col-span-3 bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Или оставьте заявку</h3>
              <form className="space-y-4">
                <div>
                  <Input
                    placeholder="Имя *"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Телефон *"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    required
                  />
                </div>
                <div>
                  <Input
                    placeholder="Компания"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Какую задачу нужно решить?"
                    rows={4}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <div className="flex items-start gap-2">
                  <Checkbox id="consent" className="mt-1 border-white/30 data-[state=checked]:bg-secondary data-[state=checked]:border-secondary" />
                  <label htmlFor="consent" className="text-sm text-white/70 cursor-pointer">
                    Согласен на обработку персональных данных
                  </label>
                </div>
                <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  ОТПРАВИТЬ ЗАЯВКУ
                </Button>
                <p className="text-sm text-white/60 text-center">
                  Мы перезвоним в течение 15 минут в рабочее время
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
