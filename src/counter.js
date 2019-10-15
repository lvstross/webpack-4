import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
  }

  handleClick(){
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <div onClick={this.handleClick.bind(this)}>
        <h1>Count: {this.state.counter}</h1>
      </div>
    );
  }
}

export default Counter;
