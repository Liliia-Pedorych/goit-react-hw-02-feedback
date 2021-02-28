import React from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const isFeedback = total === 0;
  return (
    <>
      <h2>Statistics</h2>
      {isFeedback ? (
        <Notification message="No feedback given" />
      ) : (
        <>
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

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
