import React from 'react';

import { Button } from './styled';

import LogOut from '../../../assets/logout-icon.svg';

function LogoutButton({ onClick }) {

    return(
        <Button onClick={ onClick }> 
            <img src={LogOut} alt='logout image' />
            Logout
        </Button>
    );
}

export default LogoutButton;