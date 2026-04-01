import React from 'react';
import Card from './Card';
import { FaUser } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const SelectedPlayers = ({ selectedPlayer }) => {
  return (
    <div>{
        selectedPlayer.map((promo, index) => {
          return(
            <div key={index} className='flex items-center gap-6 justify-between p-10 rounded-2xl border'>
              <div>
                <img src="" alt="" />
                <div>
                  <h2 className='flex items-center gap-2'><FaUser></FaUser>{promo.name}</h2>
                  <p className=''>{promo.playerType}</p>
                </div>
              </div>
              <button>
                <MdDelete></MdDelete>
              </button>
            </div>
          )
        })
      }
  </div>);
};

export default SelectedPlayers;