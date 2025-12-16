import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/IMG_0686.jpeg" 
              alt="Пумори" 
              className="h-12 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="text-xs md:text-sm text-muted-foreground leading-tight">ИНЖЕНЕРНЫЙ ЦЕНТР</span>
              <span className="text-lg md:text-xl font-bold text-primary leading-tight">ПУМОРИ</span>
            </div>
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Решения</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/engineering"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="flex items-center gap-2 text-sm font-medium leading-none">
                            <Icon name="Factory" size={16} />
                            Инжиниринг и проектирование
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            От чертежа до запуска производства
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/tools"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="flex items-center gap-2 text-sm font-medium leading-none">
                            <Icon name="Wrench" size={16} />
                            Инструмент и оснастка
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            3000+ позиций на складе
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/service"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="flex items-center gap-2 text-sm font-medium leading-none">
                            <Icon name="Settings" size={16} />
                            Сервис и обслуживание
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Экстренный ремонт 24/7
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/production"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="flex items-center gap-2 text-sm font-medium leading-none">
                            <Icon name="Factory" size={16} />
                            Производство и аутсорсинг
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Механообработка на заказ
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Каталог</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-2 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/catalog?category=equipment" className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          <div className="text-sm font-medium">Оборудование</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/catalog?category=tools" className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          <div className="text-sm font-medium">Режущий инструмент</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/catalog?category=pumori" className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          <div className="text-sm font-medium flex items-center gap-2">
                            Инструмент Пумори <span className="text-xs">🇷🇺</span>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/catalog?category=boring" className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          <div className="text-sm font-medium">Расточные системы</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/catalog?category=parts" className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          <div className="text-sm font-medium">Запчасти</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/cases" className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary">
                  Кейсы
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/about" className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary">
                  О нас
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/contacts" className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary">
                  Контакты
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+73432873058" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Icon name="Phone" size={18} />
              <span className="text-lg font-semibold">+7 (343) 287-30-58</span>
            </a>
            <Button
              size="icon"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              onClick={() => window.open('https://t.me/pumori_bot', '_blank')}
            >
              <Icon name="Send" size={18} />
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              Связаться
            </Button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-2 border-t border-border">
            <Link to="/engineering" className="block px-4 py-2 hover:bg-muted rounded-md">
              Инжиниринг
            </Link>
            <Link to="/tools" className="block px-4 py-2 hover:bg-muted rounded-md">
              Инструмент
            </Link>
            <Link to="/service" className="block px-4 py-2 hover:bg-muted rounded-md">
              Сервис
            </Link>
            <Link to="/production" className="block px-4 py-2 hover:bg-muted rounded-md">
              Производство
            </Link>
            <Link to="/catalog" className="block px-4 py-2 hover:bg-muted rounded-md">
              Каталог
            </Link>
            <Link to="/cases" className="block px-4 py-2 hover:bg-muted rounded-md">
              Кейсы
            </Link>
            <Link to="/about" className="block px-4 py-2 hover:bg-muted rounded-md">
              О нас
            </Link>
            <Link to="/contacts" className="block px-4 py-2 hover:bg-muted rounded-md">
              Контакты
            </Link>
            <div className="px-4 pt-4 space-y-2">
              <a href="tel:+73432873058" className="flex items-center gap-2 font-semibold">
                <Icon name="Phone" size={18} />
                +7 (343) 287-30-58
              </a>
              <Button className="w-full bg-primary">Связаться</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;