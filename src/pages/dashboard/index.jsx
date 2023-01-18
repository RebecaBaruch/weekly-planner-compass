import React from "react";

import styled from "styled-components";

import CompassBg from '../../assets/compass-bg.png';

import { Wrapper } from '../../global/globalStyles';
import PlannerHeader from "../../components/PlannerHeader";
import PlannerActions from "../../components/PlannerActions";
import FilterCards from "../../components/FilterCards";


export const MainContainer = styled.div`
    padding: 1rem;
    width: 100%;
    min-height: 84vh;
    background: right bottom url(${CompassBg}) no-repeat;
`

export const Planner = styled.div`
    padding: 2rem 1rem 2rem 0;
    width: 100%;
    min-height: 84vh;
`

function Dashboard() {
    return(
        <Wrapper>
           <PlannerHeader />

            <MainContainer>
                <PlannerActions />
                <Planner>
                    <FilterCards />
                </Planner>
            </MainContainer>
        </Wrapper>
    );
}

export default Dashboard;