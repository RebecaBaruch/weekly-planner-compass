import React, { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { FormWrapper, Form, MiddleWrapper, ImageForm, SubTitle, ErrorMessage } from '../../global/globalStyles';
import { RegisterContext } from '../../context/register-hook';

import InputData from '../../components/InputData';
import HeaderTitle from '../../components/HeaderTitle';
import AccountButton from '../../components/AccountButton';
import CompassLogo from '../../assets/logo.svg';
import { IconInputBox, Icon } from './styled';

function Login() {
    const navigate = useNavigate();

    const {userData, setUserData} = useContext(RegisterContext);
    const [errorExists, setErrorExists] = useState(false);

    let emailRef = useRef();
    let passwordRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        
        let emailError = emailRef.current.value === '' || emailRef.current.value !== userData.email;
        let passwordError = passwordRef.current.value === '' || passwordRef.current.value !== userData.password;

        const errorStyle = (ref) => {
            ref.current.style.border = "1px solid #E9B425";
        }

        if(emailError || passwordError) {
            if(emailError) errorStyle(emailRef);
            if(passwordError) errorStyle(passwordRef);
            console.log(emailError, passwordError);
        } else {
            setErrorExists(true); 
            navigate('/dashboard');
        }

    }
    return(
        <FormWrapper>
            <MiddleWrapper>
                <Form action="">
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

                    {errorExists && <ErrorMessage>! Please, enter with correct data</ErrorMessage>}
                    
                    <AccountButton type='submit' onClick={submitHandler} disabled={setErrorExists}>Login</AccountButton>
                </Form>
            </MiddleWrapper>

            <ImageForm>
                <img src={CompassLogo} alt='Compass logo' />
            </ImageForm>
        </FormWrapper>
    );
}

export default Login;