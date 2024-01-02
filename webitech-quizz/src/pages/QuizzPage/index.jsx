import { useEffect, useState } from "react";
// import response from "../../data.json";
import Question from "../../components/Question";
import Reponse from "../../components/Reponse";
import Loader from "../../components/Loader";
import NextQuestion from "../../components/NextQuestion";
import Score from "../../components/Score";
const QuizzPage = () => {
  // Récupérer les questions
  //depuis l'API -> useEffect
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [userAnswer, setUserAnswer] = useState(null);

  const handleAnswerClick = (answer) => {
    if (!isAnswered) {
      setIsAnswered(true);
      setUserAnswer(answer);
      console.log(answer);
      console.log(answer === questions[questionIndex].correct_answer);
      if (answer === questions[questionIndex].correct_answer) {
        setScore(score + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    const nextQuestionIndex = questionIndex + 1;

    setQuestionIndex(nextQuestionIndex);
    setIsAnswered(false);

    if (questions.length > 0 && nextQuestionIndex < 10) {
      const newAnswers = questions[nextQuestionIndex]?.incorrect_answers;

      newAnswers.push(questions[nextQuestionIndex]?.correct_answer);

      setAnswers(newAnswers.sort(() => Math.random() - 0.5));
    }
  };

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const request = await fetch(
          "https://opentdb.com/api.php?amount=10&type=multiple",
          { signal: controller.signal }
        );
        const response = await request.json();
        setQuestions(response.results);

        const newAnswers = response.results[questionIndex]?.incorrect_answers;

        newAnswers.push(response.results[questionIndex]?.correct_answer);

        setAnswers(newAnswers.sort(() => Math.random() - 0.5));
      } catch (error) {
        console.log(error);
      }
    };

    setTimeout(() => {
      fetchData();
    }, 1000);

    return () => {
      // Nettoyage
      controller.abort();
    };
  }, []);

  return (
    <>
      QuizzPage
      {questions.length > 0 && questionIndex < 10 ? (
        <>
          <Question question={questions[questionIndex].question} />
          <div>
            {answers.map((answer) => (
              <Reponse
                key={answer}
                answer={answer}
                handleAnswerClick={handleAnswerClick}
                question={questions[questionIndex]}
                isAnswered={isAnswered}
                userAnswer={userAnswer}
              />
            ))}
          </div>
        </>
      ) : (
        <Loader />
      )}
      {isAnswered && <NextQuestion handleNextQuestion={handleNextQuestion} />}
      {questionIndex === 10 && <Score score={score} />}
    </>
  );
};

export default QuizzPage;
