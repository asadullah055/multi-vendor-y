import { lazy } from "react";

const Home = lazy(() => import("../../views/pages/Home"));

const sellerRoutes = [
    {
        path: '/',
        Component: Home,
        ability: ['admin', 'seller']
    }
]

export default sellerRoutes