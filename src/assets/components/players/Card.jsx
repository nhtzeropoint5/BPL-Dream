import React, { useState } from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';

const Card = ({players, setCoin, coin}) => {

const [isSelected, setIsSelected] = useState(false);  

const handleChoosedPlayer = () =>{
const price = players.price;
setIsSelected(true);
let aukad = coin - price;

if(aukad>=0){
  alert(`${players.name} is selected`);
  setCoin(coin - price);
}
else{
alert(`No enough money to buy${players.name}`);
return;
}

}


    return (
    <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={players.playerImage}
      alt="img" />
  </figure>
  <div className="card-body">
    <h2 className="card-title"><FaUser></FaUser>{players.playerName}</h2>

        <div className='flex justify-between'>
            <div className="flex gap-2 items-center">
            <FaFlag></FaFlag><span>{players.country}</span>
            </div>
            
            <button className='btn'>{players.playerType}</button>
        </div>
        <div className="divider"></div>
        <h2 className='font-bold'>Rating</h2>



<div className="flex justify-between box-border font-bold">
  <span>{players.battingStyle}</span>
  <span>{players.bowlingStyle}</span>
</div>


    <div className="card-actions justify-between items-center">
        <p className='font-bold'>Price : {players.price} </p>

      <button onClick={() => {handleChoosedPlayer()}}className="btn" disabled = {isSelected ? true : false }>{isSelected ? 'Selected' : 'Choose Player'}</button>

    </div>
  </div>
</div>
    );
};

export default Card;