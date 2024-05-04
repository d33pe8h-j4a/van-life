import { NavLink, useLoaderData, defer, Await } from "react-router-dom";
import { Suspense } from "react";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";
import SpinLoader from "../../loaders/spinLoader";

export async function loader({ request }) {
    await requireAuth(request);
    return defer({ hostVans: getHostVans() });
}

function Dashboard() {
    const loaderData = useLoaderData();

    const renderVanItems = (vansData) => {
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
            <div className="van-details">
                <div className="heading">
                    <h4>Your listed vans</h4>
                    <NavLink>View all</NavLink>
                </div>
                <div className="vans">
                    {vansItems ? vansItems : "Vans not available yet"}
                </div>
            </div>
        );
    };

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
            <Suspense fallback={<SpinLoader />}>
                <Await resolve={loaderData.hostVans}>
                    {(loadedVans) => renderVanItems(loadedVans)}
                </Await>
            </Suspense>
        </section>
    );
}

export default Dashboard;
