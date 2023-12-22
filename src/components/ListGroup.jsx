import React from "react";
import EmptyStage from "./EmptyStage";
import List from "./List";
import BulkActionBtn from "./bulkActionBtn";

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
      {tasks.length !== 0 && <BulkActionBtn doneAllTask={doneAllTask} />}
    </div>
  );
};

export default ListGroup;
