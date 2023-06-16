import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'

function Home() {

  const navigate = useNavigate()

  return (
    <div >
      <h1>Well come to MyPortal</h1>
      <h3>Choose your Login</h3>
      <button className='dash-student-login' onClick={() => navigate('/login')} >Students Login</button>
      {/* <button className='dash-employee-login' onClick={() => navigate('/employeeLogin')} >Employee Login</button> */}
      <br />
      <h3>Dont Have Account...? click.!</h3>
      <button onClick={() => { navigate('/register') }}>Register Studnet</button>
      {/* <button onClick={() => navigate('/login')}>Register Employee</button> */}
    </div>
  )
}

export default Home 