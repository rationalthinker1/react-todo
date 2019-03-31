import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import HelloWorld from './components/hello-world';
import Todo from './components/todo/todo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <HelloWorld title="Hello from React webpack" />
        <Todo />
      </div>
    );
  }
}

export default hot(module)(App);
