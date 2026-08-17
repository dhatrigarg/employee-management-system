import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {

  const authData = useContext(AuthContext)
  
  return (
    <div className="p-5 mt-5 bg-[#1c1c1c] rounded">
      <div className="py-2 px-4 mb-2 text-white text-lg border-2 border-emerald-500 flex justify-between rounded">
        <h2 className="w-1/5">Employee Name</h2>
        <h2 className="w-1/5">New Task</h2>
        <h2 className="w-1/5">Active</h2>
        <h2 className="w-1/5">Completed</h2>
        <h2 className="w-1/5">Failed</h2>
      </div>
      <div className="">
      {authData.employees.map(function(elem, idx){
        return <div key={idx} className="py-2 px-4 mb-2 bg-[#2c2c2c] flex justify-between rounded">
        <h2 className="w-1/5 font-bold text-white">{elem.firstName}</h2>
        <h2 className="w-1/5 font-medium text-blue-400">{elem.newTask}</h2>
        <h2 className="w-1/5 font-medium text-amber-300">{elem.activeTask}</h2>
        <h2 className="w-1/5 font-medium text-green-400">{elem.completedTask}</h2>
        <h2 className="w-1/5 font-medium text-red-500">{elem.failedTask}</h2>
      </div>
      })}
    </div></div>
  );
};

export default AllTask;
