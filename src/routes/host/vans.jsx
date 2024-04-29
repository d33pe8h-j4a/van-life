import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function HostVans() {
    const [vansData, setVansData] = useState([]);
    useEffect(() => {
        async function getVansData() {
            try {
                const res = await fetch("/api/host/vans");
                if (!res.ok) {
                    throw new Error("Failed to fetch the data");
                }
                const data = await res.json();
                setVansData(data.vans);
            } catch (error) {
                console.log("Error fetching vans data: ", error);
            }
        }
        getVansData();
    }, []);

    const vansItems = vansData.map((van) => (
        <Link
            to={`${van.id}`}
            aria-label={`View details for ${van.name}, 
    priced at $${van.price} per day`}
            className="van"
            key={van.id}
        >
            <img src={van.imageUrl} alt={`Image of ${van.name}`} />
            <div className="van-info">
                <p className="van-name">{van.name}</p>
                <p className="van-price">${van.price}/day</p>
            </div>
            <NavLink>Edit</NavLink>
        </Link>
    ));

    return (
        <section id="van-list">
            <div className="van-details">
                <div className="heading">
                    <h4>Your listed vans</h4>
                    <NavLink>View all</NavLink>
                </div>
                <div className="vans">
                    {vansItems ? vansItems : "Vans not available yet"}
                </div>
            </div>
        </section>
    );
}

export default HostVans;
