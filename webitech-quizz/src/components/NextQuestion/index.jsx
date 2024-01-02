import { PropTypes } from "prop-types";

const NextQuestion = ({ handleNextQuestion }) => {
  return <button onClick={handleNextQuestion}>Question suivante</button>;
};

NextQuestion.propTypes = {
  handleNextQuestion: PropTypes.func.isRequired,
};

export default NextQuestion;
