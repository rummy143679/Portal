import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar"

export default function VanDetail() {
    const params = useParams()
    const [van, setVan] = useState(null)

    useEffect(() => {
        //    console.log("jgjh")
        fetch(`http://127.0.0.1:9000/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data))
    }, [params.id])

    return (
        <div className="van-detail-container">
            {van ? (
                <div className="van-detail">
                    <Navbar />
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}