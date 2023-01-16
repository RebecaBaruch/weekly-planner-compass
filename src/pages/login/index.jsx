import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormWrapper, Form, MiddleWrapper, ImageForm, SubTitle } from '../../global/globalStyles';
import InputData from '../../components/InputData';
import HeaderTitle from '../../components/HeaderTitle';
import AccountButton from '../../components/AccountButton';
import CompassLogo from '../../assets/logo.svg';
import { IconInputBox, Icon } from './styled';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    }
    return(
        <FormWrapper>
            <MiddleWrapper>
                <Form action="">
                    <HeaderTitle title='Welcome,' >To continue browsing safely, log in to the <br></br>network.</HeaderTitle>
                    <SubTitle>Login</SubTitle>

                    <IconInputBox>
                        <InputData type='text' placeholder='user name' onChange={({ target }) => setEmail(target.value)} />
                        <Icon iconType position={email} />
                    </IconInputBox>

                    <IconInputBox>
                        <InputData type='password' placeholder='password' onChange={({ target }) => setPassword(target.value)}/>
                        <Icon position={password} />
                    </IconInputBox>
                    <AccountButton type='submit' onClick={submitHandler}>Login</AccountButton>
                </Form>
            </MiddleWrapper>

            <ImageForm>
                <img src={CompassLogo} alt='Compass logo' />
            </ImageForm>
        </FormWrapper>
    );
}

export default Login;