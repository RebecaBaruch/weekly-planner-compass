import React from "react";

import { TasksList } from "./styled";
import Task from "../Task";

function AllTasks({ tasks, delItem }) {
  if (tasks.length === 0) {
    return <h2>Found no tasks.</h2>;
  }

  return (
    <TasksList>
      {tasks.map((task) => {
        return(
            <Task
              id={task.id}
              desc={task.desc}
              time={task.time}
              day={task.day}
              dayColor={task.day}
              delItem={delItem}
            />
        );
    })}     
    </TasksList>
  );
}

export default AllTasks;