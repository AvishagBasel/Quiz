import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUserName } from "../redux/usersPointsSlice";
import { QuizHeader, SubmitButton, StartQuizButton } from "../style";
import { TextField } from "@mui/material";

const Welcome = () => {
  const usersList = useSelector((state) => state.usersList);
  const [submittingUserName, setSubmittingUserName] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);
  let [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();
  const canStartQuiz = !isDuplicate && isSubmitted && submittingUserName;

  function checkIfDuplicate() {
    return usersList[submittingUserName] !== undefined;
  }
  return (
    <div>
      <QuizHeader variant="h1">Lets Quizing!</QuizHeader>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {!canStartQuiz && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setIsSubmitted(true);
              if (!checkIfDuplicate() && submittingUserName) {
                setIsDuplicate(false);
                dispatch(setUserName(submittingUserName));
              } else {
                setIsDuplicate(true);
              }
            }}
          >
            <TextField
              label="User Name"
              value={submittingUserName}
              placeholder="Enter your name"
              onChange={(e) => setSubmittingUserName(e.target.value)}
              variant="outlined"
              error={isSubmitted}
              helperText={
                isDuplicate
                  ? "This name is already taken. Choose another unique one."
                  : ""
              }
            />
            <SubmitButton type="submit" variant="contained" color="primary">
              Submit
            </SubmitButton>
          </form>
        )}
        {canStartQuiz && (
          <StartQuizButton
            component={Link}
            to="/quiz"
            variant="contained"
            color="success"
          >
            Lets Start {submittingUserName} !
          </StartQuizButton>
        )}
      </div>
    </div>
  );
};

export default Welcome;
