import React, { useState, useRef, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FormWrapper, Form, MiddleWrapper, ImageForm, SubTitle, ErrorMessage, AccountLink } from '../../global/globalStyles';
import { RegisterContext } from '../../context/register-hook';

import InputData from '../../components/InputData';
import HeaderTitle from '../../components/HeaderTitle';
import AccountButton from '../../components/AccountButton';
import CompassLogo from '../../assets/logo.svg';
import { IconInputBox, Icon } from './styled';

function Login() {
    const navigate = useNavigate();
    const ctxt = useContext(RegisterContext);
    const {isLoggedIn, setIsLoggedIn} = ctxt;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorExists, setErrorExists] = useState(false);

    let emailRef = useRef();
    let passwordRef = useRef();

    const notify = (message) => {
        toast.error(message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }

    //function for attr styles to the inputs errors
    const errorStyle = (emailRef, passwordRef) => {
        const style = "1px solid #E9B425"
        emailRef.current.style.border = style;
        passwordRef.current.style.border = style;
    }

    //fetch for login request
    const loginRequest = (userData) => {
        fetch('https://latam-challenge-2.deta.dev/api/v1/users/sign-in', {
            method: 'POST',
            headers: {
                'content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(userData)
        })
        .then((res) => {
            if(res.status === 200 | res.status === 201) {
                navigate('/dashboard');
                console.log(res);
            } 
            return res.json();
        })
        .then((data) => {
            console.log(data);
            
            if(typeof data === 'object') {
                if(data.message) {
                    let inputErrors = emailRef.current.value === '' || passwordRef.current.value === '' || data;
        
                    if(inputErrors) {
                        errorStyle(emailRef, passwordRef);
                        setErrorExists(true);
                    }
                    notify(data.message);
                }

                const tokenData = {
                    token: data.token,
                    city: data.user.city,
                    country: data.user.country,
                    id: data.user._id
                };
    
                setIsLoggedIn(true);
                localStorage.setItem('isLogged', JSON.stringify(tokenData));
                navigate('/dashboard');
            }
        });
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const userDataRequest =  {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }

        ctxt.onLogin();
        loginRequest(userDataRequest);
    }

    return(
        <FormWrapper>
            <MiddleWrapper>
                <Form onSubmit={submitHandler}>
                    <HeaderTitle title='Welcome,' >To continue browsing safely, log in to the <br></br>network.</HeaderTitle>
                    <SubTitle>Login</SubTitle>

                    <IconInputBox>
                        <InputData 
                            type='text' 
                            placeholder='user name' 
                            onChange={({ target }) => setEmail(target.value)} 
                            ref={emailRef}
                        />
                        <Icon iconType position={email} />
                    </IconInputBox>

                    <IconInputBox>
                        <InputData 
                            type='password' 
                            placeholder='password' 
                            onChange={({ target }) => setPassword(target.value)}
                            ref={passwordRef}
                        />
                        <Icon position={password} />
                    </IconInputBox>

                    {errorExists && <ErrorMessage>
                                        Wow, invalid username or password. <br></br>
                                        Please, try again!
                                    </ErrorMessage>}
                    
                    <AccountButton type='submit' disabled={errorExists}>Login</AccountButton>
                </Form>

                <AccountLink>
                    <Link to='/'>
                        Don't have an account yet? <br></br>
                        <span>Sign up</span>
                    </Link>
                </AccountLink>
            </MiddleWrapper>

            <ImageForm>
                <img src={CompassLogo} alt='Compass logo' width='45%'/>
            </ImageForm>

            <ToastContainer />
        </FormWrapper>
    );
}

export default Login;