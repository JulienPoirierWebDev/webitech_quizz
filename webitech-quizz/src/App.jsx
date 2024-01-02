import { useState } from "react";
import HomePage from "./pages/HomePage";
import QuizzPage from "./pages/QuizzPage";

function App() {
  const [isQuizzStarted, setIsQuizzStarted] = useState(false);

  const handleLaunchQuizz = () => {
    setIsQuizzStarted(true);
  };
  return (
    <>
      {!isQuizzStarted && <HomePage handleLaunchQuizz={handleLaunchQuizz} />}
      {isQuizzStarted && <QuizzPage />}
    </>
  );
}

export default App;
