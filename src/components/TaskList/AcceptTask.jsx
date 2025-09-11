import React from 'react'

const AcceptTask = ({task}) => {
    console.log("Accepted Task ka data : ", task)
  return (
    <div className='flex-shrink-0 min-h-[100%] overflow-auto w-[300px] bg-pink-400 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h3 className='text-white mx-1 my-1 bg-red-600 text-sm px-3 py-1 rounded'>
            {task.category}
          </h3>
          <h4 className='text-white mx-1  my-1'>{task.date}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold text-white px-3'>
          {task.title}
        </h2>
        <p className='text-sm text-white mt-2 p-3'>{task.description}</p>

        <div className='flex justify-around mt-8'>
            <button className='bg-red-400 p-2 rounded-2xl text-white'>Mark as completed</button>
            <button className='bg-green-400 p-2 rounded-2xl text-white'>Mark as failed</button>
        </div>
      </div>
  )
}

export default AcceptTask
