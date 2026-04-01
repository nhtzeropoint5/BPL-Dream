import React, { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers';
import SelectedPlayers from './SelectedPlayers';

const Players = ({prom, setCoin, coin}) => {

    const pro = use(prom);

    const [sType, setSType] = useState('available');

    const handlesype = (val) =>{
    setSType(val);
    }

    const[sPlayer, setSPlayer] = usestate([]);
    // console.log(pro);

 return (
    <div className='container mx-auto my-[60px] '>


   <div className="flex justify-between gap-4 items-center mb-[20px] w-[97%]">
{
    sType === 'available'
    ? <h2 className='font-bold text-xl'>Available Players</h2>
    : <h2 className='font-bold text-xl'>Selected Players ({sPlayer.length}/{pro.length})</h2>
}

        
        <div className="flex">
            <button onClick={() => {handlesype('available')}} className ={`btn ${sType === 'available' ? `bg-[#E7FE29]` : ``}  rounded-r-none rounded-l-xl`}>Available</button>
            <button onClick={() => {handlesype('selected')}} className={`btn ${sType === 'selected' ? `bg-[#E7FE29]` : ``}  rounded-l-none rounded-r-xl`}>Selected {sPlayer.length}</button>
        </div>
      </div>


   {
                sType === 'available'
                    ? <AvailablePlayers players={pro} setCoin = {setCoin} coin={coin} setSPlayer={setSPlayer} selectedPlayer={sPlayer} />
                    : <SelectedPlayers selectedPlayer={sPlayer} />
    }
    
    </div>
  );
};

export default Players;