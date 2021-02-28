import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

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
  };

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = good + neutral + bad;

    const countPositiveFeedbackPercentage = (
      (good / countTotalFeedback) *
      100
    ).toFixed(1);

    return (
      <Section title="Please leave feedback">
        {Object.keys(this.state).map(item => (
          <FeedbackOptions
            key={item}
            option={item}
            onLeaveFeedback={this.handleIncrement}
          />
        ))}
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      </Section>
    );
  }
}

export default App;
