import './globals.css';
import NavBar from '@/src/components/NavBar';
import HeroSection from '@/src/components/HeroSection';
import AboutSection from '@/src/components/AboutSection';
import ProjectsSection from '@/src/components/ProjectsSection';
import PromosSection from '@/src/components/PromosSection';
import ContactForm from '@/src/components/ContactForm';
import ContactSection from '@/src/components/ContactSection';
import Footer from '@/src/components/Footer';
import StickyBar from '@/src/components/StickyBar';
import GTMActionsBinder from '@/src/components/GTMActionsBinder';

export default function Page(){
  return (
    <main>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <PromosSection />
      <ContactForm />
      <ContactSection />
      <Footer />
      <StickyBar />
      <GTMActionsBinder />
    </main>
  );
}
