import React, { useState } from 'react';

import { WeatherContainer, WeatherTitle, WeatherText } from './styled';

// import { RegisterContext } from '../../../context/register-hook';

// import WeatherIcon from '../../../assets/weather-icon.svg';

function WeatherBox() {

    const userData = JSON.parse(localStorage.getItem('userData'));
    const [weatherForecast, setWeatherForecast] = useState(null);

    fetch(`http://api.weatherapi.com/v1/current.json?key=99cefa819b3d466fb3815836231901&q=${userData.city}&aqi=no`)
    .then((response) => {
        if(response.status === 200) {
            return response.json();
        }
    })
    .then((data) => {
        setWeatherForecast(data);
    });

    return(
        <WeatherContainer>
            {
                 weatherForecast ?
                 <WeatherText>{userData.city}</WeatherText> :
                 null
            }
            {
               weatherForecast ?
                <WeatherTitle>
                    <img src={weatherForecast.current.condition.icon} alt='weather icon' />
                    {weatherForecast.current.temp_c}
                </WeatherTitle> :
                null
            }
        </WeatherContainer>
    );
}

export default WeatherBox;