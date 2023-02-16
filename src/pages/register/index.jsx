import React, { useState, useContext, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// import useInput from "../../helpers/user-input";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FormWrapper, Form, MiddleWrapper, ImageForm, ErrorMessage, AccountLink } from '../../global/globalStyles';
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

    //set user data to the context
    const setData = (input) => {
        setUserData((prevState) => {
            return  {...prevState, [input.name]: input.value}
        })
    } 
    
    //inputs validation errors
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
            input.style.outline = "1px solid #E9B425";
            input.style.border = "1px solid #E9B425";
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
    
    //request with api
    const registerRequest = (userData) => {
        fetch('https://latam-challenge-2.deta.dev/api/v1/users/sign-up', {
            method: 'POST',
            headers: {
                'content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(userData)
        })
        .then((res) => {
            if(res.status === 200 | res.status === 201) {
                navigate('/login');
                console.log(res);
            }
            return res.json();
        })
        .then((data) => {
            console.log(data);
            notify(data);
        })
    };

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
            ref.current.style.border = "1px solid #E9B425"
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
            const userDataRequest =  {
                firstName: userData.firstName,
                lastName: userData.lastName,
                birthDate: userData.birthDate,
                country: userData.country,
                city: userData.city,
                email: userData.email,
                password: userData.password,
                confirmPassword: userData.confirmPassword
            }

            registerRequest(userDataRequest);
            const userLocation = {
                country: userData.country,
                city: userData.city
            }
            localStorage.setItem("userLocation", JSON.stringify(userLocation));
            // localStorage.setItem("userCity", JSON.stringify(userData.city));
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

                    {errorExists && <ErrorMessage>Please, enter with correct data!</ErrorMessage>}

                    <AccountButton type='submit' disabled={errorExists}>Register Now</AccountButton>
                </Form>

                <AccountLink >
                    <Link to='/login'>
                        Have an account yet? <br></br>
                        <span>Login</span>
                    </Link>
                </AccountLink>
            </MiddleWrapper>

            <ImageForm>
                <a href='https://compass.uol/en/home/'>
                    <img src={CompassLogo} alt='Compass logo' width='45%' />
                </a>
            </ImageForm>

            <ToastContainer />
        </FormWrapper>
    );
}

export default Register;