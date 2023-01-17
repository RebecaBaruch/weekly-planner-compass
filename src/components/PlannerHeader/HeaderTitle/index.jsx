import React from 'react';
import styled from 'styled-components';

export const TextBox = styled.div`
    padding: 0.5rem 0 0.5rem 2rem;
    width: 30%;
    text-align: left;
    border-radius: 0px 14px 15px 0px;
    background-color: #000000; 
`

export const Title = styled.h1`
    font-size: 2rem;
    color: white;
`

export const SubtTitle = styled.h2`
    font-size: 0.8rem;
    color: white;
`

function HeaderTitle() {
    
    return(
        <TextBox>
            <Title>Weekly Planner</Title>
            <SubtTitle>Use this planner to organize your daily issues.</SubtTitle>
        </TextBox>
    );
}

export default HeaderTitle;