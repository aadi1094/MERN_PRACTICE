import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { authContext } from '../Layout'

const Profile = () => {
    const {user}=useContext(authContext)

  return (
    <div className=''>
        {user && <div className='flex justify-center gap-10 mt-14'>
            <div className='flex justify-end bg-pink-300 rounded-full'>
            <img className='w-72 h-72' src={user.image}></img>
            </div>
            <div className='flex flex-col justify-center '>
            <h1 className='text-2xl font-sans text-cyan-400 p-2'>Name : {user.firstName} {user.lastName}</h1>
            <h1 className='text-2xl font-sans text-cyan-400 p-2'>City : {user.address.city}</h1>
            <h1 className='text-2xl font-sans text-cyan-400 p-2'>Email : {user.email}</h1>
            <h1 className='text-2xl font-sans text-cyan-400 p-2'>Contact No : {user.phone}</h1>
            <h1 className='text-2xl font-sans text-cyan-400 p-2'>Company : {user.company.name}</h1>
            <h1 className='text-2xl font-sans text-cyan-400 p-2'>Role : {user.role}</h1>
            </div>

        </div>}
            <div className='fixed bottom-72 flex justify-center w-full'>
            <Link to='/'>
            <button className='bg-yellow-100 rounded-md w-24 border'>Back to home</button>
            </Link>
            </div>
    </div>
  )
}

export default Profile