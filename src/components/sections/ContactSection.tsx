import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

const ContactSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#0D1B2A] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4A90A4] via-[#8B7355] to-[#4A90A4]" />
      
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/6b202b67-bb5a-4ba0-b9ae-c92dd2119482.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B2A]/90 via-[#1B263B]/95 to-[#0D1B2A]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block text-sm font-bold text-[#A8B2C0] uppercase tracking-wider mb-4">
            СВЯЖИТЕСЬ С НАМИ
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#C0C5CE] mb-4 uppercase">
            Получите консультацию эксперта
          </h2>
          <div className="w-20 h-1 bg-[#8B7355] mx-auto mb-6" />
          <p className="text-xl text-[#8B96A5] max-w-3xl mx-auto">
            Ответим сразу. Подберём решение для вашей задачи за 2 часа.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm border-2 border-[#4A90A4] p-6 relative hover:bg-white/10 hover:shadow-[0_0_30px_rgba(74,144,164,0.4)] transition-all">
              <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-[#4A90A4] group-hover:border-[#6BC1E0]" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-[#4A90A4] group-hover:border-[#6BC1E0]" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2C5F75] to-[#4A90A4] flex items-center justify-center">
                  <Icon name="Phone" size={24} />
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Телефон</div>
                  <div className="text-sm font-bold">Звоните сейчас</div>
                </div>
              </div>
              
              <a href="tel:+73432873058" className="text-2xl font-black hover:text-[#A8B2C0] transition-colors block mb-2">
                +7 (343) 287-30-58
              </a>
              <div className="text-sm text-gray-400 mb-4">Пн-Пт: 9:00-18:00</div>
              <Button 
                className="w-full bg-gradient-to-r from-[#CD7F32] to-[#D4822B] hover:from-[#D4822B] hover:to-[#CD7F32] text-white font-black uppercase shadow-lg hover:shadow-xl transition-all"
                onClick={() => window.location.href = 'tel:+73432873058'}
              >
                Позвонить
              </Button>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border-2 border-[#CD7F32] p-6 relative hover:bg-white/10 hover:shadow-xl transition-all">
              <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-[#CD7F32]" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-[#CD7F32]" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#CD7F32] to-[#D4822B] flex items-center justify-center">
                  <Icon name="Send" size={24} />
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Telegram</div>
                  <div className="text-sm font-bold">Ответ за 5 минут</div>
                </div>
              </div>
              
              <div className="text-xl font-black mb-4">@pumori360_bot</div>
              <Button
                className="w-full bg-white text-[#1B263B] hover:bg-gray-200 font-bold uppercase"
                onClick={() => window.open('https://t.me/pumori360_bot', '_blank')}
              >
                Написать в Telegram
              </Button>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border-2 border-[#4A90A4] p-6 relative hover:bg-white/10 hover:shadow-[0_0_30px_rgba(74,144,164,0.4)] transition-all">
              <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-[#4A90A4] group-hover:border-[#6BC1E0]" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-[#4A90A4] group-hover:border-[#6BC1E0]" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2C5F75] to-[#4A90A4] flex items-center justify-center">
                  <Icon name="Mail" size={24} />
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Email</div>
                  <div className="text-sm font-bold">Ответ в течение дня</div>
                </div>
              </div>
              
              <a href="mailto:info@pumori-engineering.ru" className="text-lg font-bold hover:text-[#A8B2C0] transition-colors break-all">
                info@pumori-engineering.ru
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white/5 backdrop-blur-sm border-2 border-white/20 p-8 relative">
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#CD7F32]" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#CD7F32]" />
            
            <h3 className="text-3xl font-black mb-6 uppercase">Оставьте заявку</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input
                    placeholder="Имя *"
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/50 h-12 font-medium"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Телефон *"
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/50 h-12 font-medium"
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input
                    placeholder="Компания"
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/50 h-12 font-medium"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/50 h-12 font-medium"
                  />
                </div>
              </div>
              
              <div>
                <Textarea
                  placeholder="Какую задачу нужно решить?"
                  rows={5}
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/50 font-medium"
                />
              </div>
              
              <div className="flex items-start gap-3 py-2">
                <Checkbox id="consent" className="mt-1 border-white/30 data-[state=checked]:bg-[#8B7355] data-[state=checked]:border-[#8B7355]" />
                <label htmlFor="consent" className="text-sm text-white/70 cursor-pointer leading-relaxed">
                  Согласен на обработку персональных данных
                </label>
              </div>
              
              <Button size="lg" className="w-full bg-gradient-to-r from-[#CD7F32] to-[#D4822B] hover:from-[#D4822B] hover:to-[#CD7F32] text-white font-black text-lg py-6 uppercase shadow-lg hover:shadow-xl transition-all duration-300">
                Отправить заявку
              </Button>
              
              <p className="text-sm text-white/60 text-center leading-relaxed">
                Мы перезвоним в течение 15 минут в рабочее время
              </p>
            </form>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8B7355] to-transparent" />
    </section>
  );
};

export default ContactSection;