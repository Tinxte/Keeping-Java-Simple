// import data from "./trivia.json";
import { useState } from "react";

export default function FlashCard({number, data}) {

//TODO Write handleClick function, randomize trivia index and cycle through index onclick

let startingCardIndex = number;
// console.log(startingCardIndex);

//Pull data from parent component JSON

let trivia = data;
// console.log(trivia);


let currentCardIndex = startingCardIndex;
// let currentCardContent = trivia[currentCardIndex];
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
    else if (flashCardState.currentCardState = "answer") {
            setFlashCardState({currentCardState: "question",
                currentStateIndex: flashCardState.currentStateIndex
            })
    }
};


    function handleNextClick() {
        //TODO "next" button switches to next card trivia

        // if (currentFlashCard < trivia.length-1)
        // {
        //     setFlashCardIndex(currentFlashCard + 1)
        // }
        // else {
        //     setFlashCardIndex(0);
        // }
        
    }

//TODO Write return statement with FlashCard + Next button HTML

    return (
        <>
        <div onClick={handleCardClick} id="flashCard" className={flashCardState.currentCardState}>
        <p>{trivia[flashCardState.currentStateIndex][flashCardState.currentCardState]}</p>
        </div>
        <button className="nextButton">Next</button>
        </>
    );
}
