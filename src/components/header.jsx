import { NavLink } from "react-router-dom";
import { useState } from "react";

function Header() {
    const [activeNavLink, setActiveNavLink] = useState("");
    function handleClick(activeLink) {
        setActiveNavLink(activeLink);
    }
    return (
        <nav>
            <h2>
                <NavLink
                    to={""}
                    className={`brand-name ${
                        activeNavLink === "home" ? "active" : ""
                    }`}
                    onClick={() => handleClick("home")}
                >
                    #VANLIFE
                </NavLink>
            </h2>
            <p>
                <NavLink
                    to={"host"}
                    className={activeNavLink === "host" ? "active" : ""}
                    onClick={() => handleClick("host")}
                >
                    Host
                </NavLink>
            </p>
            <p>
                <NavLink
                    to={"about"}
                    className={activeNavLink === "about" ? "active" : ""}
                    onClick={() => handleClick("about")}
                >
                    About
                </NavLink>
            </p>
            <p>
                <NavLink
                    to={"vans"}
                    className={activeNavLink === "vans" ? "active" : ""}
                    onClick={() => handleClick("vans")}
                >
                    Vans
                </NavLink>
            </p>
        </nav>
    );
}

export default Header;
