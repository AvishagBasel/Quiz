import { styled } from "@mui/material/styles";
import { Typography, Button, Box } from "@mui/material";

export const QuizHeader = styled(Typography)({
  fontWeight: "800",
  marginBottom: "50px",
  marginTop: "50px",
});

export const SubmitButton = styled(Button)({
  marginLeft: "10px",
  height: "55px",
  width: "100px",
});
export const StartQuizButton = styled(SubmitButton)({
  width: "400px",
  textTransform: "none",
  fontSize: "20px",
});

export const NextOrFinishButton = styled(Button)({
  display: "flex",
  marginLeft: "auto",
});
export const QuestionBoxWrapper = styled(Box)({
  backgroundColor: "whitesmoke",
  marginBottom: "20px",
  padding: "40px",
  borderRadius: "5px",
  display: "flex",
  flexDirection: "column",
});
