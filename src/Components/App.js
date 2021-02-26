import React, { Component } from 'react';
import Container from './Container/Container';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
    // console.log([option]);
  };

  render() {
    const countTotalFeedback =
      this.state.good + this.state.neutral + this.state.bad;

    const countPositiveFeedbackPercentage = (
      (this.state.good / countTotalFeedback) *
      100
    ).toFixed(1);

    // console.log(countTotalFeedback);

    return (
      <Container>
        <div>
          <h2>Please leave feedback</h2>
          {Object.keys(this.state).map(item => (
            <FeedbackOptions
              key={item}
              option={item}
              onLeaveFeedback={this.handleIncrement}
            />
          ))}
          <h2>Statistics</h2>
          <p>Good:{this.state.good}</p>
          <p>Neutral:{this.state.neutral}</p>
          <p>Bad:{this.state.bad}</p>
          <p>Total:{countTotalFeedback}</p>
          <p>Positive feedback:{countPositiveFeedbackPercentage}%</p>
        </div>
      </Container>
    );
  }
}

export default App;
