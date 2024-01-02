import { useEffect, useState } from "react";

const useQuizz = () => {
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

        const newAnswers = response.results[0]?.incorrect_answers;

        newAnswers.push(response.results[0]?.correct_answer);

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

  return {
    questions,
    questionIndex,
    answers,
    isAnswered,
    userAnswer,
    handleAnswerClick,
    handleNextQuestion,
    score,
  };
};

export default useQuizz;
