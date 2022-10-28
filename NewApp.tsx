import * as React from 'react';

const NewApp = () => {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    let c = 0;
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 14) {
          clearInterval(interval);
        }
        return prevCount + 1;
      });
      // c++;
      // console.log(count);
      // if (count >= 5) {
      //   clearInterval(interval);
      // }
    }, 1000);
  };

  return (
    <div>
      <button onClick={handleClick}>click</button>
      <h1>The component has been rendered for {count} seconds</h1>
    </div>
  );
};

export default NewApp;
