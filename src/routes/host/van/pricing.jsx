import { useOutletContext } from "react-router-dom";

function Pricing() {
    const [vanData] = useOutletContext();
    return (
        <p>
            <span>${vanData.price}</span>/day
        </p>
    );
}

export default Pricing;
