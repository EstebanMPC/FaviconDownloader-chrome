import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const onClick = async () => {
    let[tab] = await chrome.tabs.query({ active: true })
    chrome.scripting.executeScript({
      target: {tabId : tab.id!},
      func: () => {
        alert('Hello hello, Hola');
      }
    });
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Your Favicon Collection</h1>
      <div className="card">
        <button onClick={onClick}>
          Click me
        </button>
        <div>
          <div>
            <img src="https://assets.algoexpert.io/static/images/main-favicon.png"></img>
            <h3>algoexpert</h3>
          </div>
          <div>
            <img src="https://assets.algoexpert.io/static/images/main-favicon.png"></img>
            <h3>algoexpert</h3>
          </div>
          <div>
            <img src="https://assets.algoexpert.io/static/images/main-favicon.png"></img>
            <h3>algoexpert</h3>
          </div>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
