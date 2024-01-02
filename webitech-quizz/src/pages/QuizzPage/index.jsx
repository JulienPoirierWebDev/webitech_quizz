// import response from "../../data.json";
import Question from "../../components/Question";
import Reponse from "../../components/Reponse";
import Loader from "../../components/Loader";
import NextQuestion from "../../components/NextQuestion";
import Score from "../../components/Score";
import useQuizz from "../../hooks/useQuizz";

const QuizzPage = () => {
  const {
    questions,
    questionIndex,
    answers,
    isAnswered,
    userAnswer,
    handleAnswerClick,
    handleNextQuestion,
    score,
  } = useQuizz();
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
