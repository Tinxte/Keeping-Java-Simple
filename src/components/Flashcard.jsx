import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function FlashCard({ number, data }) {
  //Pull starting index and flashcard data from parent component JSON

  let startingCardIndex = number;
  // console.log(startingCardIndex);

  let trivia = data;
  //   console.log(trivia);

  let currentCardIndex = startingCardIndex;

  //TODO refactor hook to only track index, not question/answer
  const [flashCardState, setFlashCardState] = useState({
    currentCardState: "question",
    currentStateIndex: currentCardIndex,
  });

  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [reset, setReset] = useState(0);
  const [key, setKey] = useState(0);
  const [cardSwitch, setCardSwitch] = useState(false);

  // Update key to reset flashcard component
  const handleReset = () => {

    setKey((prevKey) => prevKey + 1);
    // setIsFlipped(!isFlipped);
    // setIsAnimating(false);


    // setReset(true);
    // Reset state after a moment, preventing continuous resetting
    // setTimeout(() => setReset(false), 0);
  }

  // Flip animation handler
  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  // Change card contents handler
  function handleCardClick() {
    if (flashCardState.currentCardState === "question") {
      setFlashCardState({
        currentCardState: "answer",
        currentStateIndex: flashCardState.currentStateIndex,
      });
    } else if (flashCardState.currentCardState === "answer") {
      setFlashCardState({
        currentCardState: "question",
        currentStateIndex: flashCardState.currentStateIndex,
      });
    }
  }

  function handleNextClick() {
    if (flashCardState.currentStateIndex < trivia.length - 1) {
      setFlashCardState({
        currentCardState: "question",
        currentStateIndex: flashCardState.currentStateIndex + 1,
      });
    } else {
      setFlashCardState({
        currentCardState: "question",
        currentStateIndex: 0,
      });
    }
    // TODO: set card to next question on next button click

    // if (isFlipped) {
    //   setIsFlipped(!isFlipped);
    //   // setIsAnimating(false);
    // }

    if (isFlipped) {
      setCardSwitch(true);
      // setIsFlipped(isFlipped);
      handleReset();
      // setIsAnimating(false);
    setCardSwitch(false);
    }

    }

  return (
    <>
      <div className="flip-card-container">
        <div className="flip-card" onClick={handleFlip}>
          <AnimatePresence initial={false}>
          <motion.div
            className="flip-card-inner"
            initial="false"
            animate={{ rotateY: (
              cardSwitch 
              ? 75 
              : isFlipped 
              ? 180 
              : 360) }}
            transition={{ duration: 0.1, animationDirection: "normal" }}
            onAnimationComplete={() => setIsAnimating(false)}
            // key={reset ? "reset" : "animate"}
            key={key}
          >
            <div className="flip-card-front">
              <p>{trivia[flashCardState.currentStateIndex]["question"]}</p>
            </div>
            <div className="flip-card-back">
              <p>{trivia[flashCardState.currentStateIndex]["answer"]}</p>
            </div>
          </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <button className="nextButton" onClick={handleNextClick}>
        Next ➔
      </button>
    </>
  );
}
