import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext.js';

import addToCardImg from '@icons/bt_add_to_cart.svg';
import addTedoCardImg from '@icons/bt_added_to_cart.svg';

const ProductCard = ({ product }) => {
    const [ cart, setCardState ] = useState(false)
    const { addToCard, removeToCard } = useContext(AppContext) 

    const handleClick = item => {
        if(!cart){
            addToCard(item);
        }else{
            removeToCard(item)
        }
        setCardState(!cart);
    }

    return (
        <div className="product-card" >
            <img src={product.images[0]} alt={product.title} />

            <div className="product-info">
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>

                <figure onClick={() => handleClick(product)}>
                    {!cart && <img src={addToCardImg} alt="" />}
                    {cart && <img src={addTedoCardImg} alt="" />}
                </figure>
            </div>
        </div>
        );
};

export { ProductCard }
