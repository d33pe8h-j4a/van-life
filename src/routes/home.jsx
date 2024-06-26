import { Link } from "react-router-dom";

function Index() {
    return (
        <main id="home">
            <div className="container">
                <h1>You got the travel plans, we got the travel vans.</h1>
                <p>
                    Add adventure to your life by joining the #vanlife movement.
                    Rent the perfect van to make your perfect road trip.
                </p>
                <button>
                    <Link to="vans">Find your van</Link>
                </button>
            </div>
        </main>
    );
}
export default Index;
