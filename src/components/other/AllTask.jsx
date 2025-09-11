import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = (props) => {
  const authData = useContext(AuthContext)
  console.log("OOOOOOO", authData.employees)
  console.log(props.data.name)
  return (
    <div className="bg-[#1c1c1c] p-3 rounded mt-5">

      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="text-[10px] sm:text-[15px] lg:text-lg font-medium w-1/5 bg-red-800 py-1  rounded-2xl mr-1 flex items-center justify-center">Name</h2>
        <h3 className="text-[10px] sm:text-[15px] lg:text-lg font-medium w-1/5 bg-red-800 py-1  rounded-2xl mr-1 flex items-center justify-center">New Task</h3>
        <h3 className="text-[10px] sm:text-[15px] lg:text-lg font-medium w-1/5 bg-red-800 py-1  rounded-2xl mr-1 flex items-center justify-center">Active</h3>
        <h3 className="text-[10px] sm:text-[15px] lg:text-lg font-medium w-1/5 bg-red-800 py-1  rounded-2xl mr-1 flex items-center justify-center">
          Completed
        </h3>
        <h3 className="text-[10px] sm:text-[15px] lg:text-lg font-medium w-1/5 bg-red-800 py-1  rounded-2xl mr-1 flex items-center justify-center">
          Fail
        </h3>
      </div>


      <div>
        {authData.employees.map(function (em, idx) {

          return <div key={idx} className=" mb-2 py-2 px-4 overflow-auto flex justify-between rounded border-1">
            <h2 className='text-lg font-medium w-1/5 text-white py-1 pl-4 rounded-2xl mr-1'>{em.name}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-800 py-1 pl-4 rounded-2xl mr-1'>{em.taskCounts.newTask}</h3>
            <h3 className='text-lg font-medium w-1/5 text-yellow-800 py-1 pl-4 rounded-2xl mr-1'>{em.taskCounts.active}</h3>
            <h3 className='text-lg font-medium w-1/5 text-emerald-300 py-1 pl-4 rounded-2xl mr-1'>{em.taskCounts.completed}</h3>
            <h3 className='text-lg font-medium w-1/5 text-orange-800 py-1 pl-4 rounded-2xl'>{em.taskCounts.failed}</h3>
          </div>
        })}
      </div>


    </div>
  )
}

export default AllTask
