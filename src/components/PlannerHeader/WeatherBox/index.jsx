import React from 'react';

import styled from 'styled-components';

import WeatherIcon from '../../../assets/weather-icon.svg';

export const WeatherContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
export const WeatherTitle = styled.h1`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    font-size: 3rem;
    font-weight: 700;
    text-align: center;
    color: #222222;
`

export const WeatherText = styled.h2`
    font-size: 1rem;
    font-weight: 400;
    color: #222222;
`

function WeatherBox() {

    return(
        <WeatherContainer>
            <WeatherText>Asunción - Paraguay</WeatherText>
            <WeatherTitle>
                <img src={WeatherIcon} alt='weather icon' />
                22°
            </WeatherTitle>
        </WeatherContainer>
    );
}

export default WeatherBox;