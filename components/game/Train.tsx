import * as React from 'react';
import './gameStyle.css';

export default function Game() {
  const [mainColor, setMainColor] = React.useState('');
  const [optionsArr, setOptionsArr] = React.useState([]);
  const [correctAnsCount, setCorrectAnsCount] = React.useState(0);
  const [wrongAnsCount, setWrongAnsCount] = React.useState(0);
  const [nextBtn, setNextBtn] = React.useState(false);
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
    setNextBtn(false);
    const color1 = gernerateRandomColor();
    setMainColor(color1);
    setOptionsArr(
      shaffleArray([color1, gernerateRandomColor(), gernerateRandomColor()])
    );
  };

  const handleClick = (e) => {
    if (nextBtn) {
    }
    if (e.target.innerHTML === `#${mainColor}`) {
      setTimeout(() => {
        reportRef.current.firstChild.innerHTML = '';
      }, 500);
      reportRef.current.firstChild.innerHTML = 'Good Job!';
      reportRef.current.style.color = 'green';
      setCorrectAnsCount(correctAnsCount + 1);
      newQuiz();
    } else {
      setTimeout(() => {
        reportRef.current.firstChild.innerHTML = '';
        setNextBtn(true);
      }, 500);
      reportRef.current.firstChild.innerHTML = 'Wrong Answer!';
      reportRef.current.style.color = 'red';
      setWrongAnsCount(wrongAnsCount + 1);
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
              onClick={(e) => (nextBtn ? null : handleClick(e))}
              style={{ backgroundColor: nextBtn ? `#${ele}` : '#efeeea' }}
            >
              #{ele}
            </button>
          ))}
        </div>
        <div></div>
        <div className="report" ref={reportRef}>
          <span></span>
          {nextBtn && (
            <button className="btn" onClick={newQuiz}>
              Next
            </button>
          )}
        </div>
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
