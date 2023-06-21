import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import Dash from './pages/Dash';
import Register from './pages/Register'
import Vans from './pages/Vans';
import VanDetail from './pages/VanDetails';
import About from './pages/About'
import Layout from './components/Layout';
import './App.css'
import HostLayout from './components/HostLayout';
import Income from './pages/host/Income';
import Reviews from './pages/host/Reviews';
import Dashboard from './pages/host/Dashboard';
import VansLayout from './components/VansLayout';
import HostVanDetail from './pages/host/HostVanDetails';
import Details from './pages/host/Details';
import Price from './pages/host/Price';
import Photos from './pages/host/Photos';
// import HomeLayout from './components/HomeLayout';




function App() {
  return (
    <div>
      <Router>
        <Routes path='/' >
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route element={<Layout />}>
            <Route path='dash' element={<Dash />} />

            <Route path='vans'>
              <Route index element={<Vans />} />
              <Route path=':id' element={<VanDetail />} />
            </Route>

            <Route path="about" element={<About />} />

            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} /> {/* replace path with index which means path of parent and child also same */}
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" >
                <Route index element={<VansLayout />} />
                <Route path=":id" element={<HostVanDetail />}>
                  <Route index element={<Details />} />
                  <Route path='pricing' element={<Price />} />
                  <Route path='photos' element={<Photos />} />
                </Route>
              </Route>
            </Route>

          </Route>
          {/* <Route path="/studentsError" element={<Error />} /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App