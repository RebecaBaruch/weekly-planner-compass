import React from 'react';

import { TaskBox, TaskText, DeleteButton } from './styled';

function TaskItem({ taskTxt, borderColor }) {

    return(
        <TaskBox borderColor={ borderColor }>
            <TaskText>
                { taskTxt }
            </TaskText>
            <DeleteButton>Delete</DeleteButton>
        </TaskBox>
    );
}

export default TaskItem;