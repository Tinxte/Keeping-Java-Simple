import { useState } from 'react'
import './App.css'
import FlashCard from './components/Flashcard'

function App() {

  //TODO move random number generation here and pass as prop into Flashcard.jsx

  return (
    <>
     
      <h1>Keeping <font color= "#ED8B00">Java</font> Simple</h1>

<div>
    <FlashCard />
</div>

    </>
  )
}

export default App
