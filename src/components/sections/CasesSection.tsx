import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const CasesSection = () => {
  return (
    <>
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <img 
            src="https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/28417a68-47a7-42f9-8456-ff6fa8958102.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
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

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <img 
            src="https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/55fefcc1-bc12-4c71-ac42-8b14fae2a73e.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
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
    </>
  );
};

export default CasesSection;