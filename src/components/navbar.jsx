import { useId } from "react";
import { NavLink } from "react-router-dom";

function Navbar({ navLinks }) {
    const capitalizeFirstLetter = (str) =>
        `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

    const id = useId();
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
    };

    const navElements = navLinks.map(({ path, tab, isDefault }) => (
        <li key={id + tab}>
            {isDefault ? (
                <NavLink
                    to={path}
                    style={({ isActive }) => (isActive ? activeStyle : {})}
                    end
                >
                    {capitalizeFirstLetter(tab)}
                </NavLink>
            ) : (
                <NavLink
                    to={path}
                    style={({ isActive }) => (isActive ? activeStyle : {})}
                >
                    {capitalizeFirstLetter(tab)}
                </NavLink>
            )}
        </li>
    ));

    return (
        <nav>
            <ul>{navElements}</ul>
        </nav>
    );
}

export default Navbar;
