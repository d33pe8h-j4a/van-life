import { useSearchParams, useLoaderData, defer, Await } from "react-router-dom";
import { Suspense } from "react";
import VanCard from "./van-card";
import { getVans } from "../../api";
import SpinLoader from "../../loaders/spinLoader";

export function loader() {
    return defer({ vans: getVans() });
}

function Vans() {
    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type");
    const loaderData = useLoaderData();

    function handleFilterChange(key, value) {
        setSearchParams((prevParams) => {
            if (value === null) {
                prevParams.delete(key);
            } else {
                prevParams.set(key, value);
            }
            return prevParams;
        });
    }

    const renderVanElements = (loadedVans) => {
        const vansItems = loadedVans
            .filter((van) =>
                typeFilter ? van.type.toLowerCase() === typeFilter : true
            )
            .map((van) => (
                <VanCard
                    key={van.id}
                    vanData={van}
                    searchParams={searchParams}
                />
            ));
        return (
            <section id="vans">
                <section id="filter">
                    <div className="filters">
                        <button
                            onClick={() => handleFilterChange("type", "simple")}
                            className={`simple ${
                                typeFilter === "simple" ? "selected" : ""
                            }`}
                        >
                            Simple
                        </button>
                        <button
                            onClick={() => handleFilterChange("type", "luxury")}
                            className={`luxury ${
                                typeFilter === "luxury" ? "selected" : ""
                            }`}
                        >
                            Luxury
                        </button>
                        <button
                            onClick={() => handleFilterChange("type", "rugged")}
                            className={`rugged ${
                                typeFilter === "rugged" ? "selected" : ""
                            }`}
                        >
                            Rugged
                        </button>
                    </div>
                    {typeFilter !== null && (
                        <button
                            onClick={() => handleFilterChange("type", null)}
                            className="clear-btn"
                        >
                            Clear filters
                        </button>
                    )}
                </section>
                <div className="cards">{vansItems}</div>
            </section>
        );
    };

    // Render van cards based on vansData

    return (
        <>
            <h1>Explore our van options</h1>
            <Suspense fallback={<SpinLoader />}>
                <Await resolve={loaderData.vans}>
                    {(loadedVans) => renderVanElements(loadedVans)}
                </Await>
            </Suspense>
        </>
    );
}

export default Vans;
