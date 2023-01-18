import React from "react";

import styled from "styled-components";

import CompassBg from '../../assets/compass-bg.png';

import { Wrapper } from '../../global/globalStyles';
import PlannerHeader from "../../components/PlannerHeader";
import PlannerActions from "../../components/PlannerActions";
import FilterCards from "../../components/FilterCards";
import TimeBox from "../../components/TimeTask";
import Task from "../../components/Task";

export const MainContainer = styled.div`
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

export const AllTasks = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    gap: 1rem;
    overflow: scroll;
    width: 100%;
    height: 80%;

    &::-webkit-scrollbar {
        padding: 4px;

        background: #FFFFFF;

        box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);
        border-radius: 22px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
        border-radius: 10px;
        background: #FFFFFF;

        box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);
        border-radius: 22px;
    }

    &::-webkit-scrollbar-thumb {
        background: #636363;        
        border-radius: 8px;
    }

`;

function Dashboard() {
    return(
        <Wrapper>
           <PlannerHeader />

            <MainContainer>
                <PlannerActions />
                <Planner>
                    <FilterCards />

                    <TimeBox />

                    <AllTasks>
                        <Task />
                    </AllTasks>
                </Planner>
            </MainContainer>
        </Wrapper>
    );
}

export default Dashboard;