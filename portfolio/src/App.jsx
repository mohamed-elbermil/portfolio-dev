import "./App.css";
import "./styles/_base.css";
import "./styles/_reset.css";
import Profile from "./assets/pp2.jpg";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import Slide from "./components/Slide/Slide";
import TextReveal from "./components/TextReveal/TextReveal";
import Outil from "./components/Outils/Outil";
import Profil from "./components/Profil/Profil";
import Company from "./components/Company/Company";
import Veille from "./components/Veille/Veille";
import About from "./components/About/About";
import Section from "./components/Section/Section";

function App() {
  return (
    <>
      <Header></Header>
        <Section>
          <About></About>
        </Section>
      <Section>
        <Outil></Outil>
      </Section>

      <section className="align-column">
        <div className="text-left">
          <h3>Projets</h3>
          <p className="description">Lorem ipsum dolor zegzerg</p>
        </div>
        <Slide></Slide>
      </section>
        <TextReveal></TextReveal>
        <Section>
          <Profil ></Profil>
        </Section>
        <Section>
          <Company></Company>
        </Section>
        <Section>
          <Veille></Veille>
        </Section>

    </>
  );
}

export default App;
