import React, { useContext } from 'react';
import { Header, ActionContainer } from './styled';
import { useNavigate } from 'react-router-dom';

import CompassLink from '../CompassLink';

import HeaderTitle from './HeaderTitle';
import TimeBox from './TimeBox';
import WeatherBox from './WeatherBox';
import LogoutButton from './LogoutButton';

function PlannerHeader() {
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem('isLogged');
        navigate('/login');
    }

    return(
        <Header>
            <HeaderTitle />
            <TimeBox /> 
            <WeatherBox />
            <ActionContainer>
                <CompassLink size='2rem' href='https://compass.uol/pt/home/?utm_source=google-ads&utm_medium=ppc&utm_campaign=compasso-uol-institucional&utm_term=compasso.uol&gclid=CjwKCAiAzp6eBhByEiwA_gGq5DzQzIjYPI7sgSl0ihpbaAwK9uz7hfU10sTNd-iYAt2X1u1pwyLyfhoC8NIQAvD_BwE' />
                <LogoutButton onClick={logOut} />
            </ActionContainer>
        </Header>
    )
}

export default PlannerHeader;