import React, { Component } from "react";
import Personne from "./Personne";
import Horloge from "./Horloge";

class App extends Component {
  state = {
    personnes: [
      { nom: "Pierre", age: "20", sex: "homme" },
      { nom: "Paul", age: "24", sex: "homme" },
      { nom: "Jacquie", age: "32", sex: "femme" },
    ],
  };

  // ditBonjours(prenom) {
  //   console.log("Bonjour " + prenom);
  //   console.log(this);
  // }

  ditBonjours(e) {
    console.log(e.target);
  }

  ditBonjour = () => {
    // console.log(alert("salut"));
    console.log(this);
  };

  render() {
    return (
      <>
        {/* <button onClick={() => alert("salut")}> Anniv</button> */}
        <button onClick={this.ditBonjour}> Anniv</button>
        {/* <button onClick={() => this.ditBonjours("joe")}> Anniversaire</button> */}

        {/* <button onClick={this.ditBonjours.bind(this, "joe")}> */}

        <button onClick={(e) => this.ditBonjours(e)}>Anniversaire</button>

        <Horloge />
        <Personne
          nom={this.state.personnes[0].nom}
          age={this.state.personnes[0].age}
          sex={this.state.personnes[0].sex}
        />
        <Personne {...this.state.personnes[1]} />
        <Personne {...this.state.personnes[2]} />
      </>
    );
  }
}

export default App;
