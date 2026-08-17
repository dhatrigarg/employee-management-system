import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div>
        <div className="p-5 h-full w-75 bg-cyan-500 text-sm rounded-xl shrink-0">
        <div className="flex justify-between">
          <h3 className="px-3 py-1 bg-red-400 rounded items-center">{data.category}</h3>
          <h4>{data.taskDate}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
        <p className="text-sm mt-2">
          {data.taskDescription}
        </p>
        <div className='mt-4 flex justify-between'>
            <button className='py-1 px-2 w-full bg-green-500 text-sm'>Completed</button>
        </div>
      </div>
    </div>
  )
}

export default CompleteTask