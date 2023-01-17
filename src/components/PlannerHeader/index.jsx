import React from 'react';

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
    return(
        <Header>
            <HeaderTitle />

            <TimeBox />

            <WeatherBox />

            <ActionContainer>
                <CompassLink size='2rem' href='/' />
                <LogoutButton />
            </ActionContainer>
        </Header>
    )
}

export default PlannerHeader;