import React, { useState } from "react";
import CreateForm from "./components/CreateForm";
import Heading from "./components/Heading";
import ListGroup from "./components/ListGroup";
import Status from "./components/Status";

const App = () => {
  const todoList = [
    // { id: 1, job: "Go to the gym", isDone: false },
    // { id: 2, job: "Buy groceries", isDone: false },
    // { id: 3, job: "Write a blog post", isDone: false },
  ];

  const [tasks, setTasks] = useState(todoList);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (id, newJob) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, job: newJob } : task))
    );
  };

  const doneTask = (id) => {
    setTasks(
      tasks.map(
        // !task.isDone =. true - false switch
        (task) => (task.id === id ? { ...task, isDone: !task.isDone } : task)
      )
    );
  };

  const doneAllTask = () => {
    setTasks(tasks.map((task) => ({ ...task, isDone: true }))); // object return => () required
  };

  return (
    <div className="w-[400px] mx-auto mt-20 ">
      <Heading />
      <CreateForm addTask={addTask} />
      <Status tasks={tasks} />
      <ListGroup
        tasks={tasks}
        doneTask={doneTask}
        deleteTask={deleteTask}
        updateTask={updateTask}
        doneAllTask={doneAllTask}
      />
    </div>
  );
};

export default App;
