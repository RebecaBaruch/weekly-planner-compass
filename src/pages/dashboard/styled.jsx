import styled from "styled-components";

import CompassBg from '../../assets/compass-bg.png';

export const MainContainer = styled.main`
    padding: 1rem;
    width: 100%;
    height: 100%;
    background: right bottom url(${CompassBg}) no-repeat;
`;

export const Planner = styled.div`
    padding: 2rem 1rem 0 0;
    width: 100%;
    height: 90%;
`;

export const CardsWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 5px;
    padding-left: 105px;
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