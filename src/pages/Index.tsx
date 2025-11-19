import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const projects = [
  {
    id: 1,
    title: "Последний рассвет",
    logline: "Драматичная история о последних днях человечества перед лицом неизбежной катастрофы",
    producer: "Александр Петров",
    genre: "Драма",
    stage: "Production",
    budget: 150000000,
    minInvestment: 500000,
    image: "https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/47b6d8df-db46-4742-948d-fbd2f7e2a295.jpg"
  },
  {
    id: 2,
    title: "Империя теней",
    logline: "Эпическое приключение в мире, где тени обретают собственную жизнь и власть",
    producer: "Мария Соколова",
    genre: "Боевик",
    stage: "Pre-production",
    budget: 200000000,
    minInvestment: 1000000,
    image: "https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/55545d51-2681-4aa2-b895-00062faa19ea.jpg"
  },
  {
    id: 3,
    title: "Между строк",
    logline: "Романтическая история о двух писателях, чьи судьбы переплелись через страницы книг",
    producer: "Дмитрий Волков",
    genre: "Мелодрама",
    stage: "Development",
    budget: 80000000,
    minInvestment: 300000,
    image: "https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/4e5f2931-7e56-4147-a1f1-14dd9b1c4b5c.jpg"
  }
];

const stages = {
  "Development": "Разработка",
  "Pre-production": "Пре-продакшн",
  "Production": "Съёмки",
  "Post-production": "Пост-продакшн",
  "Distribution": "Прокат"
};

const faqItems = [
  {
    question: "Как устроено финансирование кино?",
    answer: "Финансирование кинопроектов происходит через инвестиционные соглашения. Инвесторы вкладывают средства на этапе разработки или производства и получают долю от будущих доходов фильма, включая кассовые сборы, продажи на стриминговых платформах, международные продажи и телевизионные права."
  },
  {
    question: "Как распределяется выручка?",
    answer: "Выручка от фильма распределяется по водопадной схеме: сначала окупаются производственные затраты, затем доля идёт дистрибьюторам, после чего оставшаяся прибыль делится между продюсерами и инвесторами согласно договору. Типичная доля инвестора составляет от 20% до 50% чистой прибыли в зависимости от размера вложений."
  },
  {
    question: "Какие риски несут инвесторы?",
    answer: "Инвестиции в кино — высокорискованный актив. Не все фильмы окупаются, и возврат инвестиций может занять от 2 до 5 лет. Нет гарантий получения дохода. Важно диверсифицировать портфель, инвестируя в несколько проектов разных жанров и бюджетов."
  },
  {
    question: "Какие документы подписывают инвесторы?",
    answer: "Основные документы: инвестиционный договор, соглашение о распределении прибыли, раскрытие рисков и NDA (соглашение о неразглашении). Все документы составляются юристами и защищают права обеих сторон."
  }
];

