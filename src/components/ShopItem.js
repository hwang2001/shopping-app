import React from 'react'
import './ShopItem.css'

function ShopItem(props) {
    return(
        <div className="box">
            <img className = "photo" src = {props.item.image} alt = "one such item" />
            <br />
            <p>{props.item.title}</p>
            <p>Price: ${props.item.price}</p>
            <button onClick={() => {props.handleChange(props.item.id)}}> ADD TO CART </button>
        </div>
    );
}

export default ShopItem;