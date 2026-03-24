import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Awards from "@/components/Awards";
import Program from "@/components/Program";
import Speakers from "@/components/Speakers";
import Partners from "@/components/Partners";
import Venue from "@/components/Venue";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <Features />
    <About />
    <Awards />
    <Program />
    <Speakers />
    <Partners />
    <Venue />
    <Footer />
  </div>
);

export default Index;
