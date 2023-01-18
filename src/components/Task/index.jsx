import React from "react";

import styled from "styled-components";

import TimeBox from "../TimeTask";
import TaskItem from "../TaskItem";

export const TaskContainer = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: row;
    gap: 1rem;
    align-items: center;  
    width: 100%;
`;
export const TimeList = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    width: fit-content;
    height: 100%;
`;

export const ListTasks = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    width: 100%;
    height: fit-content;
`;

function Task() {

    return(
        <TaskContainer>
            <TimeList>
                <TimeBox />
                </TimeList>
            <ListTasks>
                <TaskItem />
            </ListTasks>
        </TaskContainer>
    );
}

export default Task;