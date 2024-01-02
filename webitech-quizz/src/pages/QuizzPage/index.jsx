import { useEffect, useState } from "react";
import response from "../../data.json";
const QuizzPage = () => {
  // Récupérer les questions
  //depuis l'API -> useEffect
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);

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
      {questions.length > 0 ? (
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
      ) : (
        <div>Pas de questions</div>
      )}
    </>
  );
};

export default QuizzPage;
