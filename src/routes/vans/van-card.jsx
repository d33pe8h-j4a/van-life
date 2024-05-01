import { Link } from "react-router-dom";

function VanCard({ vanData, searchParams }) {
    const colorClass = vanData.type;
    const capitalizeFirstLetter = (str) =>
        `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

    return (
        <Link
            to={`${vanData.id}`}
            state={{ search: searchParams.toString() }}
            aria-label={`View details for ${vanData.name}, 
        priced at $${vanData.price} per day`}
        >
            <div className="van-card">
                <img src={vanData.imageUrl} alt={`Image of ${vanData.name}`} />
                <div className="card-details">
                    <p className="card-heading">{vanData.name}</p>
                    <p className="card-heading pricing">
                        ${vanData.price}
                        <span>/day</span>
                    </p>
                </div>
                <div className={`van-type ${colorClass} selected`}>
                    {capitalizeFirstLetter(vanData.type)}
                </div>
            </div>
        </Link>
    );
}

export default VanCard;
