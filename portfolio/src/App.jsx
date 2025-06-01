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
import TextCenter from "./components/TextCenter/TextCenter";
import Intro from "./components/Intro/Intro";

function App() {
  const longText = `PenguinWorld, avec sa vaste gamme de services dédiés aux professionnels et voyageurs, se place au cœur d’une réalité qui nous inspire profondément. Cette réalité est devenue notre ADN, notre mission première, portée par des équipes d’experts passionnés et engagés. Ensemble, nous œuvrons à diffuser un souffle de concorde et de paix à travers le monde. Un voyage réussi est celui où chaque maillon de la chaîne humaine répond présent, offrant au voyageur les clés pour accéder aux espaces de liberté et de découverte qu’il recherche. Unis par nos passions et nos rêves, nous avons à cœur de partager cette noble mission : rapprocher les peuples et contribuer à faire rayonner la paix, sur les chemins, les routes, les mers et les océans de notre merveilleuse Terre. N’hésitez jamais à partir loin, au-delà des mers, des frontières, des pays et des croyances. L’aventure et la rencontre sont toujours au rendez-vous.`;

  return (
    <>
      <Header></Header>
        <Section>
          <About></About>
        </Section>
      <Section>
        <Outil></Outil>
      </Section>
        <TextReveal text="loremezeeeeeeeeeeeeeeeeremezeeeeeeeeeeeeeeeeremezeeeeeeeeeeeeeeeeremezeeeeeeeeeeeeeeeeremezeeeeeeeeeeeeeeeeremezeeeeeeeeeeeeeeeeremezeeeeeeeeeeeeeeeeremezeeeeeeeeeeeeeeeeremezeeeeeeeeeeeeeeeeremezeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"></TextReveal>
        <Section>
          <Profil ></Profil>
        </Section>
          <Company></Company>
          <TextCenter></TextCenter>
          <Intro></Intro>
          <Veille></Veille>

    </>
  );
}

export default App;
