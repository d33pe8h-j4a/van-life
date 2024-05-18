import { useLoaderData, Outlet, Link, defer, Await } from "react-router-dom";
import { Suspense } from "react";
import Navbar from "../../components/navbar";
import { getVan } from "../../api";
import { requireAuth } from "../../utils";
import SpinLoader from "../../loaders/spinLoader";

export async function loader({ request, params }) {
    await requireAuth(request);
    return defer({ hostVan: getVan(params.vanId) });
}

function HostVanDetails() {
    const loaderData = useLoaderData();
    const capitalizeFirstLetter = (str) =>
        `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

    const navLinks = [
        { path: "", tab: "details", isDefault: true },
        { path: "pricing", tab: "pricing", isDefault: false },
        { path: "photos", tab: "photos", isDefault: false },
    ];

    return (
        <Suspense fallback={<SpinLoader />}>
            <Await resolve={loaderData.hostVan}>
                {(hostVan) => {
                    const colorClass = hostVan ? hostVan.type : "";
                    return (
                        <div id="van">
                            <Link to=".." className="back-link" relative="path">
                                <i className="fa-solid fa-arrow-left"></i>
                                <p>Back to all vans</p>
                            </Link>
                            <section id="host-van-details">
                                <div className="van-info">
                                    <img
                                        src={hostVan.imageUrl}
                                        alt={`Image of ${hostVan.name}`}
                                    />
                                    <div className="van-name-price">
                                        <div
                                            className={`van-type ${colorClass} selected`}
                                        >
                                            {capitalizeFirstLetter(colorClass)}
                                        </div>
                                        <h1 className="van-name">
                                            {hostVan.name}
                                        </h1>
                                        <p className="pricing">
                                            ${hostVan.price}
                                            <span>/day</span>
                                        </p>
                                    </div>
                                </div>
                                <Navbar navLinks={navLinks} />
                                <Outlet context={[hostVan]} />
                            </section>
                        </div>
                    );
                }}
            </Await>
        </Suspense>
    );
}
export default HostVanDetails;
