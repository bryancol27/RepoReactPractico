import React, { useState, useContext } from 'react';
import '@styles/Header.scss';

//components and others
import { MiniMenu } from './MiniMenu.jsx';
import { OrderPreview } from '../components/OrderPreview.jsx';
import { ShoppingCard } from '../components/ShoppingCard.jsx';

//imgs o logos
import  menu from '@icons/icon_menu.svg';
import  logo from '@logos/logo_yard_sale.svg';
import  shoppingCart from '@icons/icon_shopping_cart.svg';

//context
import { AppContext } from '../context/AppContext.js';

const Header = () => {

    const [ toggle, setToggle ] = useState(false);
    const [ toggleCheckOut, setToggleCheckOut] = useState(false);

    const { state }=  useContext(AppContext);

    return (
        <nav>
            <img src={menu} alt="menu" className="menu" />
        
            <div className="navbar-left">
                <img src={logo} alt="logo" className="nav-logo" />
            
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>

                    <li>
                        <a href="/">Clothes</a>
                    </li>

                    <li>
                        <a href="/">Electronics</a>
                    </li>

                    <li>
                        <a href="/">Furnitures</a>
                    </li>

                    <li>
                        <a href="/">Toys</a>
                    </li>

                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>
        
            <div className="navbar-right">
                <ul>

                    <li className="navbar-email"
                        onClick={() => setToggle(!toggle)}

                    >platzi@example.com</li>

                    <li className="navbar-shopping-cart"
                        onClick={() => setToggleCheckOut(true)}>
                        
                        <img src={shoppingCart} alt="shopping cart" />
                        <div>{state.cart.length}</div>
                    </li>

                </ul>
            </div>
            {toggle && <MiniMenu />}
            {toggleCheckOut &&
            <OrderPreview toggle={setToggleCheckOut}>
                {state.cart.map(element => <ShoppingCard key={element.title} product={element}/>)}
            </OrderPreview>}
        </nav>
    )
};

export { Header }
