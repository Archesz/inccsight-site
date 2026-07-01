import { useEffect } from "react";
import "./styles/global.scss"
import 'aos/dist/aos.css';

import AOS from 'aos';
import { LanguageProvider } from './i18n/LanguageContext';
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './Pages/About'
import Pipeline from './Pages/Pipeline'
import Features from './Pages/Features'
import Download from './Pages/Download'
import Footer from './components/Footer/Footer'
import Papers from "./components/Papers/Papers";



export default function App() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);


  return (
    <LanguageProvider>
      <div className="app">
        <Header />
        <Hero />
        <About />
        <Pipeline />
        <Features />
        <Papers />
        <Download />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
