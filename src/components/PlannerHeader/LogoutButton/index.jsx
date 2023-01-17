import React from 'react';
import styled from 'styled-components';
import LogOut from '../../../assets/logout-icon.svg';

export const Button = styled.button`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    background-color: transparent;
    outline: none;
`

function LogoutButton() {

    return(
        <Button> 
            <img src={LogOut} alt='logout image' />
            Logout
        </Button>
    );
}

export default LogoutButton;