import React from 'react'

const FailedTask = () => {
  return (
    <div>
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
        <div className='mt-4 flex justify-between'>
            <button className='py-1 px-2 w-full bg-green-500 text-sm'>Failed</button>
        </div>
      </div>
    </div>
  )
}

export default FailedTask