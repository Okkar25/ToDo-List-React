import React from "react";
import BulkAction from "./BulkAction";
import EmptyStage from "./EmptyStage";
import List from "./List";

const ListGroup = ({
  tasks,
  deleteTask,
  doneTask,
  updateTask,
  doneAllTask,
}) => {
  return (
    <div>
      <EmptyStage />
      {tasks.map(({ id, job, isDone }) => (
        <List
          job={job}
          id={id}
          key={id}
          isDone={isDone}
          deleteTask={deleteTask}
          doneTask={doneTask}
          updateTask={updateTask}
        />
      ))}
      {tasks.length !== 0 && <BulkAction doneAllTask={doneAllTask} />}
    </div>
  );
};

export default ListGroup;
