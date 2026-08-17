import React from "react";
import { useState } from "react";

const Createtask = () => {

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask, setNewTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()

    setNewTask({taskTitle, taskDescription, taskDate, category, active:false, newTask:true, completed:false, failed:false})

    const data = JSON.parse(localStorage.getItem('employees'))

    data.forEach(function(elem){
      if(assignTo==elem.firstName){
        elem.tasks.push(newTask)
      }
    })

    setTaskTitle('')
    setTaskDescription('')
    setTaskDate('')
    setAssignTo('')
    setCategory('')
  }

  return (
    <div className="mt-10 p-5 text-white bg-[#1c1c1c] ">
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className="flex flex-wrap w-full items-start justify-between">
        <div className="w-full md:w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e)=>{
                setTaskTitle(e.target.value)
              }}
              type="text"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              placeholder="Make a UI design"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
            value={taskDate}
              onChange={(e)=>{
                setTaskDate(e.target.value)
              }}
              type="date"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
            value={assignTo}
              onChange={(e)=>{
                setAssignTo(e.target.value)
              }}
              type="text"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              placeholder="employee name"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
            value={category}
              onChange={(e)=>{
                setCategory(e.target.value)
              }}
              type="text"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              placeholder="design, dev, etc"
            />
          </div>
        </div>

        <div className="w-full md:w-2/5 flex flex-col items-start mt-4 md:mt-0">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
          value={taskDescription}
              onChange={(e)=>{
                setTaskDescription(e.target.value)
              }}
          className="w-full h-57 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400"></textarea>
        </div>

        <button className="bg-emerald-500 py-3 hover:bg-emerald-600 rounded text-lg font-semibold mt-4 w-full">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default Createtask;
