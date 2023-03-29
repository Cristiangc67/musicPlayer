import { useState } from 'react'
import './App.css'


import AudioPlayer from './components/AudioPlayer'

function App() {
  const [count, setCount] = useState(0)

  /* 
  <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
   */
  return (
    <div className="App">
      <AudioPlayer/>
      
    </div>
  )
}

export default App
