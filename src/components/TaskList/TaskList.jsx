import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="mt-10 py-5 h-[55%] w-full flex items-center justify-start gap-5 flex-nowrap overflow-x-auto"
    >
      <div className="p-5 h-full w-75 bg-green-700 text-sm rounded-xl shrink-0">
        <div className="flex justify-between">
          <h3 className="px-3 py-1 bg-red-400 rounded items-center">High</h3>
          <h4>20 oct 2026</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Complete the project</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          corporis temporibus quasi! Ad, optio nisi.
        </p>
      </div>

      <div className="p-5 h-full w-75 bg-pink-300 text-sm rounded-xl shrink-0">
        <div className="flex justify-between">
          <h3 className="px-3 py-1 bg-red-400 rounded items-center">High</h3>
          <h4>20 oct 2026</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Complete the project</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          corporis temporibus quasi! Ad, optio nisi.
        </p>
      </div>

      <div className="p-5 h-full w-75 bg-cyan-500 text-sm rounded-xl shrink-0">
        <div className="flex justify-between">
          <h3 className="px-3 py-1 bg-red-400 rounded items-center">High</h3>
          <h4>20 oct 2026</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Complete the project</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          corporis temporibus quasi! Ad, optio nisi.
        </p>
      </div>

      <div className="p-5 h-full w-75 bg-orange-300 text-sm rounded-xl shrink-0">
        <div className="flex justify-between">
          <h3 className="px-3 py-1 bg-red-400 rounded items-center">High</h3>
          <h4>20 oct 2026</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Complete the project</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          corporis temporibus quasi! Ad, optio nisi.
        </p>
      </div>
    </div>
  );
};

export default TaskList;
