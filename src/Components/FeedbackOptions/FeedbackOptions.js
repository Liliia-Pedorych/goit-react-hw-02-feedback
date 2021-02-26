import React from 'react';
// // import './FeedbackOptions.css';

const FeedbackOptions = ({ option, onLeaveFeedback }) => {
  return (
    <button type="button" onClick={() => onLeaveFeedback(option)}>
      {option}
    </button>
  );
};

export default FeedbackOptions;
