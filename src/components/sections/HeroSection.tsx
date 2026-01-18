import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#0D1B2A] min-h-[90vh] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/files/IMG_0686.jpeg')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B263B]/90 via-[#0D1B2A]/95 to-[#0D1B2A]" />
      
      <div className="absolute inset-0" style={{
        backgroundImage: `repeating-linear-gradient(
          0deg,
          transparent,
          transparent 2px,
          rgba(100, 150, 180, 0.02) 2px,
          rgba(100, 150, 180, 0.02) 4px
        )`
      }} />

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-5xl">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#CD7F32] to-[#D4822B] px-4 py-2 mb-4 font-bold text-sm text-white uppercase tracking-wider">
              <div className="w-2 h-2 bg-white animate-pulse" />
              РАБОТАЕМ С 1990 ГОДА
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#E8EAED] via-[#C0C5CE] via-[#8B96A5] to-[#E8EAED] animate-shimmer leading-tight uppercase tracking-tight drop-shadow-[0_0_30px_rgba(192,197,206,0.6)]">
              ИНЖЕНЕРНЫЙ<br className="md:hidden" /> ЦЕНТР<br />ПУМОРИ
            </h1>
          </div>

          <div className="w-20 h-1 bg-gradient-to-r from-[#CD7F32] to-[#D4822B] mb-6" />

          <p className="text-xl md:text-2xl text-[#A8B2C0] font-medium mb-8 max-w-2xl leading-relaxed">
            Полный цикл решений для промышленных предприятий: от проектирования до круглосуточного сервиса
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#CD7F32] to-[#D4822B] hover:from-[#D4822B] hover:to-[#CD7F32] text-white font-black text-lg px-8 py-6 uppercase shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open('https://t.me/pumoriinvestbot', '_blank')}
            >
              Получить консультацию
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white hover:border-[#2563EB] font-bold text-lg px-8 py-6 uppercase transition-all duration-300"
              onClick={() => window.location.href = '/cases'}
            >
              Наши проекты
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-[#C0C5CE]/20">
            <div className="space-y-1">
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#C0C5CE] to-[#8B96A5]">12000+</div>
              <div className="text-sm text-[#8B96A5] uppercase tracking-wide">Реализованных проектов</div>
            </div>
            <div className="space-y-1">
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#C0C5CE] to-[#8B96A5]">35+</div>
              <div className="text-sm text-[#8B96A5] uppercase tracking-wide">Лет на рынке</div>
            </div>
            <div className="space-y-1">
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#C0C5CE] to-[#8B96A5]">3000+</div>
              <div className="text-sm text-[#8B96A5] uppercase tracking-wide">Позиций инструмента</div>
            </div>
            <div className="space-y-1">
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#C0C5CE] to-[#8B96A5]">24/7</div>
              <div className="text-sm text-[#8B96A5] uppercase tracking-wide">Экстренный сервис</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#CD7F32] to-transparent" />
    </section>
  );
};

export default HeroSection;