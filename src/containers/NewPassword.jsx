import React from 'react'
import '../styles/newPassword.scss'
import { Link } from 'react-router-dom';

import yardSaleLogo from '@logos/logo_yard_sale.svg'

const NewPassword = () => {
    return (
        <div className='login'>
            <div className="form-container">
            
                <img src={yardSaleLogo} alt="logo" className="logo-yar" />
            
                <h1 className="title">Create a new password</h1>
                <p className="subtitle">Enter a new passwrdyue account</p>
            
                <form action="/" className="form">
                    <label htmlFor="password" className="label">Password</label>
                    <input type="password" id="password" placeholder="*********" className="input input-password" />
            
                    <label htmlFor="new-password" className="label">Password</label>
                    <input type="password" id="new-password" placeholder="*********" className="input input-password" />
            
                    <input type="submit" value="Confirm" className="primary-button login-button" />
                    <Link to="/RecoverySend">Home</Link>
                </form>

            </div>
        </div>
    )
}

export { NewPassword }
