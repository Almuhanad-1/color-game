import * as React from 'react';
import './gameStyle.css';

export default function Game() {
  const [mainColor, setMainColor] = React.useState('');
  const [optionsArr, setOptionsArr] = React.useState([]);
  const [correctAnsCount, setCorrectAnsCount] = React.useState(0);
  const [wrongAnsCount, setWrongAnsCount] = React.useState(0);

  const reportRef = React.useRef();

  const gernerateRandomColor = () => {
    let color = '';
    for (let i = 0; i < 6; i++) {
      color += Math.floor(Math.random() * 16)
        .toString(16)
        .toUpperCase();
    }
    return color;
  };
  const shaffleArray = (arr = []) => {
    const shaffledArray = [...arr].sort(() => 0.5 - Math.random());
    return shaffledArray;
  };

  const newQuiz = () => {
    const color1 = gernerateRandomColor();
    setMainColor(color1);
    setOptionsArr(
      shaffleArray([color1, gernerateRandomColor(), gernerateRandomColor()])
    );
  };

  const handleClick = (e) => {
    if (e.target.innerHTML === `#${mainColor}`) {
      setTimeout(() => {
        reportRef.current.innerHTML = '';
      }, 500);
      reportRef.current.innerHTML = 'Good Job!';
      reportRef.current.style.color = 'green';
      setCorrectAnsCount(correctAnsCount + 1);
      newQuiz();
    } else {
      setTimeout(() => {
        reportRef.current.innerHTML = '';
      }, 500);
      reportRef.current.innerHTML = 'Wrong Answer!';
      reportRef.current.style.color = 'red';
      setWrongAnsCount(wrongAnsCount + 1);
      newQuiz();
    }
  };

  React.useEffect(() => {
    newQuiz();
  }, [0]);

  return (
    <div className="app">
      <div className="game-card">
        <div
          className="color-card"
          style={{ backgroundColor: `#${mainColor}` }}
        ></div>
        <div className="btns-container">
          {optionsArr.map((ele, i) => (
            <button
              className={`btn btn${i}`}
              key={ele}
              onClick={(e) => handleClick(e)}
            >
              #{ele}
            </button>
          ))}
        </div>
        <div className="report" ref={reportRef}></div>
        <div className="results">
          <div className="correct-answer">
            Correct Answers: {correctAnsCount}
          </div>
          <div className="wrong-answer">Wrong Answers: {wrongAnsCount}</div>
        </div>
      </div>
    </div>
  );
}
