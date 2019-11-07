import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    userInput: ''
  }

  inputChangeHandler = (event) => {
    this.setState({ userInput: event.target.value });
  }
  
  render() {


    return (
      <div className="App">
        <input type="text"
          onChange={this.inputChangeHandler}
          value={this.state.userInput}
        />
        <p>
          { this.state.userInput }
        </p>
        <ValidationComponent
        textLength={ this.state.userInput.length }
        />

        <CharComponent

        />
      </div>
    );
  }
}

export default App;
