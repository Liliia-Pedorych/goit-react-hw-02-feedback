import React, { Component } from 'react';
import Container from './Container/Container';
import Feedback from './Feedback/Feedback';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <Container>
        <div>
          <h2>Please leave feedback</h2>
          {Object.keys(this.state).map(item => (
            <Feedback key={item} status={item} />
          ))}
          <h2>Statistics</h2>
          <p>Good:{this.state.good}</p>
          <p>Neutral:{this.state.neutral}</p>
          <p>Bad:{this.state.bad}</p>
        </div>
      </Container>
    );
  }
}

export default App;
