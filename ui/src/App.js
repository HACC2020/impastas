import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <div >
      <iframe height="430" width="350" src="https://bot.dialogflow.com/8ccb78e0-5510-4842-9fe3-2b0447d3ef67"></iframe>
      </div>
    </div>
  );
}

export default App;
