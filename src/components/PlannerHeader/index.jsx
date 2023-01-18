import React, { useContext } from 'react';

import { RegisterContext } from '../../context/register-hook';

import styled from 'styled-components';
import CompassLink from '../CompassLink';

import HeaderTitle from './HeaderTitle';
import TimeBox from './TimeBox';
import WeatherBox from './WeatherBox';
import LogoutButton from './LogoutButton';

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding: 2rem 1rem 2rem 0;
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);
`;

export const ActionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: end;
`

function PlannerHeader() {
    const ctxt = useContext(RegisterContext);

    const logOut = () => {
        ctxt.onLogout()    
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