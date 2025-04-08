import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import CalltoAction from "./components/CalltoAction";
import ContactUs from "./components/ContactUs";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Resources from "./components/Resources";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import LatestNews from "./components/LatestNews";
import HowitWorks from "./components/HowitWorks";
import Blog from "./components/Blog";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <CalltoAction />
      <ContactUs />
      <Clients />
      <Footer />
      <Resources />
      <Services />
      <Testimonials />
      <LatestNews />
      <HowitWorks />
      <Blog />
    </>
  );
}
