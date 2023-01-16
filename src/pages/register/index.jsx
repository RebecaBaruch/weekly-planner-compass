import React from 'react';
import { FormWrapper, Form, MiddleWrapper, ImageForm } from '../../global/globalStyles';
import InputData from '../../components/InputData';
import HeaderTitle from '../../components/HeaderTitle';

function Register() {
    return(
        <FormWrapper>
            <MiddleWrapper>

                <Form action="">
                    <HeaderTitle title='Welcome,' >Please, register to continue</HeaderTitle>

                    <InputData type='text' placeholder='Your first name'>first name</InputData>
                    <InputData type='text' placeholder='Your last name'>last name</InputData>
                    <InputData type='text' placeholder='MM/DD/YYYY'>birth date</InputData>
                    <InputData type='text' placeholder='Your Country'>Country</InputData>
                    <InputData type='text' placeholder='Your City'>City</InputData>
                    <InputData type='email' placeholder='A valid e-mail here'>e-mail</InputData>
                    <InputData type='password' placeholder='Your password'>password</InputData>
                    <InputData type='password' placeholder='Comfirm your password'>password</InputData>
                </Form>
            </MiddleWrapper>

            <ImageForm />
        </FormWrapper>
    );
}

export default Register;