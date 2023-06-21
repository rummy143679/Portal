import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
// import VanDash from "./VanDash"


export default function Layout() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet/>
            </main>
            <Footer/>

        </>
    )
}