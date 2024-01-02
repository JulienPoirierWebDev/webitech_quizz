const Header = () => {
  return (
    <div>
      <h1>Notre app de quizz</h1>
    </div>
  );
};

// function Header() {
//   return (
//     <div>
//       <h1>Notre app de quizz</h1>
//     </div>
//   );
// }

const Rules = () => {
  return (
    <div>
      <div>
        <h2>Comment jouer ? </h2>
        <ul>
          <li>Une série de 10 questions</li>
          <li>20 secondes pour répondre</li>
          <li>Des questions a choix multiples</li>
        </ul>
      </div>
      <div style={{ width: "200px" }}>
        <img
          style={{ width: "100%" }}
          src="/images/portable-quizz.png"
          aria-hidden
          alt=""
        />
      </div>
    </div>
  );
};

const LaunchQuizz = () => {
  return (
    <div>
      <button>Jouer !</button>
    </div>
  );
};

const HomePage = () => {
  return (
    <>
      <Header />
      <Rules />
      <LaunchQuizz />
    </>
  );
};

function App() {
  return (
    <>
      <HomePage />
    </>
  );
}

export default App;
