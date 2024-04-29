import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    const goBack = () => {
        window.history.back();
    };

    return (
        <div id="van">
            {vanData ? (
                <section id="host-van-details">
                    <button className="back-link" onClick={goBack}>
                        <i className="fa-solid fa-arrow-left"></i>
                        <p>Back to all vans</p>
                    </button>
                    <img
                        src={vanData.imageUrl}
                        alt={`Image of ${vanData.name}`}
                    />
                    <div className="van-details">
                        <div className={`van-type ${colorClass} selected`}>
                            {capitalizeFirstLetter(colorClass)}
                        </div>
                        <h1 className="van-name">{vanData.name}</h1>
                        <p className="pricing">
                            ${vanData.price}
                            <span>/day</span>
                        </p>
                        <p className="van-desc">{vanData.description}</p>
                        <button>Rent this van</button>
                    </div>
                </section>
            ) : (
                <h2>Loading...</h2>
            )}
        </div>
    );
}
export default HostVanDetails;