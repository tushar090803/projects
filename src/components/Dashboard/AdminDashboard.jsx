import React, { useContext, useState} from 'react'
import Header from './../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {  
    console.log("admin")
    return (
        <div className='text-white bg-black min-h-screen w-full p-10'>
            <Header changeUser={props.changeUser} data={props.data}/>
            <CreateTask />
            <AllTask data={props.data}/> 
        </div>
    )
}

export default AdminDashboard
