import { QuestionBoxWrapper, QuizHeader } from "../style";
import QuestionOptions from "./QuestionOptions";
const QuestionBox = ({ questionObj, setSelectedOptionIndex }) => {
  return (
    <QuestionBoxWrapper>
      <QuizHeader variant="h5" style={{ marginTop: "0px" }}>
        {questionObj.question} :
      </QuizHeader>
      <QuestionOptions
        key={questionObj.question}
        options={questionObj.options}
        setSelectedOptionIndex={setSelectedOptionIndex}
      />
    </QuestionBoxWrapper>
  );
};
export default QuestionBox;
