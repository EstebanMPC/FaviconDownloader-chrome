import './App.css'

function App() {
  const onClick = async () => {
    chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
      function openTab(tabs){
          window.open(`http://www.google.com/s2/favicons?domain=${tabs[0].url}`);
      }
    );
  }

  return (
    <div id="container">
      <h1>😎</h1>
      <h3>FaviconDownloader</h3>
      <button onClick={onClick}>
          Download Favicon
      </button>
    </div>
  )
}

export default App
