import data from "./trivia.json";

export default function FlashCard() {




//TODO Write handleClick function, randomize trivia index and cycle through index onclick

//Random index function
    function randomSelection() {
        let randomIndex = Math.floor(Math.random()*trivia.length);
            return randomIndex
        }

        // const [currentFlashCard, setFlashCardIndex] = useState(0);

let trivia = data.trivia;
let currentCard = trivia[randomSelection()];

    function cardClick() {
        //TODO card flip function
    }

function buttonClick() {
    //TODO "next" button switches to next card trivia
}

//TODO Write return statement with FlashCard + Next button HTML

    return (
        <div id = "card">
            {/* testing randomSelection() */}
            {/* {randomSelection()} */}
        <p>{currentCard.question}</p>
        </div>
    );
}

