import Navbar from "./navbar";
import { Outlet } from "react-router-dom";

function HostLayout() {
    const navLinks = [
        { path: ".", tab: "dashboard", isDefault: true },
        { path: "income", tab: "income", isDefault: false },
        { path: "vans", tab: "vans", isDefault: false },
        { path: "reviews", tab: "reviews", isDefault: false },
    ];
    return (
        <section id="host">
            <Navbar navLinks={navLinks} />
            <Outlet />
        </section>
    );
}

export default HostLayout;