export default function Index() {
  const navigate = useNavigate();
  const [selectedGenre, setSelectedGenre] = useState<string>("all");
  const [selectedStage, setSelectedStage] = useState<string>("all");

  const filteredProjects = projects.filter(project => {
    const genreMatch = selectedGenre === "all" || project.genre === selectedGenre;
    const stageMatch = selectedStage === "all" || project.stage === selectedStage;
    return genreMatch && stageMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Film" className="text-primary" size={32} />
            <h1 className="text-2xl font-bold text-primary">CineInvest</h1>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#catalog" className="text-foreground hover:text-primary transition-colors">Каталог</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О платформе</a>
            <a href="#education" className="text-foreground hover:text-primary transition-colors">Обучение</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button 
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => navigate('/login')}
          >
            Войти
          </Button>
        </div>
      </nav>

      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
        </div>
        
        <div className="container mx-auto px-4 z-20 text-center animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Инвестируйте в кино
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Онлайн-платформа для инвестиций в проекты известных российских продюсеров
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Станьте частью создания кино и получайте долю от кассовых сборов, стриминга и международных продаж
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
              onClick={() => navigate('/login')}
            >
              <Icon name="TrendingUp" className="mr-2" size={20} />
              Стать инвестором
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6">
              <Icon name="Upload" className="mr-2" size={20} />
              Разместить проект
            </Button>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Каталог проектов</h2>
            <p className="text-muted-foreground text-lg">Выберите проект для инвестиций</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
            <Select value={selectedGenre} onValueChange={setSelectedGenre}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="Жанр" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все жанры</SelectItem>
                <SelectItem value="Драма">Драма</SelectItem>
                <SelectItem value="Боевик">Боевик</SelectItem>
                <SelectItem value="Мелодрама">Мелодрама</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedStage} onValueChange={setSelectedStage}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="Стадия" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все стадии</SelectItem>
                <SelectItem value="Development">Разработка</SelectItem>
                <SelectItem value="Pre-production">Пре-продакшн</SelectItem>
                <SelectItem value="Production">Съёмки</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="overflow-hidden hover:scale-105 transition-all duration-300 bg-card border-border hover:border-primary cursor-pointer group"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => navigate(`/project/${project.id}`)}
              >
                <div className="relative h-[400px] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    {stages[project.stage as keyof typeof stages]}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.logline}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="User" size={16} className="text-muted-foreground" />
                    <span className="text-muted-foreground">{project.producer}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Film" size={16} className="text-muted-foreground" />
                    <span className="text-muted-foreground">{project.genre}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-muted-foreground">Минимальный чек</p>
                      <p className="text-lg font-bold text-primary">
                        {(project.minInvestment / 1000000).toFixed(1)} млн ₽
                      </p>
                    </div>
                    <Button 
                      className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                      onClick={(e) => { e.stopPropagation(); navigate(`/project/${project.id}`); }}
                    >
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">О платформе</h2>
            <p className="text-lg text-muted-foreground mb-6">
              CineInvest — первая российская онлайн-платформа для инвестиций в кинопроекты. 
              Мы объединяем талантливых продюсеров и режиссёров с инвесторами, которые хотят 
              стать частью создания культовых фильмов.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Наша миссия — демократизировать доступ к инвестициям в киноиндустрию и создать 
              прозрачную экосистему для финансирования качественного российского кино.
            </p>
            
            <div className="bg-muted/30 border border-border rounded-lg p-8 mt-12">
              <div className="flex items-start gap-3 mb-4">
                <Icon name="AlertTriangle" className="text-secondary flex-shrink-0 mt-1" size={24} />
                <div className="text-left">
                  <h3 className="text-xl font-bold mb-2 text-secondary">Юридический дисклеймер</h3>
                  <p className="text-muted-foreground">
                    Инвестиции в кинопроекты несут высокие риски. Доходность не гарантирована. 
                    Возможна полная потеря вложенных средств. Перед инвестированием внимательно 
                    изучите все материалы проекта и проконсультируйтесь с финансовым советником. 
                    Платформа не несёт ответственности за коммерческий успех проектов.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Образовательный центр</h2>
              <p className="text-muted-foreground text-lg">Всё, что нужно знать об инвестициях в кино</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 bg-card hover:border-primary transition-colors"
                >
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Хотите узнать больше о платформе или получить доступ к закрытым презентациям проектов?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Icon name="Mail" className="mr-2" size={20} />
                Написать нам
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Icon name="Calendar" className="mr-2" size={20} />
                Заказать презентацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Film" className="text-primary" size={28} />
                <h3 className="text-xl font-bold text-primary">CineInvest</h3>
              </div>
              <p className="text-muted-foreground">
                Онлайн-платформа для инвестиций в российское кино
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Платформа</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#catalog" className="hover:text-primary transition-colors">Каталог проектов</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#education" className="hover:text-primary transition-colors">Обучение</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@cineinvest.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="mb-8" />
          <div className="text-center text-muted-foreground text-sm">
            <p>© 2024 CineInvest. Все права защищены.</p>
            <p className="mt-2">Инвестиции несут риски. Ознакомьтесь с документацией перед принятием решений.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}