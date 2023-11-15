import React from "react";
import Checkbox from "./CHECKBOX";
import "./App.css";
const TaskList = ({ tasks, onDeleteTask, onTaskChange }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
            <Checkbox isChecked={task.status} onChange={()=>onTaskChange(index)} />
          {
            task.status ? <p className="overline">{task.task}</p> : <p>{task.task}</p>
          }
          <button onClick={() => onDeleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
export default TaskList;
