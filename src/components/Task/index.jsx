import React from "react";

import { TaskContainer, TimeList, ListTasks } from './styled';

import TimeTask from "../TimeTask";
import TaskItem from "../TaskItem";

function Task({ desc, time, dayColor, id, delItem }) {
    const checkDesc = desc.length > 1 ? true : false;

    return(
        <TaskContainer>
            <TimeList>
                <TimeTask taskTime={ time } color={ dayColor } />
            </TimeList>
            <ListTasks checkDesc={ checkDesc }>
                {
                    desc.map((text, index) => {
                        return  <TaskItem 
                                    key={ `${id}${index}` } 
                                    taskTxt={ text } 
                                    borderColor={ dayColor }  
                                    delItem={ () => delItem(id, index) }/>
                    })
                }
            </ListTasks>
        </TaskContainer>
    );
}

export default Task;