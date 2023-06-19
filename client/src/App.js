import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import Dash from './pages/Dash';
import Register from './pages/Register'
import Vans from './pages/Vans';





function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dash-board" element={<Dash />} />
        <Route path="/register" element={<Register />} />
        <Route path="/vans" element={<Vans />} />
        {/* <Route path="/studentsError" element={<Error />} /> */}
      </Routes>
    </Router>
    </div>
  )
}

export default App