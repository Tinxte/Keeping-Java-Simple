import { useState } from "react";

export default function FlashCard({number, data}) {

//Pull starting index and flashcard data from parent component JSON

let startingCardIndex = number;
// console.log(startingCardIndex);

let trivia = data;
// console.log(trivia);

let currentCardIndex = startingCardIndex;

const [flashCardState, setFlashCardState] = useState({
    currentCardState: "question",
    currentStateIndex: currentCardIndex
});

function handleCardClick() {
    if (flashCardState.currentCardState === "question") {
        setFlashCardState({currentCardState: "answer",
    currentStateIndex: flashCardState.currentStateIndex});
    }
    else if (flashCardState.currentCardState === "answer") {
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
        <button className="nextButton">Next ➔</button>
        </>
    );
}
