import Header from "../../components/Header";
import Rules from "../../components/Rules";
import LaunchQuizz from "../../components/LaunchQuizz";

import PropTypes from "prop-types";

const HomePage = ({ handleLaunchQuizz }) => {
  return (
    <>
      <Header />
      <Rules />
      <LaunchQuizz handleLaunchQuizz={handleLaunchQuizz} />
    </>
  );
};

HomePage.propTypes = {
  handleLaunchQuizz: PropTypes.func.isRequired,
};

export default HomePage;
