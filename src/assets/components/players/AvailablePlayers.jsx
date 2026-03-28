import React from 'react';
import Card from './Card';

const AvailablePlayers = ({ players }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {players.map(promo => (
        <Card key={promo.id} players={promo} />
      ))}
    </div>
  );
};

export default AvailablePlayers;