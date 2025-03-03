import React from 'react';
import './style/SignUp.css';
import './Media queries/MediaQSignUp.css';
import logoImg from '../Home Grocery/image/E-SHOP-see1 removebg-preview.png';
import { Link } from 'react-router-dom';
import faceBook from './image/icons8-facebook-48.png';
import google from './image/icons8-google-48.png';
import apple from './image/icons8-apple-50.png';

export default function SignUp() {
  return (
    <div className='signUpMain'>
        <div className="signUpMainContainer container-fluid">
            <div className="row">
                <div className="signUpFormContainer">
                    <div className="SignUpFormContainer">
                        <form className='signUpForm'>
                            <Link  to={'/home'} className='signUpLinkLogo'> 
                                <img src={logoImg} alt="logo img" className='logoImgSignUp img-fluid'/>
                            </Link>
                            <div className="SignUpFormTextContainer">
                                <p className='SignUpWelcome'>Welcome to E-SHOP-SEE</p>
                                {/* <p className='signUpYourAcc'>Create an account</p> */}
                            </div>
                            <label htmlFor="name" className='SignUpLabel'>Name</label>
                            <div className="nameContainer input-group">
                                <input type="text" id='usernameEmail' className='SignUpInputBox' required placeholder='Name' />
                            </div>
                            <label htmlFor="email" className='SignUpLabel'>Email</label>
                            <div className="emailContainer input-group">
                                <input type="email" id='email' className='SignUpInputBox' required placeholder='Email' />
                            </div>
                            <label htmlFor="password" className='SignUpLabel'>Password</label>
                            <div className="passwordContainer input-group">
                                <input type="password" id='password' className='SignUpInputBox' required placeholder='Enter your password' />
                            </div>
                            <p className='SignUpAgreeToTerms'>
                                <input type="checkbox" className='SignUpAgreeToTermsCheckBox' required />
                                I agree to the
                                <Link className='SignUpTermsAndConditions' to={'/termsAndConditions'}>
                                    Terms & Conditions
                                </Link>
                            </p>
                            <div className="signUpButtonContainer">
                                <button type='submit' className='signUpButton'>Create account</button>
                            </div>
                            <p className='SignUpHaveAccount'>Already have an account? <Link className='signUpAccount' to={'/login'}>Login</Link></p>
                            <div className="SignUpNewAccContainer">
                                <hr className='SignUpHr1' /> 
                                <p className='SignUpOr'>or sign up with</p>
                                 <hr className='SignUpHr2' />
                            </div>
                            <div className="signUpIconsContainer">
                                <Link className='signUpLogo1'>
                                    <img src={faceBook} alt="faceBook" />
                                </Link>
                                <Link className='signUpLogo2'>
                                    <img src={google} alt="faceBook" />
                                </Link>
                                <Link className='signUpLogo3'>
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
