import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./components/layout";
import About from "./routes/about";
import Index from "./routes/home";
import Vans from "./routes/vans/vans";
import ErrorPage from "./routes/error-page";
import Van from "./routes/vans/van";
import Dashboard from "./routes/host/dashboard";
import Income from "./routes/host/income";
import Reviews from "./routes/host/reviews";
import "./server";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
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
            {
                path: "/host",
                element: <Dashboard />,
                children: [
                    {
                        path: "/host/income",
                        element: <Income />,
                    },
                    {
                        path: "/host/reviews",
                        element: <Reviews />,
                    },
                ],
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
