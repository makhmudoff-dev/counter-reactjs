import "./App.css";
import React, { Component } from "react";

class App extends Component {
  state = {
    number: 0,
  };

  increaseNumberHandler = () => {
    this.setState({ number: this.state.number + 1 });
  };

  resetNumberHandler = () => {
    this.setState({ number: 0 });
  };

  decreaseNumberHandler = () => {
    this.setState({ number: this.state.number - 1 });
  };
  render() {
    const { number } = this.state;
    return (
      <div className="App">
        <h1>Number: {number} </h1>
        <button onClick={this.increaseNumberHandler}>Increase</button>

        <button onClick={this.resetNumberHandler}>Reset</button>
        <button onClick={this.decreaseNumberHandler}>Decrease</button>
      </div>
    );
  }
}

export default App;
