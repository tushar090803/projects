import React, { useContext, useState, useEffect } from 'react'
import Login from '../Auth/Login'
const Header = (props) => {
    function clicked() {
      localStorage.setItem("loggedInUser","")
      props.changeUser('')
    }

    return (
      console.log("header props ooo", props.data.name),
      <div className='flex justify-between items-end w-full'>
        <h1 className='text-white text-2xl'>Hello <br /> <span className='text-3xl'> {props.data.name}!</span></h1>
        <button onClick={clicked} 
        className='text-white text-lg font-medium bg-red-500 px-5 py-2'>Log Out</button>
      </div>
    )
  }



export default Header
