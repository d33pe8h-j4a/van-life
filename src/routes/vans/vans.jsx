import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import VanCard from "./van-card";

function Vans() {
    const [vansData, setVansData] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type");

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
    const vansItems = vansData
        .filter((van) =>
            typeFilter ? van.type.toLowerCase() === typeFilter : true
        )
        .map((van) => (
            <VanCard key={van.id} vanData={van} searchParams={searchParams} />
        ));

    return (
        <section id="vans">
            <h1>Explore our van options</h1>
            <section id="filter">
                <div className="filters">
                    <button
                        onClick={() => setSearchParams({ type: "simple" })}
                        className={`simple ${
                            typeFilter === "simple" ? "selected" : ""
                        }`}
                    >
                        Simple
                    </button>
                    <button
                        onClick={() => setSearchParams({ type: "luxury" })}
                        className={`luxury ${
                            typeFilter === "luxury" ? "selected" : ""
                        }`}
                    >
                        Luxury
                    </button>
                    <button
                        onClick={() => setSearchParams({ type: "rugged" })}
                        className={`rugged ${
                            typeFilter === "rugged" ? "selected" : ""
                        }`}
                    >
                        Rugged
                    </button>
                </div>
                {typeFilter !== null && (
                    <button
                        onClick={() => setSearchParams({})}
                        className="clear-btn"
                    >
                        Clear filters
                    </button>
                )}
            </section>
            <div className="cards">{vansItems}</div>
        </section>
    );
}

export default Vans;
