import * as React from 'react';
import { Link } from 'react-router-dom';
import './homepageStyle.css';
const homeButtons = [
  {
    title: 'Play',
    link: '/play',
  },
  {
    title: 'Play With Timer',
    link: '/playWithTimer',
  },
  {
    title: 'Train',
    link: '/train',
  },
  {
    title: 'Leaderboard',
    link: '',
  },
  {
    title: 'Invite & Share',
    link: '',
  },
];
export default function Homepage() {
  return (
    <div className="homepage">
      <h1>Guess Color Game</h1>
      {homeButtons.map((ele, i) => {
        return (
          <Link to={ele.link} key={ele.title}>
            <button className="homebtn">{ele.title}</button>
          </Link>
        );
      })}
    </div>
  );
}
