import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Process from "./components/process/Process";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import css from "./styles/app.module.scss";
const App = () => {
  return (
    <div className={`${css.container}`}>
      <Header />
      <Hero />
      <Services />
      <Process />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
