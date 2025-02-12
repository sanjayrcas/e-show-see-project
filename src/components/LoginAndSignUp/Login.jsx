import React from 'react';
import './style/Login.css';
import './Media queries/MediaQLogin.css';
import loginbg from './image/2792340.jpg';
import logoImg from '../Home Grocery/image/E-SHOP-see1 removebg-preview.png';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className='loginMain'>
        <div className="loginMainContainer container-fluid">
            <div className="row">
                <div className="col-6 logBgContainer">
                    <Link>
                        <img src={loginbg} alt="login page background" className='logBg img-fluid' />
                    </Link>
                    <Link className='loginLinkLogo'> 
                        <img src={logoImg} alt="logo img" className='logoImgLogin img-fluid'/>
                    </Link>
                </div>
                <div className="col-6 loginFormContainer">
                    
                </div>
            </div>
        </div>
    </div>
  )
}
