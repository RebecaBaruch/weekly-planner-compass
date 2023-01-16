import styled from 'styled-components';
import userIcon from '../../assets/icon-user.svg';
import passwordIcon from '../../assets/icon-password.svg';

export const IconInputBox = styled.div`
    position: relative;
    
    input:focus ~ i{
        margin-left: -60px;
    }
`;

export const Icon = styled.i`
    position: absolute; 
    margin-left: ${({ position }) => position ? `-60px` : '0'};
    top: ${({ iconType }) => iconType ? `8px` : `10px`}; 
    left: 105%;
    width: 20px;
    height: 25px;
    background-image: url(${({ iconType }) => iconType ? userIcon : passwordIcon});
    background-repeat: no-repeat;

    transition: all 1s ease-in-out;
`;