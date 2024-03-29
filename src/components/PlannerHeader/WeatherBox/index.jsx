import React, { useState, useEffect } from 'react';

import { WeatherContainer, WeatherTitle, WeatherText } from './styled';

// import { RegisterContext } from '../../../context/register-hook';

// import WeatherIcon from '../../../assets/weather-icon.svg';

function WeatherBox() {

    const userLocation = JSON.parse(localStorage.getItem('isLogged'));
    const [weatherForecast, setWeatherForecast] = useState(null);

    useEffect(() => {
        fetch(`http://api.weatherapi.com/v1/current.json?key=99cefa819b3d466fb3815836231901&q=${userLocation.city}&aqi=no`)
        .then((response) => {
            if(response.status === 200) {
                return response.json();
            }
        })
        .then((data) => {
            setWeatherForecast(data);
        });
    }, []);


    return(
        <WeatherContainer>
            {
                 weatherForecast ?
                 <WeatherText>{userLocation.city}</WeatherText> :
                 null
            }
            {
               weatherForecast ?
                <WeatherTitle>
                    <img src={weatherForecast.current.condition.icon} width='45px' alt='weather icon' />
                    {weatherForecast.current.temp_c}°
                </WeatherTitle> :
                null
            }
        </WeatherContainer>
    );
}

export default WeatherBox;