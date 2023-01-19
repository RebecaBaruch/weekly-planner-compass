import React, { useState } from 'react';

import { TimeContainer, TimeTitle, TimeText } from './styled';

function WeatherBox() {
    let time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    const [currentTime, setCurrentTime] = useState(time);

    const updateTime = () => {
        let time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        setCurrentTime(time);
    }

    setInterval(updateTime, 1000);

    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let date = new Date();
    let month = months[date.getMonth()];
    let day = date.getDate();
    let ordinal = (day % 10);
    let year = date.getFullYear();

    let ordinalDate = 0;
    if(ordinal === 1) ordinalDate = day + 'st';
    if(ordinal === 2) ordinalDate = day + 'nd';
    if(ordinal === 3) ordinalDate = day + 'rd';
    if(ordinal > 3 || ordinal === 0) ordinalDate = day + 'th';

    let currentDate = month + ' ' + ordinalDate + ', ' + year;

    return(
        <TimeContainer>
            <TimeTitle>{currentTime}</TimeTitle>
            <TimeText>{currentDate}</TimeText>
        </TimeContainer>
    );
}

export default WeatherBox;