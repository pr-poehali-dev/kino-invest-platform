import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="relative bg-[#0A1628] min-h-[90vh] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/files/file_1765917159048.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4) contrast(1.2)'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/80 via-[#0A1628]/90 to-[#0A1628]/95" />
      
      <div className="absolute inset-0" style={{
        backgroundImage: `repeating-linear-gradient(
          0deg,
          transparent,
          transparent 2px,
          rgba(59, 130, 246, 0.03) 2px,
          rgba(59, 130, 246, 0.03) 4px
        )`
      }} />

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-[#D97706] px-4 py-2 mb-6 font-bold text-sm text-white uppercase tracking-wider">
            <div className="w-2 h-2 bg-white animate-pulse" />
            РАБОТАЕМ С 1990 ГОДА
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 uppercase tracking-tight">
            ИНЖЕНЕРНЫЙ<br />
            ЦЕНТР <span className="text-[#FBBF24]">ПУМОРИ</span>
          </h1>

          <div className="w-20 h-1 bg-[#D97706] mb-6" />

          <p className="text-xl md:text-2xl text-gray-300 font-medium mb-8 max-w-2xl leading-relaxed">
            Полный цикл решений для промышленных предприятий: от проектирования до круглосуточного сервиса
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button size="lg" className="bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-lg px-8 py-6 uppercase">
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#0A1628] font-bold text-lg px-8 py-6 uppercase">
              Наши проекты
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/20">
            <div className="space-y-1">
              <div className="text-4xl font-black text-[#FBBF24]">2000+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Реализованных проектов</div>
            </div>
            <div className="space-y-1">
              <div className="text-4xl font-black text-[#FBBF24]">35+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Лет на рынке</div>
            </div>
            <div className="space-y-1">
              <div className="text-4xl font-black text-[#FBBF24]">3000+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Позиций инструмента</div>
            </div>
            <div className="space-y-1">
              <div className="text-4xl font-black text-[#FBBF24]">24/7</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Экстренный сервис</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D97706] to-transparent" />
    </section>
  );
};

export default HeroSection;
