import { useState } from "react";
import { motion } from "framer-motion";

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
  }

  return (
    <>
      <div className="flip-card-container">
        <div className="flip-card" onClick={handleFlip}>
          <motion.div
            className="flip-card-inner"
            initial="false"
            animate={{ rotateY: isFlipped ? 180 : 360 }}
            transition={{ duration: 0.1, animationDirection: "normal" }}
            onAnimationComplete={() => setIsAnimating(false)}
          >

            <div className="flip-card-front">
              <p>{trivia[flashCardState.currentStateIndex]["question"]}</p>
            </div>
            <div className="flip-card-back">
              <p>{trivia[flashCardState.currentStateIndex]["answer"]}</p>
            </div>
          </motion.div>
        </div>

            {/* TODO correct absolute position issues so button displays in appropriate location */}
      <button className="nextButton" onClick={handleNextClick}>
        Next ➔
      </button>
      </div>

    </>
  );
}
