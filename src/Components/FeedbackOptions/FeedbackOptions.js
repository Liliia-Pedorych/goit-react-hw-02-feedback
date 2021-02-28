import React from 'react';
import PropTypes from 'prop-types';
// // import './FeedbackOptions.module.css';

const FeedbackOptions = ({ option, onLeaveFeedback }) => {
  return (
    <button type="button" onClick={() => onLeaveFeedback(option)}>
      {option}
    </button>
  );
};

FeedbackOptions.propTypes = {
  option: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
