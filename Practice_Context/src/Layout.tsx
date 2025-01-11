import axios from 'axios'
import React, { createContext, ReactNode, useEffect, useState } from 'react'

export const authContext=createContext<{user:any}>({user:null})

const Layout = ({children}:{
    children:ReactNode
}) => {
    const [user,setUser]=useState<any>(null)
  

useEffect(()=>{
    const fetchUser=async()=>{
        const res= await axios.get("https://dummyjson.com/users") 
        console.log(res.data.users[1])
        setUser(res.data.users[1])
    }
    fetchUser()
},[])
  return (
    <div className='min-h-screen'>
        <authContext.Provider value={{user}}>

        {children}
        </authContext.Provider>
    </div>
  )
}

export default Layout