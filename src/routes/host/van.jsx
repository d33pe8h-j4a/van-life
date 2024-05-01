import { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import { useParams, Outlet, Link } from "react-router-dom";

function HostVanDetails() {
    const { vanId } = useParams();
    const [vanData, setVanData] = useState();
    useEffect(() => {
        async function getVanData() {
            const res = await fetch(`/api/host/vans/${vanId}`);
            const data = await res.json();
            setVanData(data.vans[0]);
        }
        getVanData();
    }, [vanId]);
    const colorClass = vanData ? vanData.type : "";
    const capitalizeFirstLetter = (str) =>
        `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

    const navLinks = [
        { path: "", tab: "details", isDefault: true },
        { path: "pricing", tab: "pricing", isDefault: false },
        { path: "photos", tab: "photos", isDefault: false },
    ];

    return (
        <div id="van">
            {vanData ? (
                <>
                    <Link to=".." className="back-link" relative="path">
                        <i className="fa-solid fa-arrow-left"></i>
                        <p>Back to all vans</p>
                    </Link>
                    <section id="host-van-details">
                        <div className="van-info">
                            <img
                                src={vanData.imageUrl}
                                alt={`Image of ${vanData.name}`}
                            />
                            <div className="van-name-price">
                                <div
                                    className={`van-type ${colorClass} selected`}
                                >
                                    {capitalizeFirstLetter(colorClass)}
                                </div>
                                <h1 className="van-name">{vanData.name}</h1>
                                <p className="pricing">
                                    ${vanData.price}
                                    <span>/day</span>
                                </p>
                            </div>
                        </div>
                        <Navbar navLinks={navLinks} />
                        <Outlet context={[vanData]} />
                    </section>
                </>
            ) : (
                <h2>Loading...</h2>
            )}
        </div>
    );
}
export default HostVanDetails;
