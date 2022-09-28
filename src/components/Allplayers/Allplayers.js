import React from 'react';
import SinglePlayer from '../SingtlePlayer/SinglePlayer';
import './Allplayers.css'
const Allplayers = ({players,cart,setCart}) => {
    return (
        <div>
            <div className='card-container'>
             {
                 players.map(player => <SinglePlayer player={player} key={player.idPlayer} cart={cart} setCart={setCart}></SinglePlayer>)
             }
          </div>
        </div>
    );
};

export default Allplayers;