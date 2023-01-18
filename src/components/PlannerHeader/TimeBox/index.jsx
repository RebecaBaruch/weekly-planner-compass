import React from 'react';

import styled from 'styled-components';

export const TimeContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
export const TimeTitle = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    text-align: center;
    color: #3B3E45;
`

export const TimeText = styled.h2`
    font-size: 1rem;
    font-weight: 400;
    color: #3B3E45;
`

function WeatherBox() {

    return(
        <TimeContainer>
            <TimeTitle>10:58</TimeTitle>
            <TimeText>November 22th, 2022 </TimeText>
        </TimeContainer>
    );
}

export default WeatherBox;