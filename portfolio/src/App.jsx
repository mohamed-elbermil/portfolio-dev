import './App.css'
import './styles/_base.css'
import './styles/_reset.css'
import Profile from './assets/pp2.jpg'
import Header from './components/Header/Header'
import Button from './components/Button/Button'

function App() {

  return (
    <>
  <Header></Header>
  <div className="a-propos">
    <div className="text-left">
      <h2>à propos</h2>
      <p>Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem 
        ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem 
        ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLoremipsum dolorLorem ipsum dolorLorem</p>
        <Button content="Voir +"></Button>
    </div>
      <div className="card">
        <img src={Profile} alt="" />
        <p>C'est moi :)</p>
      </div>
  </div>
    </>
  )
}

export default App
