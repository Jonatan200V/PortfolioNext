import About from '@/components/About/About';
import BottomBurger from '@/components/BottomBurger/BottomBurger';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Projects from '@/components/Projects/Projects';
import Techs from '@/components/Techs/Techs';
import { Burger } from '@/components/icons/Burger';

export default function Home() {
  return (
    <main>
      <Header />
      <BottomBurger />
      <div className="main">
        <About />
        <Techs />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
