import React from "react";

import { TaskContainer, TimeList, ListTasks } from "./styled";

import TimeTask from "../TimeTask";
import TaskItem from "../TaskItem";

function Task({ desc, time, dayColor, id, delItem }) {
  const checkDesc = desc.length > 1 ? true : false;

  return (
    <TaskContainer key={id}>
      <TimeList>
        <TimeTask taskTime={time} color={dayColor} />
      </TimeList>
      <ListTasks checkDesc={checkDesc}>
        {desc.map((task) => {
          return (
            <TaskItem
              key={task.id}
              taskTxt={task.desc}
              borderColor={dayColor}
              delItem={() => delItem(task.id)}
            />
          );
        })}
      </ListTasks>
    </TaskContainer>
  );
}

export default Task;