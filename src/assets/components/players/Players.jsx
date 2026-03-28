import React, { use } from 'react';
import AvailablePlayers from './AvailablePlayers';

const Players = ({prom}) => {

    const pro = use(prom);
    // console.log(pro);

 return (
    <div className='container mx-auto '>
      <h1>Players: {pro.length}</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
    {
     pro.map(promo => (
    <AvailablePlayers players={promo}></AvailablePlayers>
     ))

    }
      </div>
    
    </div>
  );
};

export default Players;