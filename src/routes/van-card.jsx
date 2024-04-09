import { Link } from "react-router-dom";

function VanCard(props) {
    const colorClass = props.type;
    const capitalizeFirstLetter = (str) =>
        `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

    return (
        <Link
            to={`${props.id}`}
            aria-label={`View details for ${props.name}, 
        priced at $${props.price} per day`}
        >
            <div className="van-card">
                <img src={props.imageUrl} alt={`Image of ${props.name}`} />
                <div className="card-details">
                    <p className="card-heading">{props.name}</p>
                    <p className="card-heading">${props.price}</p>
                    <p className="para">/day</p>
                </div>
                <div className={`van-type ${colorClass} selected`}>
                    {capitalizeFirstLetter(props.type)}
                </div>
            </div>
        </Link>
    );
}

export default VanCard;
