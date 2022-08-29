import React, { Component } from 'react';

class Counter extends Component {
  state = {
    counter: 0,
    fixed: 1,
    updateMe: {
      toggleMe: false,
      dontChangMe: 1,
    },
  };

  handleIncrease = () => {
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  };

  handleDecrease = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
    this.setState({
      counter: this.state.counter - 1,
    });
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  handleToggle = () => {
    this.setState({
      updateMe: {
        toggleMe: !this.state.updateMe.toggleMe,
      },
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
        <p>고정된 값: {this.state.fixed}</p>
      </div>
    );
  }
}

export default Counter;
