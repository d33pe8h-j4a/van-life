import { useOutletContext } from "react-router-dom";

function Details() {
    const [vanData] = useOutletContext();
    return (
        <section id="host-van-details-extended">
            <p>
                <span>Name: </span>
                {vanData.name}
            </p>
            <p>
                <span>Category: </span>
                {vanData.type.charAt(0).toUpperCase()}
                {vanData.type.slice(1)}
            </p>
            <p>
                <span>Description: </span>
                {vanData.description}
            </p>
            <p>
                <span>Visibility: </span>
                Public
            </p>
        </section>
    );
}

export default Details;
