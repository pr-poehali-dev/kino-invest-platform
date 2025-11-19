import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const projectsData = [
  {
    id: 1,
    title: "Последний рассвет",
    logline: "Драматичная история о последних днях человечества перед лицом неизбежной катастрофы",
    description: "Эпический фильм о группе героев, которые пытаются спасти человечество в последние дни перед глобальной катастрофой. Проект объединяет драматургию высшего класса с визуальными эффектами мирового уровня.",
    producer: "Александр Петров",
    director: "Мария Сидорова",
    genre: "Драма",
    stage: "Production",
    budget: 150000000,
    raised: 85000000,
    minInvestment: 500000,
    timeline: "18 месяцев",
    image: "https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/47b6d8df-db46-4742-948d-fbd2f7e2a295.jpg",
    team: [
      { role: "Продюсер", name: "Александр Петров", experience: "20+ фильмов, 15 млрд ₽ кассы" },
      { role: "Режиссёр", name: "Мария Сидорова", experience: "5 премий Ника, 3 «Золотых орла»" },
      { role: "Оператор", name: "Игорь Волков", experience: "Лауреат Каннского кинофестиваля" }
    ],
    financials: {
      boxOfficeProjection: 450000000,
      streamingRights: 80000000,
      internationalSales: 120000000,
      roi: "200-350%"
    },
    risks: [
      "Зависимость от кассовых сборов",
      "Конкуренция с другими релизами",
      "Задержки в производстве"
    ],
    milestones: [
      { stage: "Pre-production", date: "Завершено", status: "completed" },
      { stage: "Principal Photography", date: "В процессе", status: "current" },
      { stage: "Post-production", date: "Q3 2025", status: "upcoming" },
      { stage: "Release", date: "Q1 2026", status: "upcoming" }
    ]
  },
  {
    id: 2,
    title: "Империя теней",
    logline: "Эпическое приключение в мире, где тени обретают собственную жизнь и власть",
    description: "Грандиозный боевик в жанре тёмного фэнтези. Главный герой — мастер теней — должен противостоять древнему злу, которое угрожает поглотить весь мир.",
    producer: "Мария Соколова",
    director: "Дмитрий Королёв",
    genre: "Боевик",
    stage: "Pre-production",
    budget: 200000000,
    raised: 120000000,
    minInvestment: 1000000,
    timeline: "24 месяца",
    image: "https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/55545d51-2681-4aa2-b895-00062faa19ea.jpg",
    team: [
      { role: "Продюсер", name: "Мария Соколова", experience: "Продюсер года 2023" },
      { role: "Режиссёр", name: "Дмитрий Королёв", experience: "10+ боевиков, 20 млрд ₽ кассы" },
      { role: "VFX-супервайзер", name: "Анна Белова", experience: "Работа над «Защитниками» и «Притяжением»" }
    ],
    financials: {
      boxOfficeProjection: 600000000,
      streamingRights: 150000000,
      internationalSales: 200000000,
      roi: "250-400%"
    },
    risks: [
      "Высокие затраты на VFX",
      "Сложность международного проката",
      "Зависимость от франшизного потенциала"
    ],
    milestones: [
      { stage: "Script Development", date: "Завершено", status: "completed" },
      { stage: "Casting", date: "В процессе", status: "current" },
      { stage: "Principal Photography", date: "Q4 2025", status: "upcoming" },
      { stage: "Release", date: "Q3 2026", status: "upcoming" }
    ]
  },
  {
    id: 3,
    title: "Между строк",
    logline: "Романтическая история о двух писателях, чьи судьбы переплелись через страницы книг",
    description: "Лирическая мелодрама о силе слова и любви. Два писателя из разных эпох находят друг друга через страницы своих произведений.",
    producer: "Дмитрий Волков",
    director: "Елена Светлова",
    genre: "Мелодрама",
    stage: "Development",
    budget: 80000000,
    raised: 25000000,
    minInvestment: 300000,
    timeline: "15 месяцев",
    image: "https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/4e5f2931-7e56-4147-a1f1-14dd9b1c4b5c.jpg",
    team: [
      { role: "Продюсер", name: "Дмитрий Волков", experience: "15 фильмов, специализация мелодрамы" },
      { role: "Режиссёр", name: "Елена Светлова", experience: "Лауреат ММКФ, 2 премии Ника" },
      { role: "Сценарист", name: "Пётр Зайцев", experience: "Бестселлеры и киносценарии" }
    ],
    financials: {
      boxOfficeProjection: 180000000,
      streamingRights: 60000000,
      internationalSales: 40000000,
      roi: "150-250%"
    },
    risks: [
      "Узкая целевая аудитория",
      "Зависимость от критиков",
      "Ограниченный международный потенциал"
    ],
    milestones: [
      { stage: "Script Development", date: "В процессе", status: "current" },
      { stage: "Pre-production", date: "Q2 2025", status: "upcoming" },
      { stage: "Principal Photography", date: "Q3 2025", status: "upcoming" },
      { stage: "Release", date: "Q1 2026", status: "upcoming" }
    ]
  }
];

