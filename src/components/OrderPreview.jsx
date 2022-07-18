import React, { useContext } from 'react';
import '../styles/orderPreview.scss';

import arrow from '@icons/flechita.svg';
import { AppContext } from '../context/AppContext';

const OrderPreview = ({ children, toggle }) => {

    const { state } = useContext(AppContext);

    return (
        <aside className="product-detail">
                <div className="title-container">
                    <img src={arrow} alt="arrow" onClick={() => toggle(false)}/>
                    <p className="title">My order</p>
                </div>
                
                <div className="my-order-content">
                
                    {children}

                    <div className='my-order-price'>
                        <p>Total:</p>
                        <p>${state.currentAmmount}</p>
                    </div>

                    <button className="primary-button">
                        Checkout
                    </button>
                </div>
        </aside>
    )
};

export { OrderPreview }