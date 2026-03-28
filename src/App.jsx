import { useState } from 'react'

import './App.css'
import Navbar from './assets/components/navbar/navbar'
import Banner from './assets/components/homepage/Banner'
import Players from './assets/components/players/Players'
import { Suspense } from 'react'

  const fetchPlayers = async () =>{
      const res = await fetch('/data.json');
      return res.json();

  }

function App() {
  const [count, setCount] = useState(0);

 const promisePlay = fetchPlayers();
 
  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
    <Players prom = {promisePlay}></Players>
    </Suspense>
    </>
  )
}

export default App
