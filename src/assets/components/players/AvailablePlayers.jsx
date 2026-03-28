import React from 'react';
import Card from './Card';

const AvailablePlayers = ({ players, setCoin, coin }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {players.map(promo => (
        <Card key={promo.id} players={promo} setCoin={setCoin} coin={coin}/>
      ))}
    </div>
  );
};

export default AvailablePlayers;