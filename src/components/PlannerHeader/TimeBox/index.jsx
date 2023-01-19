import React, { useState } from 'react';

import { TimeContainer, TimeTitle, TimeText } from './styled';

function WeatherBox() {
    let time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);

    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    }

    setInterval(updateTime, 1000);

    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    let dataAtual = dia + '/' + mes + '/' + ano;

    return(
        <TimeContainer>
            <TimeTitle>{currentTime}</TimeTitle>
            <TimeText>{dataAtual}</TimeText>
        </TimeContainer>
    );
}

export default WeatherBox;