const stages = {
  "Development": "Разработка",
  "Pre-production": "Пре-продакшн",
  "Production": "Съёмки",
  "Post-production": "Пост-продакшн",
  "Distribution": "Прокат"
};

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [investor, setInvestor] = useState<any>(null);
  const [investmentAmount, setInvestmentAmount] = useState('');

  const project = projectsData.find(p => p.id === Number(id));

  useEffect(() => {
    const storedInvestor = localStorage.getItem('investor');
    if (!storedInvestor) {
      navigate('/login');
    } else {
      setInvestor(JSON.parse(storedInvestor));
    }
  }, [navigate]);

  if (!project || !investor) return null;

  const progressPercentage = (project.raised / project.budget) * 100;

  const handleInvest = () => {
    const amount = Number(investmentAmount);
    if (amount < project.minInvestment) {
      toast({
        title: "Ошибка",
        description: `Минимальная сумма инвестиций: ${(project.minInvestment / 1000000).toFixed(1)} млн ₽`,
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Заявка отправлена",
      description: "Наш менеджер свяжется с вами в течение 24 часов",
    });
    setInvestmentAmount('');
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate('/dashboard')}>
              <Icon name="ArrowLeft" className="mr-2" size={18} />
              Назад
            </Button>
            <div className="flex items-center gap-2">
              <Icon name="Film" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold text-primary">CineInvest</h1>
            </div>
          </div>
          <Button variant="outline" onClick={() => navigate('/dashboard')} className="border-border">
            <Icon name="LayoutDashboard" className="mr-2" size={18} />
            Кабинет
          </Button>
        </div>
      </nav>

      <div className="relative h-[50vh] overflow-hidden">
        <img 
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-8">
          <Badge className="mb-4 bg-primary text-primary-foreground">{stages[project.stage as keyof typeof stages]}</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">{project.logline}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Обзор</TabsTrigger>
                <TabsTrigger value="team">Команда</TabsTrigger>
                <TabsTrigger value="financials">Финансы</TabsTrigger>
                <TabsTrigger value="timeline">План</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>О проекте</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    
                    <Separator />
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Продюсер</p>
                        <p className="font-semibold">{project.producer}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Режиссёр</p>
                        <p className="font-semibold">{project.director}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Жанр</p>
                        <p className="font-semibold">{project.genre}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Сроки</p>
                        <p className="font-semibold">{project.timeline}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-secondary/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="AlertTriangle" className="text-secondary" size={24} />
                      Риски проекта
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {project.risks.map((risk, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Icon name="AlertCircle" className="text-secondary flex-shrink-0 mt-0.5" size={16} />
                          <span className="text-muted-foreground">{risk}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="team" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Ключевые участники</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {project.team.map((member, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-muted/30">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Icon name="User" className="text-primary" size={24} />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-lg">{member.name}</p>
                          <p className="text-sm text-primary mb-1">{member.role}</p>
                          <p className="text-sm text-muted-foreground">{member.experience}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="financials" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Финансовая модель</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-muted/30">
                        <p className="text-sm text-muted-foreground mb-1">Прогноз кассы</p>
                        <p className="text-2xl font-bold text-primary">
                          {(project.financials.boxOfficeProjection / 1000000).toFixed(0)} млн ₽
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-muted/30">
                        <p className="text-sm text-muted-foreground mb-1">Стриминг</p>
                        <p className="text-2xl font-bold text-primary">
                          {(project.financials.streamingRights / 1000000).toFixed(0)} млн ₽
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-muted/30">
                        <p className="text-sm text-muted-foreground mb-1">Международные продажи</p>
                        <p className="text-2xl font-bold text-primary">
                          {(project.financials.internationalSales / 1000000).toFixed(0)} млн ₽
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20">
                        <p className="text-sm text-muted-foreground mb-1">Прогноз ROI</p>
                        <p className="text-2xl font-bold text-primary">{project.financials.roi}</p>
                      </div>
                    </div>

                    <Separator />

                    <div className="bg-muted/30 p-6 rounded-lg">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Icon name="Info" className="text-primary" size={20} />
                        Распределение прибыли
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Первые 100% бюджета — возврат инвестиций</li>
                        <li>• 20% — дистрибьюторы и прокатчики</li>
                        <li>• 30% — продюсеры и творческая команда</li>
                        <li>• 50% — инвесторы пропорционально доле</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="timeline" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Производственный план</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {project.milestones.map((milestone, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          milestone.status === 'completed' ? 'bg-primary/20' :
                          milestone.status === 'current' ? 'bg-secondary/20' :
                          'bg-muted'
                        }`}>
                          {milestone.status === 'completed' ? (
                            <Icon name="CheckCircle" className="text-primary" size={18} />
                          ) : milestone.status === 'current' ? (
                            <Icon name="PlayCircle" className="text-secondary" size={18} />
                          ) : (
                            <Icon name="Clock" className="text-muted-foreground" size={18} />
                          )}
                        </div>
                        <div className="flex-1 pb-6 border-l-2 border-border pl-6 ml-4">
                          <p className="font-semibold">{milestone.stage}</p>
                          <p className="text-sm text-muted-foreground">{milestone.date}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card className="border-primary/50">
                <CardHeader>
                  <CardTitle className="text-xl">Финансирование</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Собрано</span>
                      <span className="font-semibold">{progressPercentage.toFixed(0)}%</span>
                    </div>
                    <Progress value={progressPercentage} className="h-3" />
                    <div className="flex justify-between mt-2 text-sm">
                      <span className="text-muted-foreground">{(project.raised / 1000000).toFixed(0)} млн ₽</span>
                      <span className="text-muted-foreground">{(project.budget / 1000000).toFixed(0)} млн ₽</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Бюджет проекта</span>
                      <span className="font-bold">{(project.budget / 1000000).toFixed(0)} млн ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Минимальный чек</span>
                      <span className="font-bold text-primary">{(project.minInvestment / 1000000).toFixed(1)} млн ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Осталось собрать</span>
                      <span className="font-bold text-secondary">
                        {((project.budget - project.raised) / 1000000).toFixed(0)} млн ₽
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-secondary/50 bg-gradient-to-br from-secondary/5 to-card">
                <CardHeader>
                  <CardTitle className="text-xl">Инвестировать</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="amount">Сумма инвестиций (₽)</Label>
                    <Input
                      id="amount"
                      type="number"
                      placeholder={`от ${project.minInvestment.toLocaleString()}`}
                      value={investmentAmount}
                      onChange={(e) => setInvestmentAmount(e.target.value)}
                    />
                  </div>

                  {investmentAmount && Number(investmentAmount) >= project.minInvestment && (
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <p className="text-sm text-muted-foreground mb-1">Ваша доля</p>
                      <p className="text-2xl font-bold text-primary">
                        {((Number(investmentAmount) / project.budget) * 100).toFixed(2)}%
                      </p>
                    </div>
                  )}

                  <Button 
                    className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg py-6"
                    onClick={handleInvest}
                  >
                    <Icon name="TrendingUp" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    После отправки заявки с вами свяжется наш менеджер для оформления документов
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
