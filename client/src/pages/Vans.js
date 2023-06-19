import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Vans() {

    const [vanData, setVanData] = useState([])

    useEffect(() => {
        // console.log('useEffect')
        fetch('http://127.0.0.1:9000/vans/')
            .then(res => res.json())
            .then(data => setVanData(data))
        // .then(data => console.log(data))


    }, [])
    // console.log(vanData)
    const vanElements = vanData.map(van => (
        <Link>
            <div key={van._id} className="van-tile">
                <img src={van.imageUrl} alt="van" />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </div>
        </Link>
    ))

    return (
        <div className="van-list-container">
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}