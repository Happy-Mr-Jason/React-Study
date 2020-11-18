import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  state = {
    characters: [
      {
        name: "Person1",
        job: "Job1",
      },
      {
        name: "Person2",
        job: "Job2",
      },
      {
        name: "Person3",
        job: "Job3",
      },
      {
        name: "Person4",
        job: "Job4",
      },
      {
        name: "Person5",
        job: "Job5",
      },
      {
        name: "Person6",
        job: "Job6",
      },
    ],
  };

  componentDidMount() {
    const url = "/data";
    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          characters : [...result]
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }

  removeCharacter = (index) => {
    const { characters } = this.state;
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  };

  handleSubmit = (character) => {
    this.setState({
      characters: [...this.state.characters, character],
    });
  };
}

export default App;
