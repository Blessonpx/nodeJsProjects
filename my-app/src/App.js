import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';


function Header(){
  return (
    <div className="App">
      <header>
    <h1>Base Line</h1>
    <p>All That lays below the header</p>
  </header>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to BOOM!!!!
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
    </div>
  );
}

export default App;

