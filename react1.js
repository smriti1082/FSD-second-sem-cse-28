import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <audio controls>
        <source src="" type="audio/mp3/"></source>
      </audio>
      <video controls>
        <source src="" type="video/mp4/"></source>
      </video>
      <iframe src="https://www.youtube.com/embed/FpM9m12qjZE"></iframe>
      <img src="https://images.pexels.com/photos/35383830/pexels-photo-35383830.jpeg" width="500" height="500"></img><br></br>
      <button>Click ME</button>
    <h2>Hello ABESEC</h2>
    <p>Hello Raj</p>
   
    </div>
  )
}

export default App