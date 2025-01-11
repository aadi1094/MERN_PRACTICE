import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authContext } from '../Layout'



const Home = () => {
    const {user}=useContext(authContext)
    const navigate=useNavigate()
  return (
    <div className='min-h-screen flex flex-col p-4'>
        {user && <div className='p-4 flex justify-between  bg-blue-200 h-16 rounded-md items-center'>
            <h1>{user.firstName}</h1>
            <button onClick={()=>{
                navigate('/profile')
            }} className='h-8 w-8'><img  src={user.image}/></button>
        </div>}

        {user && <div className='bg-cyan-300 shadow-md h-20 w-1/2 flex mx-auto mt-10 p-5 rounded-3xl items-center'>
            <button onClick={()=>{
                navigate('/profile')
            }} className='h-8 w-8 '><img  src={user.image}/></button>

            <div className='bg-cyan-100 w-full rounded-3xl p-2 ml-3'>
                <h1>What's on your mind, {user.firstName}?</h1>
            </div>

            </div>}
    </div>
  )
}

export default Home