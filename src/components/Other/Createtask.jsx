import React from 'react'

const Createtask = () => {
  return (
    <div className='mt-10 p-5 text-white bg-[#1c1c1c] '>
      <form className='flex flex-wrap w-full items-start justify-between'>

    
        <div className='w-full md:w-1/2'>

          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
            <input 
              type='text' 
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' 
              placeholder='Make a UI design' 
            />
          </div>

          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input 
              type='date' 
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' 
            />
          </div>

          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
            <input 
              type="text" 
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' 
              placeholder='employee name'
            />
          </div>

          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
            <input 
              type='text' 
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' 
              placeholder='design, dev, etc'
            />
          </div>

        </div>

        
        <div className='w-full md:w-2/5 flex flex-col items-start mt-4 md:mt-0'>
          <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
          <textarea 
            className='w-full h-57 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400'
          ></textarea>
        </div>

        
        <button 
          className='bg-emerald-500 py-3 hover:bg-emerald-600 rounded text-lg font-semibold mt-4 w-full'
        >
          Create Task
        </button>

      </form>
    </div>
  )
}

export default Createtask