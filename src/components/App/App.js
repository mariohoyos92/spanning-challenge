import React, { Component } from 'react';

import Top from '../Top/Top';
import Console from '../MainConsole/Console/Console'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="atm-wrapper">
          <Top />
          <Console />
        </div>

      </div>
    );
  }
}

export default App;
