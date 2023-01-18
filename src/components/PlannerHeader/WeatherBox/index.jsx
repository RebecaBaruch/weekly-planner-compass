import React from 'react';

import { WeatherContainer, WeatherTitle, WeatherText } from './styled';

import WeatherIcon from '../../../assets/weather-icon.svg';

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