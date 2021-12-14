/**
This component displays the header that is common for all screens in the top side of the page layout
 */

import React, { useState } from 'react';

import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import PropTypes from 'prop-types';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { Link, useHistory } from 'react-router-dom';
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
        <Typography component='div' style={{ padding: 0, textAlign: 'center' }}>
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
    const [username, setUsername] = useState('');
    const [loginPassword, setloginPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [contact, setContact] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem('access-token') == null ? false : true);
    const [bookShowRequested, setBookShowRequested] = useState(false);


    const history = useHistory();

    /** Handler  to set the state of any modal open to track the status */
    const openModalHandler = () => {
        setModalIsOpen(true);
    }

    /** Handler  to set the state of any modal closed to track the status */
    const closeModalHandler = () => {
        setUsername('');
        setloginPassword('');
        setModalIsOpen(false);
    }

    /** Handler  to set the current tab */
    const tabChangeHandler = (event, value) => {
        setValue(value);
    }

    /** Handler  to process the login action */
    const loginClickHandler = (event) => {

        if (username && loginPassword) {

            /** Build the header with the basic authentication token */
            const headers = {
                'Authorization': `Basic ${window.btoa(username + ':' + loginPassword)}`,
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache'
            }

            /** use Axios post the sendthe header to the login API */
            axios.post(props.baseUrl + 'auth/login', {}, {
                headers
            }).then(res => {
                sessionStorage.setItem('uuid', res.data.id);
                sessionStorage.setItem('access-token', res.headers['access-token']);

                setLoggedIn(true)

                setTimeout(() => {
                    closeModalHandler();
                }, 2000);              

                /** If the user is shown the login modal because he clicked the book show 
                 * button without logging in, then take the user to the book show page
                 */
                if (bookShowRequested) {
                    history.push('/bookshow/' + props.id);
                    setBookShowRequested(false);
                }
            }).catch(
                function (error) {
                    if (error.response) {
                        // Request made and server responded
                        let message = error.response.data.message;
                        if (message === 'Password match failed' ||
                            message === 'Username does not exist' ||
                            message === 'User account is LOCKED') {
                            alert(error.response.data.message);
                        } else {
                            console.log(error.message);
                        }

                    } else if (error.request) {
                        // The request was made but no response was received
                        alert(error.request);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        alert('Error', error.message);
                    }
                }
            );
        } else {
            alert('Please enter valid credentials');
        }
    }

    /** The following two handlers are for storing the inputs of username and password by the user */
    const inputUsernameChangeHandler = (e) => {
        setUsername(e.target.value);
    }

    const inputLoginPasswordChangeHandler = (e) => {
        setloginPassword(e.target.value)
    }

    /** Registration processing handler */
    const registerClickHandler = () => {

        /** Check for all data */
        if (firstname && lastname && email && registerPassword && contact) {
            let dataSignup = {
                'email_address': email,
                'first_name': firstname,
                'last_name': lastname,
                'mobile_number': contact,
                'password': registerPassword
            };

            axios.post(props.baseUrl + 'signup', dataSignup).then(res => {

                setRegistrationSuccess(true);

                setTimeout(() => {
                    setValue(0);
                    setFirstname('');
                    setLastname('');
                    setEmail('');
                    setContact('');
                    setRegisterPassword('');
                    setRegistrationSuccess(false);
                }, 2000);

            });
        } else {
            alert('Please fill all mandatory fields');
            setRegistrationSuccess(false);
        }
    }

    /** The following five handlers are for storing the inputs by the user for registration details */
    const inputFirstNameChangeHandler = (e) => {
        setFirstname(e.target.value);
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

    /** Handles the logout button click event */
    const logoutHandler = (e) => {
        sessionStorage.removeItem('uuid');
        sessionStorage.removeItem('access-token');
        setLoggedIn(false);

    }

    const guestBookShowHandler = (e) => {
        openModalHandler();
        setBookShowRequested(true);
    }

    /** return the div with the header, login/logout button, BookShow button and the Login/Register Modal */
    return (
        <div>
            {/** The App header with login/logout and book show buttons*/}
            <header className='app-header'>
                <img src={logo} className='app-logo' alt='Movies App Logo' />
                {!loggedIn ?
                    <div className='login-button'>
                        <Button variant='contained' color='default' onClick={openModalHandler}>
                            Login
                        </Button>
                    </div>
                    :
                    <div className='login-button'>
                        <Button variant='contained' color='default' onClick={logoutHandler}>
                            Logout
                        </Button>
                    </div>
                }

                {props.showBookShowButton === 'true' && !loggedIn
                    ? <div className='bookshow-button'>
                        <Button variant='contained' color='primary' onClick={guestBookShowHandler}>
                            Book Show
                        </Button>
                    </div>
                    : ''
                }

                {props.showBookShowButton === 'true' && loggedIn
                    ? <div className='bookshow-button'>
                        <Link to={'/bookshow/' + props.id}>
                            <Button variant='contained' color='primary'>
                                Book Show
                            </Button>
                        </Link>
                    </div>
                    : ''
                }

            </header>

            {/** The Login/Register Modal*/}
            <Modal
                ariaHideApp={false}
                isOpen={modalIsOpen}
                contentLabel='Login'
                onRequestClose={closeModalHandler}
                style={customStyles}
            >
                <Tabs className='tabs' value={value} onChange={tabChangeHandler}>
                    <Tab label='Login' />
                    <Tab label='Register' />
                </Tabs>

                {value === 0 &&
                    <TabContainer>                        
                        <ValidatorForm className='subscriber-form' onSubmit={loginClickHandler}>
                            <TextValidator
                                id='username'
                                name='username'
                                value={username}
                                label='User Name *'
                                onChange={inputUsernameChangeHandler}
                                validators={['required', 'isEmail']}
                                errorMessages={['This field is required', 'Email is not valid']}
                            >
                            </TextValidator>
                            <br />
                            <TextValidator
                                id='loginPassword'
                                name='loginPassword'
                                label='Password *'
                                type='password'
                                value={loginPassword}
                                onChange={inputLoginPasswordChangeHandler}
                                validators={['required']}
                                errorMessages={['Password cannot be empty']}
                            >
                            </TextValidator>
                            <br />
                            <Button type='submit' variant='contained' color='primary' onClick={loginClickHandler}>LOGIN</Button>
                        </ValidatorForm>

                        {loggedIn === true &&
                            <FormControl>
                                <br />
                                <span className='successText'>
                                    Login Successful!
                                </span>
                            </FormControl>
                        }
                    </TabContainer>
                }

                {value === 1 &&
                    <TabContainer>                        
                        <ValidatorForm className='subscriber-form' onSubmit={() => console.log('this is submit')}>
                            <TextValidator
                                id='firstname'
                                name='firstname'
                                value={firstname}
                                label='First Name *'
                                onChange={inputFirstNameChangeHandler}
                                validators={['required']}
                                errorMessages={['This field is required']}
                            >
                            </TextValidator>
                            <br />
                            <TextValidator
                                id='lastname'
                                name='lastname'
                                value={lastname}
                                label='Last Name *'
                                onChange={inputLastNameChangeHandler}
                                validators={['required']}
                                errorMessages={['This field is required']}
                            >
                            </TextValidator>
                            <br />
                            <TextValidator
                                id='email'
                                name='email'
                                value={email}
                                label='Email *'
                                onChange={inputEmailChangeHandler}
                                validators={['required', 'isEmail']}
                                errorMessages={['This field is required', 'Email is not valid']}
                            >
                            </TextValidator>
                            <br />
                            <TextValidator
                                id='registerPassword'
                                name='registerPassword'
                                label='Password *'
                                type='password'
                                value={registerPassword}
                                onChange={inputRegisterPasswordChangeHandler}
                                validators={['required']}
                                errorMessages={['This field is required']}
                            >
                            </TextValidator>
                            <br />
                            <TextValidator
                                id='contact'
                                name='contact'
                                label='Contact No. *'
                                value={contact}
                                onChange={inputContactChangeHandler}
                                validators={['required', 'minNumber:0', 'maxNumber:9999999999', 'isNumber']}
                                errorMessages={['This field is required', 'Please enter a valid phone number', 'Please enter 10 digits', 'Only numbers are allowed']}
                            >
                            </TextValidator>
                            <br />
                            <Button type='submit' variant='contained' color='primary' onClick={registerClickHandler}>REGISTER</Button>
                        </ValidatorForm>

                        {registrationSuccess === true &&
                            <FormControl>
                                <br />
                                <span className='successText'>
                                    Registration Successful. Please Login!
                                </span>
                            </FormControl>
                        }
                    </TabContainer>
                }
            </Modal>
        </div>
    )
}



export default Header;