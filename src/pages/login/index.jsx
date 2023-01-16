import React from 'react';
import { FormWrapper, Form, MiddleWrapper, ImageForm } from '../../global/globalStyles';
import InputData from '../../components/InputData';
import HeaderTitle from '../../components/HeaderTitle';
import AccountButton from '../../components/AccountButton';
import CompassLogo from '../../assets/logo.svg';

function Login() {
    return(
        <FormWrapper>
            <MiddleWrapper>

                <Form action="">
                    <HeaderTitle title='Welcome,' >To continue browsing safely, log in to the <br></br>network.</HeaderTitle>

                    <InputData type='text' placeholder='user name' />
                    <InputData type='password' placeholder='password' />

                    <AccountButton type='submit'>Login</AccountButton>
                </Form>
            </MiddleWrapper>

            <ImageForm>
                <img src={CompassLogo} alt='Compass logo' />
            </ImageForm>
        </FormWrapper>
    );
}

export default Login;