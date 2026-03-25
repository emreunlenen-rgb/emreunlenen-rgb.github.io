import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import GallerySection from '../sections/GallerySection';
import FeaturedVideoSection from '../sections/FeaturedVideoSection';
import VideosSection from '../sections/VideosSection';
import OrchestraSeatingSection from '../sections/OrchestraSeatingSection';
import FaqSection from '../sections/FaqSection';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <FeaturedVideoSection />
        <VideosSection />
        <OrchestraSeatingSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
