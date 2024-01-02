import { PropTypes } from "prop-types";

const LaunchQuizz = ({ handleLaunchQuizz }) => {
  return (
    <div>
      <button onClick={handleLaunchQuizz}>Jouer !</button>
    </div>
  );
};

LaunchQuizz.propTypes = {
  handleLaunchQuizz: PropTypes.func.isRequired,
};

export default LaunchQuizz;
