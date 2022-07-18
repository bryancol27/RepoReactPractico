import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/logIn.scss';

import yardSaleIcon from '@logos/logo_yard_sale.svg'

const LogIn = () => {
    const form = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit!')
        const formData = new FormData(form.current);
        const data = {
            username: formData.get('email'),
            passWord: formData.get('password')
        };

        console.log(data)
    };

    return (
        <div className="login">
            <div className="form-container">
            <img src={yardSaleIcon} alt="logo" className="logo-r" />
        
            <form action="/" className="form" ref={form}> 

                <label htmlFor="email" className="label">Email address</label>
                <input type="text" name="email" placeholder="platzi@example.cm" className="input input-email" />
        
                <label htmlFor='password' className="label">Password</label>
                <input type="password" name="password" placeholder="*********" className="input input-password" autoComplete='on'/>
        
                <button 
                    type='submit'
                    className="primary-button login-button" 
                    onClick={handleSubmit}>
                    Log In
                </button>

                <a href="/">Forgot my password</a>

            </form>
        
            <button className="secondary-button signup-button">Sign up</button>
            </div>
        </div>
    )
};

export { LogIn }
