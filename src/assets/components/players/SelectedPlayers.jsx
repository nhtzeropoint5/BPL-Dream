import React from 'react';
import Card from './Card';
import { FaUser } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const SelectedPlayers = ({ selectedPlayer, setSPlayer, setCoin, coin}) => {

const handleDelete = (promo) => {
  const filteredPlayers = selectedPlayer.filter(
    (player) => player.playerName !== promo.playerName
  );

  setSPlayer(filteredPlayers);

  setCoin(coin + parseInt(promo.price));
};
  return (
    <div>{
        selectedPlayer.length === 0 ?
      <div className='h-[200px] flex items-center justify-center flex-col gap-4'><h2 className='font-semibold text-xl'>No Player Selected</h2>
      <p>Go to available players to select players</p></div>
      :  selectedPlayer.map((promo, index) => {
          return(
            <div key={index} className='flex items-center gap-6 justify-between p-10 rounded-2xl border m-3'>


              <div className='flex items-center gap-6'>
                <img src={promo.playerImage} alt={promo.playerName} className='h-[75px] w-auto  rounded-md'/>

                <div>
                  <h2 className='flex items-center gap-2 font-semibold text-2xl'><FaUser></FaUser>{promo.playerName}</h2>
                  <p className=''>{promo.playerType}</p>
                </div>

              </div>
              <button className='btn btn-error' onClick={()=>  handleDelete(promo)}>
                <MdDelete></MdDelete>
              </button>
            </div>
          )
        })
      }
  </div>);
};

export default SelectedPlayers;