import React from 'react'

const TaksListNumbers = (props) => {
  return (
    <div id="x" className='flex mt-10 overflow-x-auto lg-overflow-x-none justify-around gap-5'>
      <div className='rounded-xl w-[45%]  py-6 px-9 bg-red-400'>
        <h2 className='text-3xl text-white font-semibold'>
            {props.data.taskCounts.active}
        </h2>
        <h3 className='text-3xl text-white font-medium'>New Task</h3>
      </div>
      <div className='rounded-xl w-[45%]  py-6 px-9 bg-green-400'>
        <h2 className='text-3xl text-white font-semibold'>
            {props.data.taskCounts.newTask}
        </h2>
        <h3 className='text-3xl text-white font-medium'>New Task</h3>
      </div>
      <div className='rounded-xl w-[45%] py-6 px-9 bg-blue-400'>
        <h2 className='text-3xl text-white font-semibold'>
            {props.data.taskCounts.completed}
        </h2>
        <h3 className='text-3xl text-white font-medium'>New Task</h3>
      </div>
      <div className='rounded-xl w-[45%] py-6 px-9 bg-pink-400'>
        <h2 className='text-3xl text-white font-semibold'>
            {props.data.taskCounts.failed}
        </h2>
        <h3 className='text-3xl text-white font-medium'>New Task</h3>
      </div>
      
    </div>
    
  )
}

export default TaksListNumbers
