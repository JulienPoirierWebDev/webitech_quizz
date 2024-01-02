import { PropTypes } from "prop-types";
import styles from "./Question.module.css";

const Question = ({ question }) => {
  return (
    <div>
      <p
        className={styles.question}
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
