import React from 'react';
import Notification from '../Notification/Notification';
// // import './Statistics.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const isFeedback = total === 0;
  return (
    <>
      {isFeedback ? (
        <Notification message="No feedback given" />
      ) : (
        <>
          <h2>Statistics</h2>
          <p>Good:{good}</p>
          <p>Neutral:{neutral}</p>
          <p>Bad:{bad}</p>
          <p>Total:{total}</p>
          <p>Positive feedback:{positivePercentage}%</p>
        </>
      )}
    </>
  );
};

export default Statistics;
