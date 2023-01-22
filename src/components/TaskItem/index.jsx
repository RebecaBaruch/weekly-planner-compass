import React from 'react';

import { TaskBox, TaskText, DeleteButton } from './styled';

function TaskItem({ taskTxt, borderColor, delItem }) {

    return(
        <TaskBox borderColor={ borderColor }>
            <TaskText>
                { taskTxt }
            </TaskText>
            <DeleteButton onClick={ delItem }>Delete</DeleteButton>
        </TaskBox>
    );
}

export default TaskItem;