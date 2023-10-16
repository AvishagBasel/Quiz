import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUserName } from "../redux/usersPointsSlice";
import { QuizHeader, SubmitButton, StartQuizButton } from "../style";
import { TextField } from "@mui/material";

const Welcome = () => {
  const usersList = useSelector((state) => state.usersList);
  const [submittingUserName, setSubmittingUserName] = useState("");
  let [isValidSubmitted, setIsValidSubmitted] = useState(null);
  const dispatch = useDispatch();

  function isDuplicateUserName() {
    return usersList[submittingUserName] === undefined;
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (isDuplicateUserName()) {
      setIsValidSubmitted(true);
      dispatch(setUserName(submittingUserName));
    } else {
      setIsValidSubmitted(false);
    }
  };

  return (
    <div>
      <QuizHeader variant="h1">Lets Quizing!</QuizHeader>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {!isValidSubmitted ? (
          <form onSubmit={handleFormSubmit}>
            <TextField
              label="User Name"
              value={submittingUserName}
              placeholder="Enter your name"
              onChange={(e) => setSubmittingUserName(e.target.value)}
              variant="outlined"
              error={isValidSubmitted === false}
              helperText={
                isValidSubmitted === false
                  ? "This name is already taken. Choose another unique one."
                  : ""
              }
            />
            <SubmitButton
              type="submit"
              variant="contained"
              color="primary"
              disabled={submittingUserName.trim().length === 0}
            >
              Submit
            </SubmitButton>
          </form>
        ) : (
          <StartQuizButton
            component={Link}
            to="/quiz"
            variant="contained"
            color="success"
          >
            Let's Start {submittingUserName} !
          </StartQuizButton>
        )}
      </div>
    </div>
  );
};

export default Welcome;
