import React from 'react';
import './style/Login.css';
import './Media queries/MediaQLogin.css';
import loginbg from './image/2792340.jpg';
import logoImg from '../Home Grocery/image/E-SHOP-see1 removebg-preview.png';
import { Link } from 'react-router-dom';
import faceBook from './image/icons8-facebook-48.png';
import google from './image/icons8-google-48.png';
import apple from './image/icons8-apple-50.png';

export default function Login() {
  return (
    <div className='loginMain'>
        <div className="loginMainContainer container-fluid">
            <div className="row">
                <div className="col-12 col-md-6 logBgContainer">
                    <Link className='d-none d-sm-none d-md-block' to={'/home'}>
                        <img src={loginbg} alt="login page background" className='logBg img-fluid' />
                    </Link>
                    <Link  to={'/home'} className='loginLinkLogo'> 
                        <img src={logoImg} alt="logo img" className='logoImgLogin img-fluid'/>
                    </Link>
                </div>
                <div className="col-12 col-md-6 loginFormContainer">
                    <div className="formContainer">
                        <form className='loginForm'>
                            <div className="formTextContainer">
                                <p className='Welcome'>Welcome to E-SHOP-SEE</p>
                                <p className='loginYourAcc'>Login to your account</p>
                            </div>
                            <label htmlFor="usernameEmail" className='label'>Username or Email</label>
                            <div className="userNameContainer input-group">
                                <input type="text" id='usernameEmail' className='InputBox' required placeholder='Username or Email' />
                            </div>
                            <label htmlFor="password" className='label'>Password</label>
                            <div className="passwordContainer input-group">
                                <input type="password" id='password' className='InputBox' required placeholder='Password' />
                            </div>
                                <Link to={'/forgotPassword'} className='forgotPassword'>Forgot Password</Link>
                            <div className="loginButtonContainer">
                                {/* link for path */}
                                {/* <Link to={'#'} className='login-link-btn '> */}
                                    <button type='submit' className='loginButton'>Login</button>
                                {/* </Link> */}
                            </div>
                            <p className='newToShopSee'>New to E-SHOP-SEE? <Link className='createAccount' to={'/createAccount'}>Create an account</Link></p>
                            <div className="newAccContainer">
                                <hr className='hr1' /> 
                                <p className='or'>or sign login with</p>
                                 <hr className='hr2' />
                            </div>
                            <div className="loginIconsContainer">
                                <Link className='loginLogo1'>
                                    <img src={faceBook} alt="faceBook" />
                                </Link>
                                <Link className='loginLogo2'>
                                    <img src={google} alt="faceBook" />
                                </Link>
                                <Link className='loginLogo3'>
                                    <img src={apple} alt="faceBook" />
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
