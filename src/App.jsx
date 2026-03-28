import { useState } from 'react'

import './App.css'
import Navbar from './assets/components/navbar/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>

    </>
  )
}

export default App
