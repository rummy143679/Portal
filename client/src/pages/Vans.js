import React, { useEffect, useState } from "react";
import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { getVans } from "../api";

export function loader() {
    return getVans()
}

export default function Vans() {

    const [vanData, setVanData] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    // const data = props.loader()
    const data = useLoaderData() // instead of data use vanData
    // console.log(data) 
    // console.log(typeFilter.toString())
    const typeFilter = searchParams.get('type')
    useEffect(() => {
        // console.log('useEffect')
        fetch('http://127.0.0.1:9000/vans/')
            .then(res => res.json())
            .then(data => setVanData(data))
        // .then(data => console.log(data))


    }, [])

    // console.log(data)

    const displayedVans = typeFilter
        ? vanData.filter(van => van.type === typeFilter)
        : vanData

    // console.log(vanData)
    const vanElements = displayedVans.map(van => (
        <Link to={`${van._id}`} >
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

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    return (
        <div className="van-list-container">
            <h1>Explore Our Vans</h1>
            <div className="van-list-filter-buttons">
                <button
                    onClick={() => handleFilterChange("type", "simple")}
                    className={
                        `van-type simple ${typeFilter === "simple" ? "selected" : ""}`
                    }
                >Simple</button>
                <button
                    onClick={() => handleFilterChange("type", "luxury")}
                    className={
                        `van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`
                    }
                >Luxury</button>
                <button
                    onClick={() => handleFilterChange("type", "rugged")}
                    className={
                        `van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`
                    }
                >Rugged</button>

                {typeFilter ? (
                    <button
                        onClick={() => handleFilterChange("type", null)}
                        className="van-type clear-filters"
                    >Clear filter</button>
                ) : null}

            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}