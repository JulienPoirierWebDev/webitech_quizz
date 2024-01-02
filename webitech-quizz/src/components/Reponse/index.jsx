import { PropTypes } from "prop-types";
import styles from "./Reponse.module.css";

const Reponse = ({
  answer,
  handleAnswerClick,
  question,
  isAnswered,
  userAnswer,
}) => {
  const classeNames = [styles.reponse];
  const isCorrectAnswer = answer === question.correct_answer;

  if (isAnswered && isCorrectAnswer) {
    classeNames.push(styles.correctAnswer);
    console.log(userAnswer);
  }

  if (isAnswered && !isCorrectAnswer && answer === userAnswer) {
    classeNames.push(styles.wrongAnswer);
  }

  if (isAnswered) {
    classeNames.push(styles.disabled);
  }

  return (
    <div
      key={answer}
      className={classeNames.join(" ")}
      onClick={() => {
        handleAnswerClick(answer);
      }}
      dangerouslySetInnerHTML={{ __html: answer }}
    ></div>
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
