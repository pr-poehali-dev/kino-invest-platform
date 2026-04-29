import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import TasksSection from '@/components/sections/TasksSection';
import CasesSection from '@/components/sections/CasesSection';
import ContactSection from '@/components/sections/ContactSection';
import SEO from '@/components/SEO';
import ServiceSchema from '@/components/ServiceSchema';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Инженерный центр Пумори | 35 лет в металлообработке Екатеринбург"
        description="🏭 Запуск производства под ключ за 6-12 месяцев. Инжиниринг, станки ЧПУ, инструмент 3000+ позиций, сервис 24/7. ✅ Собственное КБ ✅ 1200+ проектов ✅ Гарантия результата. Бесплатный аудит → Звоните: +7 (343) 287-08-08"
        keywords="металлообработка екатеринбург, инжиниринг производства, проектирование цехов, станки для металлообработки, инструмент для станков, оснастка, сервис станков, ремонт станков, пумори, узис, техтрейд"
        canonical="https://pumori360.online/"
      />
      <ServiceSchema services={[
        {
          name: 'Инжиниринг и проектирование производств',
          description: 'Полный цикл создания производства: от технического аудита до запуска под ключ за 6-12 месяцев',
          url: 'https://pumori360.online/engineering',
          provider: 'Инженерный центр Пумори',
          areaServed: 'Россия',
          serviceType: 'Инжиниринг производства'
        },
        {
          name: 'Инструмент и оснастка для станков с ЧПУ',
          description: '3000+ позиций режущего инструмента и оснастки на складе. Собственное производство УЗИС',
          url: 'https://pumori360.online/tools',
          provider: 'Инженерный центр Пумори',
          areaServed: 'Россия',
          serviceType: 'Поставка инструмента'
        },
        {
          name: 'Сервис и ремонт станков 24/7',
          description: 'Экстренный ремонт станков с ЧПУ, выезд за 4 часа, запчасти в наличии',
          url: 'https://pumori360.online/service',
          provider: 'Инженерный центр Пумори',
          areaServed: 'Россия',
          serviceType: 'Ремонт и обслуживание оборудования'
        },
        {
          name: 'Механообработка на заказ',
          description: 'Токарные и фрезерные работы на ЧПУ. Точность до 0.005 мм, серии от 1 до 10000 шт',
          url: 'https://pumori360.online/production',
          provider: 'Инженерный центр Пумори',
          areaServed: 'Россия',
          serviceType: 'Производственный аутсорсинг'
        }
      ]} />
      <Header />
      <HeroSection />
      <LocalBusinessSchema />
      <TasksSection />
      <CasesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;