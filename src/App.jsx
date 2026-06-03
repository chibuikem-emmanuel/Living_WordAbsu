import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Statistics from "./components/Statistics";
import UpcomingPrograms from "./components/UpcomingPrograms";
import Giving from "./components/Giving";
import FoundationSchool from "./components/FoundationSchool";
import Sermons from "./components/Sermons";
import LiveService from "./components/LiveService";
import About from "./components/About";
import ServiceTimes from "./components/ServiceTimes";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsappButton";
import RegisterCTA from "./components/RegisterCTA";

export default function App() {
  return (
    <div className="bg-slate-950 text-white overflow-x-hidden relative">

      {/* Background Glow Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">

        <div
          className="
          absolute
          top-0
          left-0
          w-[500px]
          h-[500px]
          bg-yellow-500/10
          blur-[180px]
          rounded-full
          "
        />

        <div
          className="
          absolute
          bottom-0
          right-0
          w-[500px]
          h-[500px]
          bg-blue-500/10
          blur-[180px]
          rounded-full
          "
        />

      </div>

      <div className="relative z-10">

        <Navbar />

        <Hero />

        <Statistics />

        <UpcomingPrograms />

        <Giving />

        <FoundationSchool />

        <Sermons />

        <LiveService />

        <About />

        <ServiceTimes />

        <Gallery />

        <Testimonials />

        <Contact />

        <Footer />

        <WhatsAppButton />

      </div>

    </div>
  );
}
