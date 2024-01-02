import { useEffect, useState } from "react";
import response from "../../data.json";
const QuizzPage = () => {
  // Récupérer les questions
  //depuis l'API -> useEffect
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [userAnswer, setUserAnswer] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        // const request = await fetch(
        //   "https://opentdb.com/api.php?amount=10&type=multiple",
        //   { signal: controller.signal }
        // );
        // const response = await request.json();
        setQuestions(response.results);
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

  // Afficher les réponses

  // Permettre de répondre à la question

  useEffect(() => {
    if (questions.length > 0 && questionIndex < 10) {
      const newAnswers = questions[questionIndex]?.incorrect_answers;

      newAnswers.push(questions[questionIndex]?.correct_answer);

      setAnswers(newAnswers.sort(() => Math.random() - 0.5));

      console.log(answers);
    }
    return () => {
      // Nettoyage
    };
  }, [questionIndex, questions]);

  return (
    <>
      QuizzPage
      {/* {questions.length === 0 && <div>Chargement...</div>}
      {questions.length > 0 && (
        <>
          <div>{questions[questionIndex]?.question}</div>
          <button
            onClick={() => {
              setQuestionIndex(questionIndex + 1);
            }}
          >
            Question suivante
          </button>
        </>
      )} */}
      {questions.length > 0 && questionIndex < 10 ? (
        <>
          <div>
            <p
              dangerouslySetInnerHTML={{
                __html: questions[questionIndex].question,
              }}
            ></p>
          </div>

          <div>
            {answers.map((answer) => {
              const answerStyle = {};
              const isCorrectAnswer =
                answer === questions[questionIndex].correct_answer;

              if (isAnswered && isCorrectAnswer) {
                answerStyle.backgroundColor = "green";
              } else {
                if (isAnswered && !isCorrectAnswer && answer === userAnswer) {
                  answerStyle.backgroundColor = "red";
                }
              }
              return (
                <p
                  key={answer}
                  style={answerStyle}
                  onClick={() => {
                    if (!isAnswered) {
                      setIsAnswered(true);
                      setUserAnswer(answer);
                      console.log(answer);
                      console.log(
                        answer === questions[questionIndex].correct_answer
                      );
                      if (answer === questions[questionIndex].correct_answer) {
                        setScore(score + 1);
                      }
                    }
                  }}
                >
                  {answer}
                </p>
              );
            })}
          </div>
        </>
      ) : (
        <div>Pas de questions</div>
      )}
      {isAnswered && (
        <>
          <button
            onClick={() => {
              setQuestionIndex(questionIndex + 1);
              setIsAnswered(false);
            }}
          >
            Question suivante
          </button>
        </>
      )}
      {questionIndex === 10 && (
        <div>
          <p>Score : {score}</p>
        </div>
      )}
    </>
  );
};

export default QuizzPage;
