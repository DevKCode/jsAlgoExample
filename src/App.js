import logo from './logo.svg';
import './App.css';

function App() {
  console.log('test');
  let logInfo = [0, 1, 5, 8, 9, 10];
  logInfo.forEach((element, index) => {

  });
  console.log(getLogPrice(5))
  function getLogPrice(logSize) {
    let maxPrice = 0;
    for (let index = 0; index < logInfo.length / 2; index++) {
      let size = (logInfo.length - 1) - (index)
      console.log(`${index}-${size}`)
      let price = logInfo[index] + logInfo[size];
      console.log(`best price : ${price}`)

    };
    return logInfo[logSize]
  }
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
    </div>
  );
}

export default App;
