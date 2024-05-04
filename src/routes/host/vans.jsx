import { NavLink, Link, useLoaderData, defer, Await } from "react-router-dom";
import { Suspense } from "react";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";
import SpinLoader from "../../loaders/spinLoader";

export async function loader({ request }) {
    await requireAuth(request);
    return defer({ hostVans: getHostVans() });
}

function HostVans() {
    const loaderData = useLoaderData();

    const renderVanItems = (loadedVans) => {
        const vansItems = loadedVans.map((van) => (
            <div className="van" key={van.id}>
                <Link
                    to={`${van.id}`}
                    aria-label={`View details for ${van.name}, 
        priced at $${van.price} per day`}
                    className="van"
                >
                    <img src={van.imageUrl} alt={`Image of ${van.name}`} />
                    <div className="van-info">
                        <p className="van-name">{van.name}</p>
                        <p className="van-price">${van.price}/day</p>
                    </div>
                </Link>
                <NavLink>Edit</NavLink>
            </div>
        ));
        return <div className="vans">{vansItems}</div>;
    };

    return (
        <section id="van-list">
            <div className="van-details">
                <div className="heading">
                    <h4>Your listed vans</h4>
                    <NavLink>View all</NavLink>
                </div>
                <Suspense fallback={<SpinLoader />}>
                    <Await resolve={loaderData.hostVans}>
                        {(loadedVans) => renderVanItems(loadedVans)}
                    </Await>
                </Suspense>
            </div>
        </section>
    );
}

export default HostVans;
