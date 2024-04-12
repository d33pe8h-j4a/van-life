import { useState, useEffect } from "react";
import VanCard from "./van-card";

function Vans() {
    const [vansData, setVansData] = useState([]);

    useEffect(() => {
        async function getVanData() {
            try {
                const res = await fetch("/api/vans");
                if (!res.ok) {
                    throw new Error("Failed to fetch vans data");
                }
                const data = await res.json();
                setVansData(data.vans);
            } catch (error) {
                console.error("Error fetching vans data:", error);
            }
        }
        getVanData();
    }, []);

    // Render van cards based on vansData
    const vansItems = vansData.map((van) => <VanCard key={van.id} {...van} />);

    return (
        <section id="vans">
            <h1>Explore our options</h1>
            <div className="filters">
                <ul>
                    <li>Simple</li>
                    <li>Luxury</li>
                    <li>Rugged</li>
                </ul>
                <button className="filter-btn">Clear filters</button>
            </div>
            <div className="cards">{vansItems}</div>
        </section>
    );
}

export default Vans;
