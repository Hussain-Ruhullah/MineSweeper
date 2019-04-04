import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import Hello from './components/Hello/Hello';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to MineSweeper</h1>
        </header>
        <p className="App-intro">
          <code>Coolest Game Ever! :D</code>
          <Hello name="Hussain" enthusiasmLevel={10}/>
        </p>
      </div>
    );
  }
}

export default App;
