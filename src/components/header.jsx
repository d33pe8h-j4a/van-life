import { NavLink, Link } from "react-router-dom";
import Navbar from "./navbar";

function Header() {
    const navLinks = [
        { path: "host", tab: "host", isDefault: false },
        { path: "about", tab: "about", isDefault: false },
        { path: "vans", tab: "vans", isDefault: false },
    ];

    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
    };

    return (
        <div id="header">
            <h1>
                <NavLink
                    to={""}
                    style={({ isActive }) => (isActive ? activeStyle : {})}
                >
                    #VANLIFE
                </NavLink>
            </h1>
            <Navbar navLinks={navLinks} />
            <Link to="login" className="login-link">
                <i className="fa-regular fa-user login-icon"></i>
            </Link>
            <button
                onClick={() => {
                    localStorage.removeItem("loggedIn");
                }}
            >
                X
            </button>
        </div>
    );
}

export default Header;
