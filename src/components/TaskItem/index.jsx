import React from 'react';

import { TaskBox, TaskText, DeleteButton } from './styled';

function TaskItem({ taskTxt }) {

    return(
        <TaskBox>
            <TaskText>
                { taskTxt }
            </TaskText>
            <DeleteButton>Delete</DeleteButton>
        </TaskBox>
    );
}

export default TaskItem;