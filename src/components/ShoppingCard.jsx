import React, { useContext } from 'react';

import closeBtn from '@icons/icon_close.png';

import { AppContext } from '../context/AppContext';

const ShoppingCard = ({ product }) => {
    const { removeToCard } = useContext(AppContext) 

    return (
        <div className="shopping-cart">
            <figure>
                <img src={product.images[0]} alt="bike" />
            </figure>
            <p>{product.title}</p>
            <p>${product.price}</p>
            <button className='shopping__card__button-close'
                onClick={() => removeToCard(product)}>
                <img src={closeBtn} alt="close" />
            </button>
        </div>
    )
};

export { ShoppingCard }
