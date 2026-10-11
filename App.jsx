import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="container">
        <h1 className="title">3D Image Gallery</h1>
        <div className="image-grid">
          <div className="card">
            <img src="PAVAN KALYAN.png" alt="PAVAN KALYAN"/>
            <div className="layer">PAVAN KALYAN</div>
          </div>
        </div>
       </div>
    </>
  )
}

export default App
