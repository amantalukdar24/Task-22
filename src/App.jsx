import { useState } from 'react'

import './App.css'
import Api from './components/Api.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="Navbar">Photos</div>
    <Api/>
    </>
  )
}

export default App
