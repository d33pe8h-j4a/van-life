import {
    useLocation,
    Link,
    useLoaderData,
    defer,
    Await,
} from "react-router-dom";
import { Suspense } from "react";
import { getVans } from "../../api";
import SpinLoader from "../../loaders/spinLoader";

export function loader({ params }) {
    return defer({ van: getVans(params.vanId) });
}

function Van() {
    const location = useLocation();
    const loaderData = useLoaderData();

    return (
        <Suspense fallback={<SpinLoader />}>
            <Await resolve={loaderData.van}>
                {(loadedVan) => {
                    const colorClass = loadedVan ? loadedVan.type : "";
                    const capitalizeFirstLetter = (str) =>
                        `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
                    return (
                        <div id="van">
                            <Link
                                to={".." + "?" + location.state?.search}
                                relative="path"
                                className="back-link"
                            >
                                <i className="fa-solid fa-arrow-left"></i>
                                <p>
                                    Back to{" "}
                                    {location.state ? loadedVan.type : "all"}{" "}
                                    vans
                                </p>
                            </Link>
                            <img
                                src={loadedVan.imageUrl}
                                alt={`Image of ${loadedVan.name}`}
                            />
                            <div className="van-details">
                                <div
                                    className={`van-type ${colorClass} selected`}
                                >
                                    {capitalizeFirstLetter(colorClass)}
                                </div>
                                <h1 className="van-name">{loadedVan.name}</h1>
                                <p className="pricing">
                                    ${loadedVan.price}
                                    <span>/day</span>
                                </p>
                                <p className="van-desc">
                                    {loadedVan.description}
                                </p>
                                <button>Rent this van</button>
                            </div>
                        </div>
                    );
                }}
            </Await>
        </Suspense>
    );
}
export default Van;
