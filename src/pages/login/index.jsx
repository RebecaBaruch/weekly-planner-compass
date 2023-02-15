import React, { useState, useRef, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

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

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const userLocation = JSON.parse(localStorage.getItem('userLocation'));
    const [errorExists, setErrorExists] = useState(false);

    let emailRef = useRef();
    let passwordRef = useRef();

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
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        
        // let emailError = emailRef.current.value !== '' && (emailRef.current.value === userData.email || (emailRef.current.value === (userData.firstName + ' ' + userData.lastName)));
        // let passwordError = passwordRef.current.value === '' || passwordRef.current.value !== userData.password;

        const errorStyle = (ref) => {
            ref.current.style.border = "1px solid #E9B425";
        }

        const userDataRequest =  {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }

        // if(!emailError || passwordError) {
        //     // if(!emailError) errorStyle(emailRef);
        //     // if(passwordError) errorStyle(passwordRef);
        //     setErrorExists(true);
        // } else {
            ctxt.onLogin();
            loginRequest(userDataRequest);
            // navigate('/dashboard');
        // }
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
        </FormWrapper>
    );
}

export default Login;