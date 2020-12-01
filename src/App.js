import React, { Component, useState } from "react";
import "./App.css";
import Button from "./components/button";

class TimerAsAComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    // this.triggerCounter()
    // setState
  }
  componentDidMount() {
    this.triggerCounter();
  }

  triggerCounter() {
    setInterval(() => {
      console.log(this.state.counter);
      this.setState((oldState) => {
        return { counter: oldState.counter + 1 };
      });
    }, 1000);
  }

  render() {
    const { counter } = this.state;
    return (
      <div className="App">
        <div id="counter">{counter} sec</div>
        <Button>Start</Button>
      </div>
    );
  }
}

function TimerAsAFunction() {
  const [counter, setCounter] = useState(0);
  const [hasStarted, setStart] = useState(false);

  if (!hasStarted) {
    setInterval(() => setCounter((oldCounter) => oldCounter + 1), 1000);
    setStart(true);
  }

  return (
    <div className="App">
      <div>{counter} sec</div>
    </div>
  );
}

export default TimerAsAFunction;
