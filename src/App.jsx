import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import './App.css';
import Companies from './components/Companies/Companies';
import Announce from './components/Announces/Announce';
import OurProjects from './components/OurProjects/OurProjects';
import Contact from "./components/Contact/Contact.jsx";
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      {/* Hero / Accueil */}
      <section id="home">
        <div className="white-gradient"></div>
        <Header />
        <Hero />
      </section>

      {/* Companies */}
      <section id="companies">
        <Companies />
      </section>

      {/* Our Projects */}
      <section id="projects">
        <OurProjects />
      </section>

      {/* Announcements */}
      <section id="annonces">
        <Announce />
      </section>

      {/* Contact */}
      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
