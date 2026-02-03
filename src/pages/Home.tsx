import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import TasksSection from '@/components/sections/TasksSection';
import CasesSection from '@/components/sections/CasesSection';
import ContactSection from '@/components/sections/ContactSection';
import SEO from '@/components/SEO';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Инженерный центр Пумори | 35 лет в металлообработке Екатеринбург"
        description="Полный цикл решений для металлообработки: инжиниринг, проектирование производств, поставка станков и инструмента, сервис 24/7. Опыт 35 лет. ☎ +7 (343) 287-30-58"
        keywords="металлообработка екатеринбург, инжиниринг производства, проектирование цехов, станки для металлообработки, инструмент для станков, оснастка, сервис станков, ремонт станков, пумори, узис, техтрейд"
        canonical="https://pumori360.online/"
      />
      <Header />
      <HeroSection />
      <TasksSection />
      <CasesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;