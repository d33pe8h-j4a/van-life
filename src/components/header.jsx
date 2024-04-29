import { NavLink } from "react-router-dom";
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
        </div>
    );
}

export default Header;
