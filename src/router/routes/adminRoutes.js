import { lazy } from "react";

const AdminDashboard = lazy(() => import("../../views/admin/AdminDashboard"));

const adminRoutes = [
    {
        path: '/admin/dashboard',
        Component:AdminDashboard,
        role: 'admin'
    }
]

export default adminRoutes