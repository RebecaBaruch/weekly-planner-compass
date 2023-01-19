import React from "react";

import { TaskContainer, TimeList, ListTasks } from './styled';

import TimeTask from "../TimeTask";
import TaskItem from "../TaskItem";

function Task({ desc, time, dayColor }) {

    return(
        <TaskContainer>
            <TimeList>
                <TimeTask taskTime={ time } color={ dayColor } />
            </TimeList>
            <ListTasks>
                <TaskItem taskTxt={ desc } borderColor={ dayColor }/>
            </ListTasks>
        </TaskContainer>
    );
}

export default Task;