import React, { useState } from 'react'

const CreateTask = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [assignto, setAssignto] = useState('')
    const [category, setCategory] = useState('')

    const [task, setTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();
        let work = { title, description, date, category, active: false, newTask: true, failed: false, completed: false }

        const data = JSON.parse(localStorage.getItem('employees'))
        console.log(data)

        data.forEach(function(elem) {
            if (elem.name == assignto) {
                elem.tasks.push(work)
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1 
            }
        })
        console.log("ye" ,task)
        localStorage.setItem('employees',JSON.stringify(data))

        setAssignto('')
        setCategory('')
        setDate('')
        setDescription('')
        setTitle('')

    }
    return (
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form onSubmit={(e) => { submitHandler(e) }}
                className='flex flex-wrap items-start justify-between'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value)
                            }}
                            type="text" placeholder='Make a UI design' className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-white" /></div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input
                            value={date}
                            onChange={(e) => {
                                setDate(e.target.value)
                            }}
                            type="date" className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-white" />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                        <input
                            value={assignto}
                            onChange={(e) => {
                                setAssignto(e.target.value)
                            }}
                            type="text" placeholder='Employee Name' className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-white" />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>
                            Category
                        </h3>
                        <input
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                            type="text" placeholder='Design, dev, etc' className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-white" /></div>
                </div>

                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value)
                        }}
                        name="" id="" cols="30" rows="10" className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-white'></textarea>
                    <button className='bg-emerald-500 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full h-8'>Create Task</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask
