import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#3B82F6] min-h-[700px] flex items-center overflow-hidden">
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
            <div className="inline-block bg-gradient-to-r from-[#D97706] to-[#FBBF24] px-6 py-2 text-sm font-bold text-[#1E3A8A]" 
                 style={{ clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }}>
              35 ЛЕТ ЭКСПЕРТИЗЫ
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              ОТ ИДЕИ ПРОИЗВОДСТВА ДО БЕЗОСТАНОВОЧНОЙ РАБОТЫ
            </h1>

            <p className="text-lg text-white/90 max-w-xl">
              Единственные в России, кто закрывает все задачи: от чертежа до ремонта через 5 лет
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
                <div className="text-2xl font-bold">2000+</div>
                <div className="text-sm text-white/90">проектов</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
                <div className="text-lg font-bold">Собственное</div>
                <div className="text-sm text-white/90">производство</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-white/90">Сервис</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <div className="flex flex-wrap gap-4 opacity-60">
                <span className="text-xs font-mono">URALVAGONZAVOD</span>
                <span className="text-xs font-mono">VSMPO-AVISMA</span>
                <span className="text-xs font-mono">KAMAZ</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D97706]/20 to-transparent" 
                 style={{ clipPath: 'polygon(5% 0%, 100% 5%, 95% 100%, 0% 95%)' }}></div>
            <div className="relative aspect-[4/3] bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border-2 border-[#FBBF24]/30 flex items-center justify-center overflow-hidden"
                 style={{ clipPath: 'polygon(5% 0%, 100% 5%, 95% 100%, 0% 95%)' }}>
              <img 
                src="https://cdn.poehali.dev/files/file_1765917159048.jpeg" 
                alt="Производство" 
                className="w-full h-full object-cover"
                style={{ filter: 'hue-rotate(10deg) brightness(0.9)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/30 to-[#D97706]/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
