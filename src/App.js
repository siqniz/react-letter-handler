import React, { Component } from 'react';
import './App.css';
import LetterViewer from './containers/LetterViewer/LetterViewer';



class App extends Component {
  render() {
    return (
      <div className="App">
        <LetterViewer />
      </div>
    );
  }
}

export default App;
