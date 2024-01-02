import { PropTypes } from "prop-types";

const Question = ({ question }) => {
  return (
    <div>
      <p
        dangerouslySetInnerHTML={{
          __html: question,
        }}
      ></p>
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.string.isRequired,
};

export default Question;
