import React, { Component } from "react";

class Horloge extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    // console.log("création");
  }

  //   state = {
  //     date: new Date(),
  //   };

  componentDidMount() {
    // console.log("composant monté");
    // setInterval(() => console.log("tick"), 1000);
    this.time = setInterval(() => this.setState({ date: new Date() }), 1000);
  }

  componentWillUnmount() {
    // console.log("demontage");

    clearInterval(this.time);
  }

  render() {
    // console.log("composant affiché");

    return <div> Horloge :{this.state.date.toLocaleTimeString()} </div>;
  }
}

export default Horloge;
