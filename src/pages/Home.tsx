import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import TasksSection from '@/components/sections/TasksSection';
import CasesSection from '@/components/sections/CasesSection';
import ContactSection from '@/components/sections/ContactSection';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
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
