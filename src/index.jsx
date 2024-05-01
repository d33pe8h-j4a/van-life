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
import HostLayout from "./components/hostLayout";
import Dashboard from "./routes/host/dashboard";
import Income from "./routes/host/income";
import Reviews from "./routes/host/reviews";
import HostVan from "./routes/host/vans";
import HostVanDetails from "./routes/host/van";
import Details from "./routes/host/van/details";
import Pricing from "./routes/host/van/pricing";
import Photos from "./routes/host/van/photos";
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
                path: "about",
                element: <About />,
            },
            {
                path: "vans",
                element: <Vans />,
            },
            {
                path: "vans/:vanId",
                element: <Van />,
            },
            {
                path: "host",
                element: <HostLayout />,
                children: [
                    {
                        index: true,
                        element: <Dashboard />,
                    },
                    {
                        path: "income",
                        element: <Income />,
                    },
                    {
                        path: "reviews",
                        element: <Reviews />,
                    },
                    {
                        path: "vans",
                        element: <HostVan />,
                    },
                    {
                        path: "vans/:vanId",
                        element: <HostVanDetails />,
                        children: [
                            {
                                index: true,
                                element: <Details />,
                            },
                            {
                                path: "pricing",
                                element: <Pricing />,
                            },
                            {
                                path: "photos",
                                element: <Photos />,
                            },
                        ],
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
