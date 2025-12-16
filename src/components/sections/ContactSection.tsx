import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]">
        <img 
          src="https://cdn.poehali.dev/projects/d9de8b0c-3e86-444c-bcc7-a44c2047fb60/files/631b940d-0890-4ab1-b942-fe9d4decfecd.jpg" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">ПОЛУЧИТЕ КОНСУЛЬТАЦИЮ ЭКСПЕРТА</h2>
          <p className="text-white/90 text-lg">
            Ответим сразу. Подберём решение для вашей задачи за 2 часа.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <Icon name="Phone" size={24} className="mb-3" />
              <div className="text-sm text-white/70 mb-1">Единый телефон</div>
              <a href="tel:+73432873058" className="text-xl font-bold hover:text-secondary transition-colors">
                +7 (343) 287-30-58
              </a>
              <div className="text-sm text-white/70 mt-2">Пн-Пт: 9:00-18:00</div>
              <Button className="w-full mt-4 bg-white text-primary hover:bg-white/90">
                Позвонить сейчас
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <Icon name="Send" size={24} className="mb-3" />
              <div className="text-sm text-white/70 mb-1">Telegram-бот</div>
              <div className="text-xl font-bold">@pumori_bot</div>
              <div className="text-sm text-white/70 mt-2">Ответ за 5 минут</div>
              <Button
                className="w-full mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/90"
                onClick={() => window.open('https://t.me/pumori_bot', '_blank')}
              >
                Написать в Telegram
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <Icon name="Mail" size={24} className="mb-3" />
              <div className="text-sm text-white/70 mb-1">Email</div>
              <a href="mailto:info@pumori-engineering.ru" className="text-lg font-bold hover:text-secondary transition-colors break-all">
                info@pumori-engineering.ru
              </a>
              <div className="text-sm text-white/70 mt-2">Ответ в течение дня</div>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Или оставьте заявку</h3>
            <form className="space-y-4">
              <div>
                <Input
                  placeholder="Имя *"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  required
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Телефон *"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  required
                />
              </div>
              <div>
                <Input
                  placeholder="Компания"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Какую задачу нужно решить?"
                  rows={4}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
              <div className="flex items-start gap-2">
                <Checkbox id="consent" className="mt-1 border-white/30 data-[state=checked]:bg-secondary data-[state=checked]:border-secondary" />
                <label htmlFor="consent" className="text-sm text-white/70 cursor-pointer">
                  Согласен на обработку персональных данных
                </label>
              </div>
              <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                ОТПРАВИТЬ ЗАЯВКУ
              </Button>
              <p className="text-sm text-white/60 text-center">
                Мы перезвоним в течение 15 минут в рабочее время
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;