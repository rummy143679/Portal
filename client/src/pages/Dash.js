// import axios from 'axios'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import VanDash from '../components/VanDash'
// import axios from 'axios'

function Dash() {

  // const [data, setData] = useState({
  //   email: "",
  //   password: "",
  //   id: "",
  //   firstName: "",
  //   lastName: "",
  //   confirmPassword: ""
  // })

  const location = useLocation()

  const student = location.state.std
  // console.log(student)

  return (
    <div>
      <header>
        <Link className="site-logo" to="/">#Rummy</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <VanDash />
      <h1>Student Prifile</h1>
      id: {student._id}
      <br />
      firstName: {student.firstName}
      <br />
      lastName: {student.lastName}
      <br />
      Email: {student.email}
      <br />
      Password: {student.password}
      <br />
      confirmPassword: {student.confirmPassword}

    </div>
  )
}

export default Dash