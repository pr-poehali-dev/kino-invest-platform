import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#1a4d7a] via-[#2563a8] to-[#3b82f6] min-h-[700px] flex items-center overflow-hidden">
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
            <div className="inline-block bg-gradient-to-r from-[#c29555] to-[#d4a574] px-6 py-2 text-sm font-bold text-[#1a4d7a] border-2 border-[#8b6f47]" 
                 style={{ clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }}>
              35 ЛЕТ ЭКСПЕРТИЗЫ
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              ОТ ИДЕИ ПРОИЗВОДСТВА ДО БЕЗОСТАНОВОЧНОЙ РАБОТЫ
            </h1>

            <p className="text-lg text-white/90 max-w-xl">
              Единственные в России, кто закрывает все задачи: от чертежа до ремонта
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2a5a8a] px-6 py-3 border-2 border-[#c29555] relative overflow-hidden"
                   style={{ clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' }}>
                <div className="text-3xl font-bold text-[#c29555]">2000+</div>
                <div className="text-sm text-white/90">проектов</div>
              </div>
              <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2a5a8a] px-6 py-3 border-2 border-[#c29555] relative overflow-hidden"
                   style={{ clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' }}>
                <div className="text-2xl font-bold text-[#c29555]">Собственное</div>
                <div className="text-sm text-white/90">производство</div>
              </div>
              <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2a5a8a] px-6 py-3 border-2 border-[#c29555] relative overflow-hidden"
                   style={{ clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' }}>
                <div className="text-3xl font-bold text-[#c29555]">24/7</div>
                <div className="text-sm text-white/90">Сервис</div>
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
              <div className="absolute inset-0 bg-gradient-to-br from-[#c29555]/20 to-transparent transform rotate-2" 
                   style={{ clipPath: 'polygon(5% 0%, 100% 5%, 95% 100%, 0% 95%)' }}></div>
              <div className="relative aspect-[4/3] bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border-2 border-[#c29555]/30 flex items-center justify-center"
                   style={{ clipPath: 'polygon(5% 0%, 100% 5%, 95% 100%, 0% 95%)' }}>
                <img 
                  src="https://cdn.poehali.dev/files/file_1765917159048.jpeg" 
                  alt="Производство" 
                  className="w-full h-full object-contain opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;