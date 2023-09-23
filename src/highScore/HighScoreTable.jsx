import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { StartQuizButton, QuizHeader } from "../style";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const HighScoreTable = () => {
  const usersList = useSelector((state) => state.usersList);
  const currentUser = useSelector((state) => state.currentUser);

  const sortedUsersList = Object.entries(usersList).sort((a, b) => b[1] - a[1]);

  return (
    <div>
      <QuizHeader variant="h2">High Score Table</QuizHeader>
      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User Name</TableCell>
              <TableCell>Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedUsersList.map(([userName, score]) => (
              <TableRow
                key={userName}
                style={{
                  backgroundColor:
                    userName === currentUser ? "grey" : "whitesmoke",
                }}
              >
                <TableCell>{userName}</TableCell>
                <TableCell>{score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <StartQuizButton
          component={Link}
          to="/"
          variant="contained"
          color="success"
          style={{ margin: "20px 0 140px 0" }}
        >
          Try Again
        </StartQuizButton>
      </div>
    </div>
  );
};
export default HighScoreTable;
