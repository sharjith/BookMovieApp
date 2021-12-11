import React, { useState, useEffect } from 'react';

import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';
import { Link } from 'react-router-dom';
import axios from 'axios';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
const TabContainer = function (props) {
    return (
        <Typography component="div" style={{ padding: 0, textAlign: 'center' }}>
            {props.children}
        </Typography>
    )
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
}
const Header = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [value, setValue] = useState(0);
    const [username, setUsername] = useState("");
    const [usernameRequired, setUsernameRequired] = useState("dispNone");
    const [loginPasswordRequired, setLoginPasswordRequired] = useState("dispNone");
    const [loginPassword, setloginPassword] = useState("");
    const [firstnameRequired, setFirstnameRequired] = useState("dispNone");
    const [firstname, setfFirstname] = useState("");
    const [lastnameRequired, setLastnameRequired] = useState("dispNone");
    const [lastname, setLastname] = useState("");
    const [emailRequired, setEmailRequired] = useState("dispNone");
    const [email, setEmail] = useState("");
    const [registerPasswordRequired, setRegisterPasswordRequired] = useState("dispNone");
    const [registerPassword, setRegisterPassword] = useState("");
    const [contactRequired, setContactRequired] = useState("dispNone");
    const [contact, setContact] = useState("0");
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem("access-token") == null ? false : true);



    const openModalHandler = () => {
        setModalIsOpen(true);

    }

    const closeModalHandler = () => {
        setModalIsOpen(false);
    }

    const tabChangeHandler = (event, value) => {
        setValue(value);
    }

    const loginClickHandler = () => {
        username === "" ? setUsernameRequired("dispBlock") : setUsernameRequired("dispNone");
        loginPassword === "" ? setLoginPasswordRequired("dispBlock") : setLoginPasswordRequired("dispNone");

        const headers = {
            "Authorization": window.btoa(username + ":" + loginPassword),
            'Content-Type': 'application/json',
            'Cache-Control': "no-cache"

        }
        axios.post(props.baseUrl + "auth/login", {}, {
            auth: {
                username: username,
                password: loginPassword
            }
        }).then(res => {
            sessionStorage.setItem("uuid", res.data.id);
            sessionStorage.setItem("access-token", res.headers['access-token']);

            setLoggedIn(true)

            closeModalHandler();
        });

    }

    const inputUsernameChangeHandler = (e) => {
        setUsername(e.target.value);
    }

    const inputLoginPasswordChangeHandler = (e) => {
        setloginPassword(e.target.value)
    }

    const registerClickHandler = () => {
        firstname === "" ? setFirstnameRequired("dispBlock") : setFirstnameRequired("dispNone");
        lastname === "" ? setLastnameRequired("dispBlock") : setLastnameRequired("dispNone");
        email === "" ? setEmailRequired("dispBlock") : setEmailRequired("dispNone");
        registerPassword === "" ? setRegisterPasswordRequired("dispBlock") : setRegisterPasswordRequired("dispNone");
        contact === "" ? setContactRequired("dispBlock") : setContactRequired("dispNone");

        let dataSignup = {
            "email_address": email,
            "first_name": firstname,
            "last_name": lastname,
            "mobile_number": contact,
            "password": registerPassword
        };

        axios.post(props.baseUrl + "signup", dataSignup).then(res => {
            setRegistrationSuccess(true);
        });

    }

    const inputFirstNameChangeHandler = (e) => {
        setfFirstname(e.target.value);
    }

    const inputLastNameChangeHandler = (e) => {
        setLastname(e.target.value);
    }

    const inputEmailChangeHandler = (e) => {
        setEmail(e.target.value)
    }

    const inputRegisterPasswordChangeHandler = (e) => {
        setRegisterPassword(e.target.value);
    }

    const inputContactChangeHandler = (e) => {
        setContact(e.target.value)
    }

    const logoutHandler = (e) => {
        sessionStorage.removeItem("uuid");
        sessionStorage.removeItem("access-token");
        setLoggedIn(false);

    }

    return (
        <div>
            <header className="app-header">
                <img src={logo} className="app-logo" alt="Movies App Logo" />
                {!loggedIn ?
                    <div className="login-button">
                        <Button variant="contained" color="default" onClick={openModalHandler}>
                            Login
                        </Button>
                    </div>
                    :
                    <div className="login-button">
                        <Button variant="contained" color="default" onClick={logoutHandler}>
                            Logout
                        </Button>
                    </div>
                }
                {props.showBookShowButton === "true" && !loggedIn
                    ? <div className="bookshow-button">
                        <Button variant="contained" color="primary" onClick={openModalHandler}>
                            Book Show
                        </Button>
                    </div>
                    : ""
                }

                {props.showBookShowButton === "true" && loggedIn
                    ? <div className="bookshow-button">
                        <Link to={"/bookshow/" + props.id}>
                            <Button variant="contained" color="primary">
                                Book Show
                            </Button>
                        </Link>
                    </div>
                    : ""
                }

            </header>
            <Modal
                ariaHideApp={false}
                isOpen={modalIsOpen}
                contentLabel="Login"
                onRequestClose={closeModalHandler}
                style={customStyles}
            >
                <Tabs className="tabs" value={value} onChange={tabChangeHandler}>
                    <Tab label="Login" />
                    <Tab label="Register" />
                </Tabs>

                {value === 0 &&
                    <TabContainer>
                        <FormControl required>
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <Input id="username" type="text" username={username} onChange={inputUsernameChangeHandler} />
                            <FormHelperText className={usernameRequired}>
                                <span className="red">required</span>
                            </FormHelperText>
                        </FormControl>
                        <br /><br />
                        <FormControl required>
                            <InputLabel htmlFor="loginPassword">Password</InputLabel>
                            <Input id="loginPassword" type="password" loginpassword={loginPassword} onChange={inputLoginPasswordChangeHandler} />
                            <FormHelperText className={loginPasswordRequired}>
                                <span className="red">required</span>
                            </FormHelperText>
                        </FormControl>
                        <br /><br />
                        {loggedIn === true &&
                            <FormControl>
                                <span className="successText">
                                    Login Successful!
                                </span>
                            </FormControl>
                        }
                        <br /><br />
                        <Button variant="contained" color="primary" onClick={loginClickHandler}>LOGIN</Button>
                    </TabContainer>
                }

                {value === 1 &&
                    <TabContainer>
                        <FormControl required>
                            <InputLabel htmlFor="firstname">First Name</InputLabel>
                            <Input id="firstname" type="text" firstname={firstname} onChange={inputFirstNameChangeHandler} />
                            <FormHelperText className={firstnameRequired}>
                                <span className="red">required</span>
                            </FormHelperText>
                        </FormControl>
                        <br /><br />
                        <FormControl required>
                            <InputLabel htmlFor="lastname">Last Name</InputLabel>
                            <Input id="lastname" type="text" lastname={lastname} onChange={inputLastNameChangeHandler} />
                            <FormHelperText className={lastnameRequired}>
                                <span className="red">required</span>
                            </FormHelperText>
                        </FormControl>
                        <br /><br />
                        <FormControl required>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input id="email" type="text" email={email} onChange={inputEmailChangeHandler} />
                            <FormHelperText className={emailRequired}>
                                <span className="red">required</span>
                            </FormHelperText>
                        </FormControl>
                        <br /><br />
                        <FormControl required>
                            <InputLabel htmlFor="registerPassword">Password</InputLabel>
                            <Input id="registerPassword" type="password" registerpassword={registerPassword} onChange={inputRegisterPasswordChangeHandler} />
                            <FormHelperText className={registerPasswordRequired}>
                                <span className="red">required</span>
                            </FormHelperText>
                        </FormControl>
                        <br /><br />
                        <FormControl required>
                            <InputLabel htmlFor="contact">Contact No.</InputLabel>
                            <Input id="contact" type="text" contact={contact} onChange={inputContactChangeHandler} />
                            <FormHelperText className={contactRequired}>
                                <span className="red">required</span>
                            </FormHelperText>
                        </FormControl>
                        <br /><br />
                        {registrationSuccess === true &&
                            <FormControl>
                                <span className="successText">
                                    Registration Successful. Please Login!
                                </span>
                            </FormControl>
                        }
                        <br /><br />
                        <Button variant="contained" color="primary" onClick={registerClickHandler}>REGISTER</Button>
                    </TabContainer>
                }
            </Modal>
        </div>
    )
}



export default Header;