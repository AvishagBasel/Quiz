import { Link } from "react-router-dom";
import { NextOrFinishButton, QuizHeader } from "../style";
import QuestionBox from "./QuestionBox";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../redux/usersPoints";
import { useState } from "react";

const QuizQuestion = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(undefined);

  const dispatch = useDispatch();
  const isLastQuestion = questionIndex + 1 === quizQuestions.length;

  const calcQuestionPoint = () => {
    if (
      selectedOptionIndex === quizQuestions[questionIndex].currentAnswerIndex
    ) {
      dispatch(increment());
    } else {
      dispatch(decrement());
    }
  };

  return (
    <>
      <QuizHeader variant="h2">Question Number {questionIndex + 1}</QuizHeader>
      <QuestionBox
        questionObj={quizQuestions[questionIndex]}
        setSelectedOptionIndex={setSelectedOptionIndex}
      />
      <NextOrFinishButton
        component={Link}
        to={isLastQuestion ? `/highScore` : `#`}
        variant="contained"
        color={isLastQuestion ? "secondary" : "primary"}
        disabled={selectedOptionIndex === undefined}
        onClick={() => {
          calcQuestionPoint();
          setQuestionIndex(questionIndex + 1);
        }}
      >
        {isLastQuestion ? "Finish Quiz" : "Next Question"}
      </NextOrFinishButton>
    </>
  );
};
export default QuizQuestion;

const quizQuestions = [
  {
    question: "Who is Zorro ?",
    options: [
      "fictional character created in 1919",
      "Top model ",
      "Former president of the USA",
      "Olympic-winning athlete",
    ],
    currentAnswerIndex: 0,
  },
  {
    question: "What is the best day ?",
    options: ["Today", "Yesterday", "Tomorrow", "All the answers are correct"],
    currentAnswerIndex: 3,
  },
];
