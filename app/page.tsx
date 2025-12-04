import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import TeachersSection from "@/components/teachers-section"
import ToppersSection from "@/components/toppers-section"
import TripsSection from "@/components/trips-section"
import FeaturesSection from "@/components/features-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <TeachersSection />
      <ToppersSection />
      <TripsSection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
