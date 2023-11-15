import React, { useState } from "react";
import Container from "./CONTAINER.jsx";
import FormTodo from "./FORMTODO.jsx";
import TaskList from "./TASKLIST.jsx";
import "./App.css";
function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };
  const checkTask = (index)=>{
    const taskSelected = tasks.find((_, i) => i === index);
    taskSelected.status = !taskSelected.status;
    const newTasksList = [...tasks];
    newTasksList[index] = taskSelected;
    setTasks(newTasksList);
  }
  return (
    <div>
      <Container>
        <h1>To-Do List</h1>
        <FormTodo onAddTask={addTask} />
        <TaskList tasks={tasks} onDeleteTask={deleteTask} onTaskChange={checkTask} />
      </Container>
    </div>
  );
}
export default App;
