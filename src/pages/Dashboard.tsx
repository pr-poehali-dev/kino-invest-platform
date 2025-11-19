import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const investorProjects = [
  {
    id: 1,
    title: "Последний рассвет",
    invested: 2000000,
    share: 1.33,
    status: "active",
    stage: "Production"
  },
  {
    id: 2,
    title: "Империя теней",
    invested: 1500000,
    share: 0.75,
    status: "active",
    stage: "Pre-production"
  }
];

const availableProjects = [
  {
    id: 1,
    title: "Последний рассвет",
    genre: "Драма",
    stage: "Production",
    minInvestment: 500000,
    raised: 85000000,
    target: 150000000,
    image: "https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/47b6d8df-db46-4742-948d-fbd2f7e2a295.jpg"
  },
  {
    id: 2,
    title: "Империя теней",
    genre: "Боевик",
    stage: "Pre-production",
    minInvestment: 1000000,
    raised: 120000000,
    target: 200000000,
    image: "https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/55545d51-2681-4aa2-b895-00062faa19ea.jpg"
  },
  {
    id: 3,
    title: "Между строк",
    genre: "Мелодрама",
    stage: "Development",
    minInvestment: 300000,
    raised: 25000000,
    target: 80000000,
    image: "https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/4e5f2931-7e56-4147-a1f1-14dd9b1c4b5c.jpg"
  }
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [investor, setInvestor] = useState<any>(null);

  useEffect(() => {
    const storedInvestor = localStorage.getItem('investor');
    if (!storedInvestor) {
      navigate('/login');
    } else {
      setInvestor(JSON.parse(storedInvestor));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('investor');
    navigate('/');
  };

  if (!investor) return null;

  const totalInvested = investorProjects.reduce((sum, p) => sum + p.invested, 0);

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Film" className="text-primary" size={32} />
            <h1 className="text-2xl font-bold text-primary">CineInvest</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm text-muted-foreground">Добро пожаловать,</p>
              <p className="font-semibold">{investor.name}</p>
            </div>
            <Button variant="outline" onClick={handleLogout} className="border-border">
              <Icon name="LogOut" className="mr-2" size={18} />
              Выйти
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Личный кабинет инвестора</h2>
          <p className="text-muted-foreground">Управляйте своими инвестициями в кинопроекты</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="border-primary/50 bg-gradient-to-br from-primary/10 to-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Всего инвестировано</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-3xl font-bold text-primary">
                  {(totalInvested / 1000000).toFixed(1)} млн ₽
                </p>
                <Icon name="TrendingUp" className="text-primary" size={32} />
              </div>
            </CardContent>
          </Card>

          <Card className="border-secondary/50 bg-gradient-to-br from-secondary/10 to-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Активных проектов</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-3xl font-bold text-secondary">{investorProjects.length}</p>
                <Icon name="Film" className="text-secondary" size={32} />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Средняя доля</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-3xl font-bold">
                  {(investorProjects.reduce((sum, p) => sum + p.share, 0) / investorProjects.length).toFixed(2)}%
                </p>
                <Icon name="PieChart" className="text-muted-foreground" size={32} />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Мои инвестиции</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {investorProjects.map((project) => (
              <Card key={project.id} className="border-border hover:border-primary transition-colors cursor-pointer" onClick={() => navigate(`/project/${project.id}`)}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription className="mt-1">Стадия: {project.stage}</CardDescription>
                    </div>
                    <Badge className="bg-primary text-primary-foreground">Активно</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Моя инвестиция</span>
                    <span className="font-bold text-lg">{(project.invested / 1000000).toFixed(1)} млн ₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Моя доля</span>
                    <span className="font-bold text-lg text-primary">{project.share}%</span>
                  </div>
                  <Separator />
                  <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold">Доступные проекты</h3>
            <Button variant="outline" onClick={() => navigate('/')}>
              <Icon name="Grid" className="mr-2" size={18} />
              Все проекты
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {availableProjects.map((project) => (
              <Card 
                key={project.id}
                className="overflow-hidden hover:scale-105 transition-all duration-300 border-border hover:border-primary cursor-pointer"
                onClick={() => navigate(`/project/${project.id}`)}
              >
                <div className="relative h-[300px] overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    {project.genre}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>Минимум: {(project.minInvestment / 1000000).toFixed(1)} млн ₽</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Собрано</span>
                      <span className="font-semibold">{Math.round((project.raised / project.target) * 100)}%</span>
                    </div>
                    <Progress value={(project.raised / project.target) * 100} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">
                      {(project.raised / 1000000).toFixed(0)} из {(project.target / 1000000).toFixed(0)} млн ₽
                    </p>
                  </div>
                  <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    Изучить проект
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
