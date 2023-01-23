import styled from 'styled-components';
import FormImage from '../assets/compass-forms-image.png';

export const Wrapper = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.95);    
`;

export const Form = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
`;

export const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    height: 100vh;
`;

export const ImageForm = styled.figure`
    padding: 2em;
    width: 50%;
    height: 100%;
    background: url(${FormImage}) no-repeat;
    background-size: cover;
`;

export const MiddleWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: left;
    width: 50%;
    height: 100%;
    background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
`;

export const SubTitle =  styled.h2`
    font-weight: 400;
    font-size: 1.5rem;

    color: #E0E0E0;
`;

export const ErrorMessage = styled.div`
    font-weight: 700;
    font-size: 1rem;
    text-align: center;

    color: #E9B425;
`

export const AccountLink = styled.span`
    margin-top: 15px;
    font-size: 0.8;
    font-weight: 300;
    color: white;
    text-align: center;
    a {
        color: white;
    }

    span{
        color: #FF3D1F;
    }
`