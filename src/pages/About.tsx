import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <section className="relative bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#0D1B2A] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(74, 144, 164, 0.1) 10px, rgba(74, 144, 164, 0.1) 20px)`
        }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#CD7F32] to-[#D4822B] px-4 py-2 mb-6 font-bold text-sm text-white uppercase tracking-wider">
              <div className="w-2 h-2 bg-white animate-pulse" />
              С 1990 ГОДА
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase">
              О КОРПОРАЦИИ ПУМОРИ
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-[#CD7F32] to-[#D4822B] mb-6" />
            <p className="text-xl text-[#A8B2C0] leading-relaxed">
              Более 30 лет опыта в области технологий металлообработки. Лидер российского рынка инженерных решений для промышленности.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-gradient-to-br from-[#0D1B2A] to-[#1B263B] text-white">
              <div className="text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#CD7F32] to-[#D4822B]">
                30+
              </div>
              <div className="text-sm uppercase tracking-wide">Лет на рынке</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-[#0D1B2A] to-[#1B263B] text-white">
              <div className="text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#4A90A4] to-[#6BC1E0]">
                12000+
              </div>
              <div className="text-sm uppercase tracking-wide">Проектов реализовано</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-[#0D1B2A] to-[#1B263B] text-white">
              <div className="text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#CD7F32] to-[#D4822B]">
                3000+
              </div>
              <div className="text-sm uppercase tracking-wide">Позиций инструмента</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-[#0D1B2A] to-[#1B263B] text-white">
              <div className="text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#4A90A4] to-[#6BC1E0]">
                24/7
              </div>
              <div className="text-sm uppercase tracking-wide">Сервисная поддержка</div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase text-[#1B263B]">
              Направления деятельности
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <div className="border-l-4 border-[#CD7F32] pl-6 py-4 bg-[#0D1B2A]/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#CD7F32] to-[#D4822B] flex items-center justify-center">
                    <Icon name="Factory" size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-black uppercase text-[#1B263B]">Инжиниринг</h3>
                </div>
                <ul className="space-y-2 text-[#4A5568]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#CD7F32] mt-1">▸</span>
                    Проектный инжиниринг
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#CD7F32] mt-1">▸</span>
                    Технологические решения
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#CD7F32] mt-1">▸</span>
                    Цифровизация производства
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#CD7F32] mt-1">▸</span>
                    Автоматизация и роботизация
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-[#4A90A4] pl-6 py-4 bg-[#0D1B2A]/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#4A90A4] to-[#6BC1E0] flex items-center justify-center">
                    <Icon name="Settings" size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-black uppercase text-[#1B263B]">Оборудование</h3>
                </div>
                <ul className="space-y-2 text-[#4A5568]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A90A4] mt-1">▸</span>
                    Оборудование для металлообработки
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A90A4] mt-1">▸</span>
                    Заготовительное производство
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A90A4] mt-1">▸</span>
                    Сервисное обслуживание
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A90A4] mt-1">▸</span>
                    Ремонт станков
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-[#8B7355] pl-6 py-4 bg-[#0D1B2A]/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#8B7355] to-[#A89080] flex items-center justify-center">
                    <Icon name="Wrench" size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-black uppercase text-[#1B263B]">Инструмент</h3>
                </div>
                <ul className="space-y-2 text-[#4A5568]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B7355] mt-1">▸</span>
                    Металлорежущий инструмент
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B7355] mt-1">▸</span>
                    Вспомогательный инструмент
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B7355] mt-1">▸</span>
                    Системы инструментообеспечения
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-[#FF6B00] pl-6 py-4 bg-[#0D1B2A]/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B00] to-[#FF8534] flex items-center justify-center">
                    <Icon name="Cog" size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-black uppercase text-[#1B263B]">Производство</h3>
                </div>
                <ul className="space-y-2 text-[#4A5568]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF6B00] mt-1">▸</span>
                    Аутсорсинг металлообработки
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF6B00] mt-1">▸</span>
                    Изготовление сложных деталей
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF6B00] mt-1">▸</span>
                    Кооперация с производителями
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0D1B2A] to-[#1B263B] p-8 md:p-12 text-white mb-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#CD7F32] opacity-10 rounded-full -mr-16 -mt-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#4A90A4] opacity-10 rounded-full -ml-12 -mb-12" />
              
              <h2 className="text-3xl font-black mb-6 uppercase relative z-10">
                Собственное производство
              </h2>
              <div className="grid md:grid-cols-3 gap-6 relative z-10">
                <div className="bg-white/5 backdrop-blur-sm border border-white/20 p-6">
                  <div className="text-4xl mb-3">🔧</div>
                  <h3 className="font-bold mb-2 uppercase text-sm">Инструмент PUMORI</h3>
                  <p className="text-sm text-[#A8B2C0]">Вспомогательный инструмент собственного производства</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/20 p-6">
                  <div className="text-4xl mb-3">⚙️</div>
                  <h3 className="font-bold mb-2 uppercase text-sm">Станки с ЧПУ</h3>
                  <p className="text-sm text-[#A8B2C0]">Токарные обрабатывающие центры с ЧПУ</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/20 p-6">
                  <div className="text-4xl mb-3">⚡</div>
                  <h3 className="font-bold mb-2 uppercase text-sm">Турбинные лопатки</h3>
                  <p className="text-sm text-[#A8B2C0]">Лопатки паровых и газовых турбин</p>
                </div>
              </div>
            </div>

            <div className="bg-[#F7FAFC] p-8 md:p-12 border-l-4 border-[#CD7F32]">
              <h2 className="text-3xl font-black mb-6 uppercase text-[#1B263B]">
                География присутствия
              </h2>
              <p className="text-lg text-[#4A5568] leading-relaxed mb-6">
                Предприятия и представительства корпорации успешно функционируют во всех основных индустриальных регионах Российской Федерации.
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-2 bg-white px-4 py-2 border border-[#E2E8F0]">
                  <Icon name="MapPin" size={20} className="text-[#CD7F32]" />
                  <span className="font-semibold text-[#1B263B]">Екатеринбург</span>
                  <span className="text-sm text-[#718096]">(головной офис)</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 border border-[#E2E8F0]">
                  <Icon name="Building2" size={20} className="text-[#4A90A4]" />
                  <span className="text-sm text-[#4A5568]">Представительства по РФ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#0D1B2A] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase">
              Руководство
            </h2>
            <div className="bg-white/5 backdrop-blur-sm border-2 border-white/20 p-8 md:p-12">
              <div className="w-24 h-24 bg-gradient-to-br from-[#CD7F32] to-[#D4822B] rounded-full mx-auto mb-6 flex items-center justify-center">
                <Icon name="User" size={48} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Баландин Александр Иванович</h3>
              <div className="text-[#CD7F32] font-semibold mb-4 uppercase text-sm tracking-wider">
                Генеральный директор
              </div>
              <p className="text-[#A8B2C0] leading-relaxed">
                Более 30 лет опыта работы в машиностроении. Под его руководством корпорация «Пумори» стала одним из ведущих поставщиков технологических решений для металлообработки в России.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
