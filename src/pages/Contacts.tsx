import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import SEO from '@/components/SEO';

const Contacts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Контакты Пумори | Звоните: +7 (343) 287-30-58 круглосуточно"
        description="📞 Нужна консультация? Звоните прямо сейчас: +7 (343) 287-30-58 (продажи) или +7 (343) 287-01-10 (сервис 24/7). Офис в Екатеринбурге. Telegram-бот для быстрой связи. ✅ Ответим за 5 минут ✅ Бесплатный расчёт проекта"
        keywords="пумори телефон екатеринбург, пумори контакты круглосуточно, связаться с пумори, офис пумори адрес, консультация инженер металлообработка, экстренная связь ремонт станков"
        canonical="https://pumori360.online/contacts"
      />
      <Header />

      <div className="bg-gray-50 py-3 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-primary">Главная</Link>
            <Icon name="ChevronRight" size={16} />
            <span className="text-primary font-medium">Контакты</span>
          </div>
        </div>
      </div>

      <section className="py-20 bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#0D1B2A] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block text-sm font-bold text-[#CD7F32] uppercase tracking-wider mb-4">
              СВЯЖИТЕСЬ С НАМИ
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#E8EAED] via-[#C0C5CE] to-[#8B96A5] animate-shimmer">
              Контакты
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-[#CD7F32] to-[#D4822B] mb-6" />
            <p className="text-xl text-[#A8B2C0] mb-8">
              Ответим сразу. Подберём решение для вашей задачи за 2 часа.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-black text-[#1B263B] mb-8 uppercase">
                  Офис и производство
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-gray-50 to-white border-l-4 border-[#3B82F6] p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-black text-[#1B263B] mb-2 uppercase">Адрес</h3>
                        <p className="text-gray-600">
                          г. Екатеринбург<br />
                          ул. Монтёрская, 3Д<br />
                          (территория завода РТИ)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-white border-l-4 border-[#CD7F32] p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#CD7F32] to-[#D4822B] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-black text-[#1B263B] mb-2 uppercase">Телефон</h3>
                        <a href="tel:+73432873058" className="text-xl font-bold text-[#3B82F6] hover:text-[#1E3A8A] transition-colors block mb-2">
                          +7 (343) 287-30-58
                        </a>
                        <p className="text-sm text-gray-500">Пн-Пт: 9:00-18:00</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-white border-l-4 border-[#3B82F6] p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-black text-[#1B263B] mb-2 uppercase">Email</h3>
                        <a href="mailto:info@pumori-engineering.ru" className="text-lg font-bold text-[#3B82F6] hover:text-[#1E3A8A] transition-colors break-all">
                          info@pumori-engineering.ru
                        </a>
                        <p className="text-sm text-gray-500 mt-2">Ответ в течение дня</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-white border-l-4 border-[#CD7F32] p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#CD7F32] to-[#D4822B] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Send" size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-black text-[#1B263B] mb-2 uppercase">Telegram</h3>
                        <p className="text-lg font-bold text-gray-700 mb-2">@pumoriinvestbot</p>
                        <Button
                          className="bg-gradient-to-r from-[#CD7F32] to-[#D4822B] hover:from-[#D4822B] hover:to-[#CD7F32] text-white font-bold"
                          onClick={() => window.open('https://t.me/pumoriinvestbot', '_blank')}
                        >
                          Написать в Telegram
                        </Button>
                        <p className="text-sm text-gray-500 mt-2">Ответ за 5 минут</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#0D1B2A] text-white p-6 rounded-lg">
                <h3 className="text-xl font-black mb-4 uppercase">Режим работы</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Понедельник - Пятница:</span>
                    <span className="font-bold">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Суббота - Воскресенье:</span>
                    <span className="font-bold">Выходной</span>
                  </div>
                  <div className="border-t border-white/20 pt-3 mt-3">
                    <div className="flex items-center gap-2 text-[#CD7F32] font-bold">
                      <Icon name="Clock" size={16} />
                      <span>Экстренный сервис: 24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 p-8">
              <h2 className="text-3xl font-black text-[#1B263B] mb-6 uppercase">
                Оставьте заявку
              </h2>
              <p className="text-gray-600 mb-6">
                Заполните форму, и мы свяжемся с вами в течение 15 минут в рабочее время
              </p>
              
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="Имя *"
                      className="h-12"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Телефон *"
                      className="h-12"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="Компания"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      className="h-12"
                    />
                  </div>
                </div>
                
                <div>
                  <Textarea
                    placeholder="Какую задачу нужно решить?"
                    rows={5}
                  />
                </div>
                
                <div className="flex items-start gap-3 py-2">
                  <Checkbox id="consent" />
                  <label htmlFor="consent" className="text-sm text-gray-600 cursor-pointer leading-relaxed">
                    Согласен на обработку персональных данных в соответствии с{' '}
                    <Link to="/privacy" className="text-[#3B82F6] hover:underline">
                      политикой конфиденциальности
                    </Link>
                  </label>
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-[#CD7F32] to-[#D4822B] hover:from-[#D4822B] hover:to-[#CD7F32] text-white font-black text-lg py-6 uppercase"
                  onClick={() => window.open('https://t.me/pumoriinvestbot', '_blank')}
                >
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-black text-[#1B263B] mb-8 uppercase text-center">
              Как до нас добраться
            </h2>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video w-full">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A5c8e9d8f8b8c8d8f8b8c8d8f8b8c8d8f&amp;source=constructor"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="w-full h-full"
                  title="Карта проезда"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;