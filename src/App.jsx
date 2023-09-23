import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Welcome from "./welcome/Welcome";
import QuizQuestion from "./quiz/Quiz";
import store from "./redux/store";
import HighScoreTable from "./highScore/HighScoreTable";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/quiz" element={<QuizQuestion />} />
            <Route path="/highScore" element={<HighScoreTable />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
