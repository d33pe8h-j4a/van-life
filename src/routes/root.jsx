import { Outlet, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function Root() {
    const [activeNavLink, setActiveNavLink] = useState("");
    function handleClick(activeLink) {
        setActiveNavLink(activeLink);
    }
    return (
        <div id="main-section">
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
            <main>
                <Outlet />
            </main>
            <footer>Ⓒ 2022 #VANLIFE</footer>
        </div>
    );
}

export default Root;
