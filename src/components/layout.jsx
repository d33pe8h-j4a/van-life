import { Outlet } from "react-router-dom";
import Header from "../components/header";

function Layout() {
    return (
        <div id="main-section">
            <Header />
            <main>
                <Outlet />
            </main>
            <footer>Ⓒ 2022 #VANLIFE</footer>
        </div>
    );
}

export default Layout;
