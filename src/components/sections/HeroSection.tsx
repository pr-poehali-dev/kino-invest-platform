import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
