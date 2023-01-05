import React, { Component } from "react";

import AgePersonne from "./AgePersonne";

class Personne extends Component {
  render() {
    return (
      <>
        <h1>{this.props.nom}</h1>
        {/* <p>age : {this.props.age} </p> */}
        <AgePersonne age={this.props.age} />
        <p>sex : {this.props.sex} </p>
      </>
    );
  }
}

export default Personne;
