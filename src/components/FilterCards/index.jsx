import React from "react";

import styled from "styled-components";

export const CardsWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 5px;
    padding-left: 10%;
    width: 100%;

`;

export const Card = styled.div`
    padding: 0.3rem;
    width: 100%;
    font-size: 1.3rem;
    text-align: left;
    box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);
    border-radius: 9px 9px 0px 0px;
    
    &.monday {
        background: #FF0024;
    }
    &.tuesday {
        background: #FF8000;
    }
    &.wednesday {
        background: #FFCE00;
    }
    &.thursday {
        background: #FF0024B2;
    }
    &.friday {
        background: #FF8000B2;
    }
    &.saturday {
        background: #FFCE00B2;
    }
    &.sunday {
        background: #FF002480;
    }
`;

function FilterCards() {

    return(
        <CardsWrapper>
            <Card className='monday'>Monday</Card>
            <Card className='tuesday'>Tuesday</Card>
            <Card className='wednesday'>Wednesday</Card>
            <Card className='thursday'>Thursday</Card>
            <Card className='friday'>Friday</Card>
            <Card className='saturday'>Saturday</Card>
            <Card className='sunday'>Sunday</Card>
        </CardsWrapper>
    );
}

export default FilterCards;