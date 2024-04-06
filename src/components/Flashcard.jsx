import data from "./trivia.json";
import { useState } from "react";

export default function FlashCard() {




//TODO Write handleClick function, randomize trivia index and cycle through index onclick

//Random index function
    function randomSelection() {
        let randomIndex = Math.floor(Math.random()*trivia.length);
            return randomIndex
        }

let trivia = data.trivia;
let startingCardIndex = randomSelection();

//TODO fix scope issues with randomization pulling wrong answers
let currentCardIndex = startingCardIndex;
let currentCardContent = trivia[currentCardIndex];
let currentCardState = "question";

const [flashCardState, setFlashCardState] = useState("question");

function handleCardClick() {
    if (currentCardState = "question") {
        setFlashCardState("answer");
//TODO fix this so state can be reverted to Question on click
    // } else if (currentCardState = "answer") {
    //     setFlashCardState("question")
    }
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
        <div onClick={handleCardClick} id={flashCardState}>
        <p>{currentCardContent[flashCardState]}</p>
        </div>
    );
}