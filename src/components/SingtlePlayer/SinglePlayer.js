import React from 'react';
import './SinglePlayer.css'
const SinglePlayer = ({ player,cart,setCart }) => {
  
    const { idPlayer, strPlayer, strNationality, strCutout } = player;
    
    const handleAddToCart = () => {
        const info = {
            idPlayer, 
            strPlayer,
            strNationality,
            strCutout,
            price: 115
        }
        const isExits = cart.find(p => p.idPlayer === info.idPlayer);
        if (isExits) {
            return;
        }
        if (cart.length > 4) {
            return;
        }
        if (cart?.length) {
            setCart([...cart, info]);
            return;
        } else {
            setCart([info])
            return;
       }
        
    }
    const handleBookmark = () => {
        const info = {
            idPlayer,
            strPlayer,
            strNationality,
            strCutout,
            quintity: 1,
            bookmark:'true'
        }
        const bookMark = localStorage.getItem('bookmark');
        const parseBookMark = JSON.parse(bookMark);
        if (parseBookMark) {
            const isExits = parseBookMark.find(p => p.idPlayer === info.idPlayer);
            if (isExits) {
                isExits.quintity = isExits.quintity + 1;
                localStorage.setItem('bookmark',JSON.stringify(parseBookMark))
            }
            else {
                 localStorage.setItem('bookmark', JSON.stringify([...parseBookMark, info]));
            }
           
           
        }
        else {
            localStorage.setItem('bookmark', JSON.stringify([info]));
             console.log('naiii')
        }
    }
    return (
        <div className='card' data-aos="fade-up">
            <img className='img-player' src={strCutout} alt="" />
            <h3>{strPlayer}</h3>
            <p>{strNationality}</p>
            <button className='card-btn'>Details</button>
            <button onClick={handleAddToCart} className='card-btn'>Add To Cart</button>
            <button onClick={handleBookmark} className='card-btn'>Bookmark</button>
        </div>
    );
};

export default SinglePlayer;