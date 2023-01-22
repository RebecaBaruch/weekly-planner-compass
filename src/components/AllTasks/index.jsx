import React from "react";

import styled from "styled-components";

import Task from '../Task';

export const TasksList = styled.div`
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

function AllTasks({ tasks }) {
    
    if(tasks.length === 0) {
        return <h2>Found no tasks.</h2>;
    }

    return(
        <TasksList>
            {
                tasks.map((task) => ( 
                    
                    <Task 
                        key={task.id} 
                        desc={task.desc} 
                        time={task.time} 
                        day={task.day} 
                        dayColor={task.day}
                    />
                ))
            }
        </TasksList>
    );
}

export default AllTasks;