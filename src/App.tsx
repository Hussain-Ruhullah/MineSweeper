import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import Hello from './containers/Hello';

export interface Props {
}

interface State {
}

class App extends React.Component<Props, State> {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to MineSweeper</h1>
        </header>
        <p className="App-intro">
          <code>Coolest Game Ever! :D</code>
        </p>
        <div><Hello /></div>
      </div>
    );
  }
}

export default App;
