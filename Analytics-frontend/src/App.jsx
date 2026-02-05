import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="max-h-screen">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </div>
  )
}

export default App
