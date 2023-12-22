import React from "react";

const BulkAction = ({doneAllTask}) => {
  return (
    <div className="flex justify-end">
      <button
        className="bg-gray-200 py-1 px-4 rounded-lg active:scale-75 duration-200"
        onClick={doneAllTask}
      >
        All Done
      </button>
    </div>
  );
};

export default BulkAction;
