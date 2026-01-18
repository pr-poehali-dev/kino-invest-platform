import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://cdn.poehali.dev/files/IMG_0686.jpeg" 
                alt="Пумори" 
                className="h-12 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="text-sm text-primary-foreground/70">ИНЖЕНЕРНЫЙ ЦЕНТР</span>
                <span className="text-lg font-bold">ПУМОРИ</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              От идеи производства до безостановочной работы
            </p>
            <p className="text-xs text-primary-foreground/60 mb-4">
              © 1990-2026 Корпорация Пумори
            </p>
            <div className="flex items-center gap-2 mb-4">
              <div className="border border-primary-foreground/30 px-2 py-1 rounded text-xs">
                ISO 9001:2015
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="w-8 h-8 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Icon name="Youtube" size={16} />
              </button>
              <button className="w-8 h-8 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Icon name="MessageCircle" size={16} />
              </button>
              <button className="w-8 h-8 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Icon name="Send" size={16} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-4">РЕШЕНИЯ</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/engineering" className="hover:text-secondary transition-colors">
                    Инжиниринг
                  </Link>
                </li>
                <li>
                  <Link to="/tools" className="hover:text-secondary transition-colors">
                    Инструмент и оснастка
                  </Link>
                </li>
                <li>
                  <Link to="/service" className="hover:text-secondary transition-colors">
                    Сервис и обслуживание
                  </Link>
                </li>
                <li>
                  <Link to="/production" className="hover:text-secondary transition-colors">
                    Производство
                  </Link>
                </li>
              </ul>

              <h3 className="font-bold mt-6 mb-4">КОМПАНИЯ</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/about" className="hover:text-secondary transition-colors">
                    О нас
                  </Link>
                </li>
                <li>
                  <Link to="/cases" className="hover:text-secondary transition-colors">
                    Кейсы
                  </Link>
                </li>
                <li>
                  <Link to="/partners" className="hover:text-secondary transition-colors">
                    Партнёры
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">ПОДДЕРЖКА</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/contacts" className="hover:text-secondary transition-colors">
                    Контакты
                  </Link>
                </li>
                <li>
                  <a href="https://t.me/pumoriinvestbot" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                    Telegram-бот
                  </a>
                </li>
                <li>
                  <Link to="/contacts" className="hover:text-secondary transition-colors">
                    Отправить заявку
                  </Link>
                </li>
              </ul>

              <h3 className="font-bold mt-6 mb-4">СВЯЗЬ</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="tel:+73432873058" className="hover:text-secondary transition-colors">
                    Позвонить
                  </a>
                </li>
                <li>
                  <a href="mailto:info@pumori-engineering.ru" className="hover:text-secondary transition-colors">
                    Написать email
                  </a>
                </li>
                <li>
                  <a href="https://t.me/pumoriinvestbot" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                    Telegram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">КОНТАКТЫ</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="Phone" size={16} className="mt-1 flex-shrink-0" />
                <a href="tel:+73432873058" className="hover:text-secondary transition-colors">
                  +7 (343) 287-30-58
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Mail" size={16} className="mt-1 flex-shrink-0" />
                <a href="mailto:info@pumori-engineering.ru" className="hover:text-secondary transition-colors">
                  info@pumori-engineering.ru
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Send" size={16} className="mt-1 flex-shrink-0" />
                <a href="https://t.me/pumoriinvestbot" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                  @pumoriinvestbot
                </a>
              </li>
            </ul>

            <h3 className="font-bold mt-6 mb-4">АДРЕС</h3>
            <p className="text-sm text-primary-foreground/80">
              г. Екатеринбург<br />
              ул. Монтёрская, 3Д<br />
              (территория завода РТИ)
            </p>

            <h3 className="font-bold mt-6 mb-4">РЕЖИМ РАБОТЫ</h3>
            <p className="text-sm text-primary-foreground/80">
              Пн-Пт: 9:00-18:00<br />
              Сб-Вс: выходной<br />
              <span className="text-secondary font-semibold">Экстренный сервис: 24/7</span>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/60">
            <div className="flex gap-4">
              <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
                Политика конфиденциальности
              </Link>
              <span>|</span>
              <Link to="/terms" className="hover:text-primary-foreground transition-colors">
                Пользовательское соглашение
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;