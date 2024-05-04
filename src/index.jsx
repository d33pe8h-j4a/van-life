import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import About from "./routes/about";
import Index from "./routes/home";
import Login, {
    loader as loginLoader,
    action as loginAction,
} from "./routes/login";
import Vans, { loader as vansLoader } from "./routes/vans/vans";
import Van, { loader as vanLoader } from "./routes/vans/van";
import Dashboard, { loader as dashboardLoader } from "./routes/host/dashboard";
import Income from "./routes/host/income";
import Reviews from "./routes/host/reviews";
import HostVans, { loader as hostVansLoader } from "./routes/host/vans";
import HostVanDetails, {
    loader as hostVanDetailsLoader,
} from "./routes/host/van";
import Details from "./routes/host/van/details";
import Pricing from "./routes/host/van/pricing";
import Photos from "./routes/host/van/photos";
import ErrorPage from "./routes/error-page";
import Layout from "./components/layout";
import HostLayout from "./components/hostLayout";
import "./server";
import { requireAuth } from "./utils";

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
                path: "login",
                element: <Login />,
                loader: loginLoader,
                action: loginAction,
            },
            {
                path: "vans",
                element: <Vans />,
                loader: vansLoader,
                errorElement: <ErrorPage />,
            },
            {
                path: "vans/:vanId",
                element: <Van />,
                loader: vanLoader,
                errorElement: <ErrorPage />,
            },
            {
                path: "host",
                element: <HostLayout />,
                children: [
                    {
                        index: true,
                        element: <Dashboard />,
                        loader: dashboardLoader,
                    },
                    {
                        path: "income",
                        element: <Income />,
                        loader: async ({ request }) =>
                            await requireAuth(request),
                    },
                    {
                        path: "reviews",
                        element: <Reviews />,
                        loader: async ({ request }) =>
                            await requireAuth(request),
                    },
                    {
                        path: "vans",
                        element: <HostVans />,
                        loader: hostVansLoader,
                        errorElement: <ErrorPage />,
                    },
                    {
                        path: "vans/:vanId",
                        element: <HostVanDetails />,
                        loader: hostVanDetailsLoader,
                        errorElement: <ErrorPage />,
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
