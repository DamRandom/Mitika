import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Delivery from "./components/Delivery";
import Events from "./components/Events";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Menu />
      <Delivery />
      <Events />
      <About />
      <Gallery />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}
