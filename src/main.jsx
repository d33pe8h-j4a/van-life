import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import About from "./routes/about";
import Index from "./routes";
import Vans from "./routes/vans";
import ErrorPage from "./routes/error-page";
import Van from "./routes/van";
import "./server";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Index />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/vans",
                element: <Vans />,
            },
            {
                path: "/vans/:vanId",
                element: <Van />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
