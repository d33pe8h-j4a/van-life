import { useOutletContext } from "react-router-dom";

function Photos() {
    const [vanData] = useOutletContext();
    return <img src={vanData.imageUrl} alt={`Image of ${vanData.name} `} />;
}

export default Photos;
