import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { useContext } from 'react'
import { AuthContext } from './context/AuthProvider'


const App = () => {

  // useEffect(() => {
    //   setLocalStorage()
    //   getLocalStorage()
    // },[])
    
  const authData = useContext(AuthContext)
  
  const [user, setUser] = useState(null)

  const handleLogin = (email,password) => {
    if(email == 'admin@example.com' && password == 123){
      setUser('admin')
    } else if (authData && authData.employees.find((e)=>email == e.email && e.password == password)){
      setUser('employee')
    }else{
      alert("Invalid credentials")
    }
  }
  

  return (
    <>
    {!user ? <Login handleLogin={handleLogin}  /> : ''}
    {user == 'admin' ?<AdminDashboard/> : <EmployeeDashboard/>}
    </>
  )
}

export default App