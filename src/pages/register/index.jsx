import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FormWrapper, Form, MiddleWrapper, ImageForm } from '../../global/globalStyles';
import Label from '../../components/Label';
import InputData from '../../components/InputData';
import HeaderTitle from '../../components/HeaderTitle';
import AccountButton from '../../components/AccountButton';
import CompassLogo from '../../assets/logo.svg';

function Register() {
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/login');
    }

    const birthDateHandler = (e) => {
        let v = e.target.value.replace(/\D/g, "");
    
        v = v.replace(/(\d{2})(\d)/, "$1/$2");
        v = v.replace(/(\d{2})(\d)/, "$1/$2");
    
        e.target.value = v;
    }; 


    return(
        <FormWrapper>
            <MiddleWrapper>
                <Form action="" onSubmit={submitHandler}>
                    <HeaderTitle title='Welcome,' >Please, register to continue</HeaderTitle>
                    <Label>
                        first name
                        <InputData type='text' placeholder='Your first name' />
                    </Label>
                    <Label>
                        last name
                        <InputData type='text' placeholder='Your last name' />
                    </Label>
                    <Label>
                        birth date
                        <InputData type='text' placeholder='Your last name' />
                    </Label>
                    <Label>
                        birth date
                        <InputData type='birth-date' placeholder='MM/DD/YYYY' onChange={birthDateHandler} />
                    </Label>
                    <Label>
                        Country
                        <InputData type='text' placeholder='Your Country' />
                    </Label>
                    <Label>
                        City
                        <InputData type='text' placeholder='Your City' />
                    </Label>
                    <Label>
                        e-mail
                        <InputData type='email' placeholder='A valid e-mail here' />
                    </Label>
                    <Label>
                        password
                        <InputData type='password' placeholder='Your password' />
                    </Label>
                    <Label>
                        password
                        <InputData type='password' placeholder='Comfirm your password' />
                    </Label>

                    <AccountButton type='submit'>Register Now</AccountButton>
                </Form>
            </MiddleWrapper>

            <ImageForm>
                <img src={CompassLogo} alt='Compass logo' />
            </ImageForm>
        </FormWrapper>
    );
}

export default Register;