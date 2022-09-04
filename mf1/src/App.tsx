import React from 'react';
import logo from './logo.svg';
import './App.css';

// 引入 app2 模块作为组件
import RemoteApp from 'app2/App2'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          这里是APP1
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <RemoteApp />
    </div>
  );
}

export default App;
