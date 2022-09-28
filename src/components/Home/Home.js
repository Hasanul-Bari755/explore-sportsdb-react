import React, { useEffect, useState } from 'react';
import Allplayers from '../Allplayers/Allplayers';
import { ToastContainer, toast } from 'react-toastify';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
  import swal from 'sweetalert';
import './Home.css'
const Home = () => {
    const [search, setSearch] = useState("");
    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`)
            .then(res => res.json())
        .then(data => setPlayers(data.player))
    },[search])
    const handleDelete = (id) => {
        const afterDelete = cart.filter(pro => pro.idPlayer !== id);
        setCart(afterDelete)
        toast('wow delete from cart');
        swal("Good job!", "You clicked the button!", "success");
        
   }
    return (
        <div>
            <div className='home-container'>
                <div className='left-container'>
                    <input onChange={(e)=>setSearch(e.target.value) } type="text" className='search-input' />
                    <button className='search-btn'>Search</button>
                    <Allplayers players={players} cart={cart} setCart = {setCart}></Allplayers>
                </div>
                <div className='right-container'>
                    <div className='cart'>
                        <p>This is player Cart</p>
                        {
                            cart.map(player => (
                                <div className='card-info'>
                                    <li>{player.strPlayer}</li>
                                    <button onClick={() => handleDelete(player.idPlayer)} className='card-info-btn'>x</button>
                                    
                                </div>
                            ))
                                
                        }

                     </div>
                </div>

            </div>
        </div>
    );
};

export default Home;