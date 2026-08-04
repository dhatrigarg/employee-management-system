import React from "react";

const TaskListNumbers = () => {
  return (
    <div className="mt-10 justify-between grid grid-cols-2 md:grid-cols-4 gap-4 screen">
      <div className="py-6 px-9 bg-red-400 rounded-xl">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>

      <div className="py-6 px-9 bg-blue-400 rounded-xl">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>

      <div className="py-6 px-9 bg-green-400 rounded-xl">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>

      <div className="py-6 px-9 bg-yellow-400 rounded-xl">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
