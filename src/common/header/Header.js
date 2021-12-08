import React, { useState, useEffect } from "react";
import './Header.css';
import logo from '../../assets/logo.svg';
import Button from '@material-ui/core/Button';

const Logo = () => {
    return (
        <div id="logo">
            <img src={logo} />
        </div>
    );
}


const Header = (props) => {

    const [loginStatus, setLoginStatus] = useState(false);

    function LoginButton() {

        const buttonText = (loginStatus) ? 'Logout' : 'Login';
        function handleLoginButtonPress() {
            setLoginStatus(!loginStatus);
        }

        return (
            <Button
                id='btnLogin'
                variant='contained'
                color='default'
                onClick={() => {
                    handleLoginButtonPress();
                }}
            >
                {buttonText}
            </Button>
        );
    }

    function BookShowButton() {

        function handleBookShowButtonPress() {
            if(loginStatus){                
            }
        }

        return (
            <Button
                id='btnBookShow'
                variant='contained'
                color='primary'
                onClick={() => {
                    handleBookShowButtonPress();
                }}
            >
                Book Show
            </Button>
        );
    }

    return (
        <div className="header">
            <Logo />
            <LoginButton/>
            <BookShowButton/>            
        </div>
    );
}

export default Header;