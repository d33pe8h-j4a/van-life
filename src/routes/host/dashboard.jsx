import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function Dashboard() {
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
        <div className="van" key={van.id}>
            <img src={van.imageUrl} alt={`Image of ${van.name}`} />
            <div className="van-info">
                <p className="van-name">{van.name}</p>
                <p className="van-price">${van.price}/day</p>
            </div>
            <NavLink>Edit</NavLink>
        </div>
    ));

    return (
        <section id="dashboard">
            <div className="summary">
                <h2>Welcome!</h2>
                <div className="details">
                    <p>
                        Income last <span>30 days</span>
                    </p>
                    <NavLink>Details</NavLink>
                </div>
                <p id="income-value">$2260</p>
            </div>
            <div className="review">
                <h3>Review Score</h3>
                <p>
                    ⭐<span>5.0</span>/5
                </p>
                <NavLink>Details</NavLink>
            </div>
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

export default Dashboard;
