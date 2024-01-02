import { PropTypes } from "prop-types";

const Reponse = ({
  answer,
  handleAnswerClick,
  question,
  isAnswered,
  userAnswer,
}) => {
  const answerStyle = {};
  const isCorrectAnswer = answer === question.correct_answer;

  if (isAnswered && isCorrectAnswer) {
    answerStyle.backgroundColor = "green";
    console.log(userAnswer);
  } else if (isAnswered && !isCorrectAnswer && answer === userAnswer) {
    answerStyle.backgroundColor = "red";
  }

  return (
    <p
      key={answer}
      style={answerStyle}
      onClick={() => {
        handleAnswerClick(answer);
      }}
      dangerouslySetInnerHTML={{ __html: answer }}
    ></p>
  );
};

Reponse.propTypes = {
  answer: PropTypes.string.isRequired,
  handleAnswerClick: PropTypes.func.isRequired,
  question: PropTypes.object.isRequired,
  isAnswered: PropTypes.bool.isRequired,
  userAnswer: PropTypes.string,
};

export default Reponse;
