import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#0D1B2A] min-h-[90vh] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/files/file_1765917159048.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3) contrast(1.3)'
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
          <div className="flex items-center gap-8 mb-8">
            <img 
              src="https://cdn.poehali.dev/files/IMG_0679.jpeg" 
              alt="Пумори" 
              className="w-32 h-32 object-contain"
            />
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8B7355] to-[#A0826D] px-4 py-2 mb-4 font-bold text-sm text-white uppercase tracking-wider">
                <div className="w-2 h-2 bg-white animate-pulse" />
                РАБОТАЕМ С 1990 ГОДА
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#C0C5CE] via-[#A8B2C0] to-[#8B96A5] leading-[1.1] uppercase tracking-tight">
                ИНЖЕНЕРНЫЙ ЦЕНТР<br />ПУМОРИ
              </h1>
            </div>
          </div>

          <div className="w-20 h-1 bg-gradient-to-r from-[#8B7355] to-[#A0826D] mb-6" />

          <p className="text-xl md:text-2xl text-[#A8B2C0] font-medium mb-8 max-w-2xl leading-relaxed">
            Полный цикл решений для промышленных предприятий: от проектирования до круглосуточного сервиса
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button size="lg" className="bg-gradient-to-r from-[#8B7355] to-[#A0826D] hover:from-[#6D5940] hover:to-[#8B7355] text-white font-bold text-lg px-8 py-6 uppercase shadow-lg">
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-[#C0C5CE] text-[#C0C5CE] hover:bg-[#C0C5CE] hover:text-[#0D1B2A] font-bold text-lg px-8 py-6 uppercase">
              Наши проекты
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-[#C0C5CE]/20">
            <div className="space-y-1">
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#C0C5CE] to-[#8B96A5]">2000+</div>
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

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8B7355] to-transparent" />
    </section>
  );
};

export default HeroSection;