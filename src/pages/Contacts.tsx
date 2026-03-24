import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import SEO from '@/components/SEO';

const SEND_CONTACT_URL = 'https://functions.poehali.dev/2f79de75-180a-47a0-9030-04a1278ac281';

const Contacts = () => {
  const [form, setForm] = useState({ name: '', phone: '', company: '', email: '', message: '' });
  const [consent, setConsent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setError('Пожалуйста, заполните имя и телефон');
      return;
    }
    setSending(true);
    setError('');
    try {
      const res = await fetch(SEND_CONTACT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
      } else {
        setError('Ошибка отправки. Позвоните: +7 (343) 287-08-08');
      }
    } catch {
      setError('Ошибка сети. Позвоните: +7 (343) 287-08-08');
    } finally {
      setSending(false);
    }
  };
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Контакты Пумори | Звоните: +7 (343) 287-08-08 круглосуточно"
        description="📞 Нужна консультация? Звоните прямо сейчас: +7 (343) 287-08-08. Офис в Екатеринбурге. Telegram-бот для быстрой связи. ✅ Ответим за 5 минут ✅ Бесплатный расчёт проекта"
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
                        <a href="tel:+73432870808" className="text-xl font-bold text-[#3B82F6] hover:text-[#1E3A8A] transition-colors block mb-2">
                          +7 (343) 287-08-08
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
                        <a href="mailto:pii@pumori.ru" className="text-lg font-bold text-[#3B82F6] hover:text-[#1E3A8A] transition-colors break-all">
                          pii@pumori.ru
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
                        <p className="text-lg font-bold text-gray-700 mb-2">@pumori360_bot</p>
                        <Button
                          className="bg-gradient-to-r from-[#CD7F32] to-[#D4822B] hover:from-[#D4822B] hover:to-[#CD7F32] text-white font-bold"
                          onClick={() => window.open('https://t.me/pumori360_bot', '_blank')}
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

              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <Icon name="CheckCircle" size={40} className="text-green-500" />
                  </div>
                  <p className="text-2xl font-black text-[#1B263B]">Заявка отправлена!</p>
                  <p className="text-gray-500">Мы перезвоним вам в течение 15 минут в рабочее время</p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      name="name"
                      placeholder="Имя *"
                      value={form.name}
                      onChange={handleChange}
                      className="h-12"
                      required
                    />
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="Телефон *"
                      value={form.phone}
                      onChange={handleChange}
                      className="h-12"
                      required
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      name="company"
                      placeholder="Компания"
                      value={form.company}
                      onChange={handleChange}
                      className="h-12"
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={handleChange}
                      className="h-12"
                    />
                  </div>
                  
                  <Textarea
                    name="message"
                    placeholder="Какую задачу нужно решить?"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                  />
                  
                  <div className="flex items-start gap-3 py-2">
                    <Checkbox
                      id="consent-contacts"
                      checked={consent}
                      onCheckedChange={(v) => setConsent(!!v)}
                    />
                    <label htmlFor="consent-contacts" className="text-sm text-gray-600 cursor-pointer leading-relaxed">
                      Согласен на обработку персональных данных в соответствии с{' '}
                      <Link to="/privacy" className="text-[#3B82F6] hover:underline">
                        политикой конфиденциальности
                      </Link>
                    </label>
                  </div>

                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  
                  <Button
                    type="submit"
                    size="lg"
                    disabled={sending || !consent}
                    className="w-full bg-gradient-to-r from-[#CD7F32] to-[#D4822B] hover:from-[#D4822B] hover:to-[#CD7F32] text-white font-black text-lg py-6 uppercase disabled:opacity-50"
                  >
                    {sending ? 'Отправляем...' : 'Отправить заявку'}
                  </Button>
                </form>
              )}
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
                  src="https://yandex.ru/map-widget/v1/?ll=60.574320%2C56.894960&z=16&pt=60.574320%2C56.894960%2Cpm2rdm~60.574320%2C56.894960%2Cpm2rdl&text=%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3%2C%20%D1%83%D0%BB.%20%D0%9C%D0%BE%D0%BD%D1%82%D1%91%D1%80%D1%81%D0%BA%D0%B0%D1%8F%2C%203"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="w-full h-full"
                  title="Карта проезда — Екатеринбург, ул. Монтёрская, 3"
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