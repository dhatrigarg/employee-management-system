import React from 'react'
import Header from '../Other/Header'
import Createtask from '../Other/Createtask'

const AdminDashboard = () => {
  return (
    <div className='p-10 bg-black h-screen w-full'>
        <Header/>
        <Createtask/>    
    </div>
  )
}

export default AdminDashboard