import React, { useState, useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// import useInput from "../../helpers/user-input";

import { FormWrapper, Form, MiddleWrapper, ImageForm, ErrorMessage } from '../../global/globalStyles';
import { RegisterContext } from '../../context/register-hook';
import Label from '../../components/Label';
import InputData from '../../components/InputData';
import HeaderTitle from '../../components/HeaderTitle';
import AccountButton from '../../components/AccountButton';
import CompassLogo from '../../assets/logo.svg';

function Register() {
    const navigate = useNavigate();

    const {userData, setUserData} = useContext(RegisterContext);
    const [errorExists, setErrorExists] = useState(false);

    const setData = (input) => {
        setUserData((prevState) => {
            return  {...prevState, [input.name]: input.value}
        })
    } 
    
    const verifyDataHandler = (e) => {
        let input = e.target;

        let nameRegex = /([A-Z][a-z]*)([\\s\\\'-][A-Z][a-z]*)*?$/; 
        let nameResult = nameRegex.test(input.value);

        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let emailResult = emailRegex.test(input.value);

        const nameVerify = (input.name === 'firstName' || input.name === 'lastName') && !nameResult;
        const localVerify = (input.name === 'country' || input.name === 'city') && !nameResult;
        const emailVerify = input.name === 'email' && !emailResult;
        const passwordVerify = input.name === 'password' && input.value.length < 7;
        const confirmPasswordVerify = input.name === 'confirmPassword' && input.value !== userData.password;

        if(nameVerify || emailVerify || passwordVerify || confirmPasswordVerify || localVerify) {
            input.style.outline = "1px solid red";
            input.style.border = "1px solid red";
        } else {
            setData(input);
            input.style.outline = "1px solid white";
            input.style.border = "1px solid white";
        }
    }

    let firstNameRef = useRef();
    let lastNameRef = useRef();
    let birthDateRef = useRef();
    let countryRef = useRef();
    let cityRef = useRef();
    let emailRef = useRef();
    let passwordRef = useRef(); 
    let confirmPasswordRef = useRef(); 

    const formSubmissionHandler = (e) => {
        e.preventDefault();

        const firstName = userData.firstName === '' || userData.firstName == null;
        const lastName = userData.lastName === '' || userData.lastName == null;
        const birthDate = userData.birthDate === '' || userData.birthDate == null;
        const country = userData.country === '' || userData.country == null;
        const city = userData.city === '' || userData.city == null;
        const email = userData.email === '' || userData.email == null;
        const password = userData.password === '' || userData.password == null;
        const confirmPassword = (userData.confirmPassword === '' || userData.confirmPassword == null) || userData.confirmPassword !== userData.password;

        setErrorExists(true); 
        const errorStyle = (ref) => {
            ref.current.style.border = "1px solid red"
        }
    
        if(firstName) errorStyle(firstNameRef);
        if(lastName) errorStyle(lastNameRef);
        if(birthDate) errorStyle(birthDateRef);
        if(country) errorStyle(countryRef);
        if(city) errorStyle(cityRef);
        if(email) errorStyle(emailRef);
        if(password) errorStyle(passwordRef);
        if(confirmPassword) errorStyle(confirmPasswordRef);

        if(!firstName && !lastName && !birthDate && !country && !city && !email && !password && !confirmPassword) {
            navigate('/login');
            localStorage.setItem("userData", JSON.stringify(userData));
        }

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
                <Form onSubmit={formSubmissionHandler}>
                    <HeaderTitle title='Welcome,' >Please, register to continue</HeaderTitle>
                    <Label>
                        first name
                        <InputData 
                            type='text' 
                            placeholder='Your first name' 
                            name='firstName'
                            onChange={verifyDataHandler} 
                            ref={firstNameRef}
                        />
                    </Label>

                    <Label>
                        last name
                        <InputData 
                            type='text' 
                            placeholder='Your last name' 
                            name='lastName'
                            onChange={verifyDataHandler} 
                            ref={lastNameRef}
                        />
                    </Label>

                    <Label>
                        birth date
                        <InputData 
                            type='birth-date' 
                            placeholder='MM/DD/YYYY' 
                            name='birthDate'
                            onChange={verifyDataHandler}
                            onInput={birthDateHandler} 
                            ref={birthDateRef}
                        />
                    </Label>

                    <Label>
                        Country
                        <InputData 
                            type='text' 
                            placeholder='Your Country' 
                            name='country'
                            onChange={verifyDataHandler}
                            ref={countryRef}
                        />
                    </Label>
                    <Label>
                        City
                        <InputData 
                            type='text' 
                            placeholder='Your City'
                            name='city'
                            onChange={verifyDataHandler}
                            ref={cityRef}
                        />
                    </Label>
                    <Label>
                        e-mail
                        <InputData 
                            type='email' 
                            placeholder='A valid e-mail here' 
                            name='email'
                            onChange={verifyDataHandler}
                            ref={emailRef}
                        />
                    </Label>
                    <Label>
                        password
                        <InputData 
                            type='password' 
                            placeholder='Your password'
                            name='password'
                            onChange={verifyDataHandler}
                            ref={passwordRef} 
                        />
                    </Label>
                    <Label>
                        password
                        <InputData 
                            type='password' 
                            placeholder='Comfirm your password'
                            name='confirmPassword'
                            onChange={verifyDataHandler}
                            ref={confirmPasswordRef}
                        />
                    </Label>

                    {errorExists && <ErrorMessage>! Please, enter with correct data</ErrorMessage>}

                    <AccountButton type='submit' disabled={errorExists}>Register Now</AccountButton>
                </Form>
            </MiddleWrapper>

            <ImageForm>
                <img src={CompassLogo} alt='Compass logo' />
            </ImageForm>
        </FormWrapper>
    );
}

export default Register;