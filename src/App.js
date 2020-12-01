import React, { Component, useState } from "react";
import "./App.css";

class TimerAsAComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  triggerCounter() {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      console.log(this.state.counter);
      this.setState((oldState) => {
        return { counter: oldState.counter + 1 };
      });
    }, 1000);
  }

  render() {
    const { counter } = this.state;
    return (
      <>
        <div id="counter">{counter} sec</div>
        <button data-testid="start" onClick={() => this.triggerCounter()}>
          start
        </button>
        <button
          data-testid="stop"
          onClick={() => clearInterval(this.intervalId)}
        >
          stop
        </button>
      </>
    );
  }
}

function TimerAsAFunction() {
  const [counter, setCounter] = useState(0);
  const [intervalId, setIntervalId] = useState(false);

  const triggerCounter = () => {
    clearInterval(intervalId);
    const id = setInterval(
      () => setCounter((oldCounter) => oldCounter + 1),
      1000
    );
    setIntervalId(id);
  };

  return (
    <>
      <div>{counter} sec</div>
      <button data-testid="start" onClick={() => triggerCounter()}>
        start
      </button>
      <button data-testid="stop" onClick={() => clearInterval(intervalId)}>
        stop
      </button>
    </>
  );
}

// export default TimerAsAFunction;
export default TimerAsAComponent;
