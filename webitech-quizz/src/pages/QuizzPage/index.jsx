import { useEffect, useState } from "react";
import response from "../../data.json";
const QuizzPage = () => {
  // Récupérer les questions
  //depuis l'API -> useEffect
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

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

  const answers = questions[questionIndex]?.incorrect_answers || [];
  answers.push(questions[questionIndex]?.correct_answer);

  console.log(answers);
  console.log(answers.sort(() => Math.random() - 0.5));

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
            {answers.map((answer) => (
              <p
                key={answer}
                onClick={() => {
                  console.log(answer);
                  console.log(
                    answer === questions[questionIndex].correct_answer
                  );
                  if (answer === questions[questionIndex].correct_answer) {
                    setScore(score + 1);
                  }
                  setUserAnswers([...userAnswers, answer]);
                  setQuestionIndex(questionIndex + 1);
                }}
              >
                {answer}
              </p>
            ))}
          </div>
        </>
      ) : (
        <div>Pas de questions</div>
      )}
      {questionIndex === 10 && (
        <div>
          <p>Score : {score}</p>
          {questions.map((question, index) => (
            <div key={question.question}>
              <p
                dangerouslySetInnerHTML={{
                  __html: question.question,
                }}
              ></p>
              {userAnswers[index] === question.correct_answer ? (
                <p>
                  Tu as trouvé la bonne réponse ! C&rsquo;était{" "}
                  {question.correct_answer}
                </p>
              ) : (
                <p>
                  Tu t&rsquo;es trompé, la bonne réponse était :{" "}
                  {question.correct_answer}. Et tu as mis : {userAnswers[index]}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default QuizzPage;
