import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  incrementCountBytwo = () => {
    this.setState({
      count: this.state.count + 2
    });
  };

  render() {
    return (
      <div>
        <button onClick={() => this.incrementCountBytwo()}>
          ClassCountBy2: {this.state.count}
        </button>
      </div>
    );
  }
}
export default ClassCounter;
