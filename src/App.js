import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = { counter: 0 }
  }

  render() {
    return (
      <div className="App">
        <h1>Counter App</h1>
        <h4>Count: {this.state.counter}</h4>
        <button onClick={() => { this.setState({ counter: this.state.counter + 1 }); }}>Increment</button>
        <button onClick={() => { this.setState({ counter: this.state.counter - 1 }); }}>Decrement</button>
      </div>);
  }
}

export default App;
