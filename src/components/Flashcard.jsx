import trivia from "./trivia.json";

export default function FlashCard() {

//TODO Write handleClick function, randomize trivia index and cycle through index onclick

//Random index function
    function randomSelection() {
        let randomIndex = Math.floor(Math.random()*trivia.length);
            return randomIndex
        }

function handleClick() {

}

//TODO Write return statment with FlashCard + Next button HTML

    return (
        <div>
            {/* testing randomSelection() */}
            {randomSelection()}
        </div>
    );
}

