import React from "react"
import { Link } from "react-router-dom"

export default function VansLayout() {
    const [vans, setVans] = React.useState([])

    React.useEffect(() => {
        fetch("http://127.0.0.1:9000/vans/")
            .then(res => res.json())
            .then(data => setVans(data))
            // .then(data => console.log(data))
    }, [])
    // console.log(vans)

    const hostVansEls = vans.map(van => (
        <Link
            to={`${van._id}`}
            key={van._id}
            className="host-van-link-wrapper"
        >
            <div className="host-van-single" key={van._id}>
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
    ))

    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                {
                    vans.length > 0 ? (
                        <section>
                            {hostVansEls}
                        </section>

                    ) : (
                            <h2>Loading...</h2>
                        )
                }
            </div>
        </section>
    )
}