// import React from 'react'
// import AcceptTask from './AcceptTask'
// import CompleteTask from './CompleteTask'
// import FailedTask from './FailedTask'
// import NewTask from './NewTask'

// const TaskList = ({ data }) => {
//   console.log(data)
//   let array = data.tasks
//   console.log(array)

//   return (
//     <div
//       id="tasklist"
//       className="h-[55%] flex items-center flex-start gap-5 overflow-x-auto w-full flex-nowrap mt-10 py-5 px-3"
//     >
//       {array.map((task, index) => {
//         if (task.active === true) return <AcceptTask key={index} task={task} />
//         if (task.completed === true) return <CompleteTask key={index} task={task} />
//         if (task.failed === true) return <FailedTask key={index} task={task} />
//         if (task.newTask === true) return <NewTask key={index} task={task} />
//         return null
//       })}
//     </div>
//   )
// }

// export default TaskList
import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const TaskList = ({ data }) => {
  console.log(data)
  const fullData = JSON.parse(localStorage.getItem('employees'))
  console.log(fullData)
  let array

  for (let i = 0; i < fullData.length; i++) {
    if (fullData[i].name === data.name) {
      console.log("ENter")
      array = fullData[i].tasks
      break
    }
  }
  console.log("ye" ,array)

  if (array) {
    return (
    <div
      id="tasklist"
      className="h-[55%] flex items-center flex-start gap-5 overflow-x-auto w-full flex-nowrap mt-10 py-5 px-3"
    >
      {array.map((task, index) => {
        if (task.active === true) return <AcceptTask key={index} task={task} />
        if (task.completed === true) return <CompleteTask key={index} task={task} />
        if (task.failed === true) return <FailedTask key={index} task={task} />
        if (task.newTask === true) return <NewTask key={index} task={task} />
        return null
      })}
    </div>
  )
  }
}

export default TaskList
