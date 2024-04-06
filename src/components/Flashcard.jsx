import data from "./trivia.json";
import { useState } from "react";

export default function FlashCard() {

 

//TODO Write handleClick function, randomize trivia index and cycle through index onclick

//Random index function
    function randomSelection() {
        let randomIndex = Math.floor(Math.random()*trivia.length);
            return randomIndex
        }


//Pull data from JSON and select random starting index
let trivia = data.trivia;
let startingCardIndex = randomSelection();

//TODO fix scope issues with randomization pulling wrong answers
let currentCardIndex = startingCardIndex;
let currentCardContent = trivia[currentCardIndex];
// let currentCardState = "question";

const [flashCardState, setFlashCardState] = useState({
    currentCardState: "question",
    currentStateIndex: currentCardIndex
});


function handleCardClick() {
    if (flashCardState.currentCardState = "question") {
        setFlashCardState({currentCardState: "answer",
    currentStateIndex: flashCardState.currentStateIndex});
    }
//TODO fix below statement so currentCardState can be reverted to show Question on second click
    // else if (flashCardState.currentCardState = "answer") {
    //         setFlashCardState({currentCardState: "question"})
    // }
};

//TODO "next" button switches to next card trivia
    // const [currentFlashCard, setFlashCardIndex] = useState(currentCardIndex);


    // function cardClick() {
    //     //TODO card flip function
    //     if (currentFlashCard < trivia.length-1)
    //     {
    //         setFlashCardIndex(currentFlashCard + 1)
    //     }
    //     else {
    //         setFlashCardIndex(0);
    //     }
    // }

//TODO Write return statement with FlashCard + Next button HTML

    return (
        <div onClick={handleCardClick} className={flashCardState.currentCardState}>
        <p>{trivia[flashCardState.currentStateIndex][flashCardState.currentCardState]}</p>
        </div>
    );
}
