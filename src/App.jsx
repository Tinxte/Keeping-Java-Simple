import data from "./components/trivia.json"
import './App.css'
import FlashCard from './components/Flashcard'

function App() {

  let trivia = data.trivia;

  //Random index function
  function randomSelection() {
    let randomIndex = Math.floor(Math.random()*trivia.length);
        return randomIndex
    }

    let randomIndex = randomSelection();

  return (
    <>
     
      <h1>Keeping <font color= "#ED8B00">Java</font> Simple</h1>

<div id="flashCardComponent">
    <FlashCard 
    number={randomIndex} 
    data={trivia}
    />
</div>

    </>
  )
}

export default App
