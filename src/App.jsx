import { useState } from 'react'

import './App.css'
import Navbar from './assets/components/navbar/navbar'
import Banner from './assets/components/homepage/Banner'
import Players from './assets/components/players/Players'
import { Suspense } from 'react'
// import AvailablePlayers from './assets/components/players/AvailablePlayers'


  const fetchPlayers = async () =>{
      const res = await fetch('/data.json');
      return res.json();

  }

function App() {
  const [coin, setCoin] = useState(500000);

 const promisePlay = fetchPlayers();
 
  return (
    <>
    <Navbar coin={coin}></Navbar>
    <Banner></Banner>
    <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
    <Players prom = {promisePlay} setCoin={setCoin} coin = {coin}></Players>
    </Suspense>
    
    </>
  )
}

export default App
