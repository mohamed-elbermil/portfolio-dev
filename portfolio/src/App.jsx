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

function App() {
  return (
    <>
      <Header></Header>
      <section className="a-propos">
        <div className="text-left">
          <h2>à propos</h2>
          <p>
            Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum
            dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum
            dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum
            dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLoremipsum
            dolorLorem ipsum dolorLorem
          </p>
          <Button content="Voir +"></Button>
        </div>
        <div className="card">
          <img src={Profile} alt="" />
          <p>C'est moi :)</p>
        </div>
      </section>
      <Outil></Outil>

      <section className="align-column">
        <div className="text-left">
          <h3>Projets</h3>
          <p className="description">Lorem ipsum dolor zegzerg</p>
        </div>
        <Slide></Slide>
      </section>
      <section>
        <TextReveal></TextReveal>
      </section>
      <Profil></Profil>
    </>
  );
}

export default App;
