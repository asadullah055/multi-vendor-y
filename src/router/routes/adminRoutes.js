import { lazy } from "react";

const AdminDashboard = lazy(() => import("../../views/admin/AdminDashboard"));
const Order = lazy(() => import("../../views/admin/Order"));
const Category = lazy(() => import("../../views/admin/Category"));
const Sellers = lazy(() => import("../../views/admin/Sellers"));
const PaymentRequest = lazy(() => import("../../views/admin/PaymentRequest"));
const DeactiveSellers = lazy(() => import("../../views/admin/DeactiveSellers"));
const SellerRequest = lazy(() => import("../../views/admin/SellerRequest"));
const SellerDetails = lazy(() => import("../../views/admin/SellerDetails"));
const ChatSeller = lazy(() => import("../../views/admin/ChatSeller"));
const OrderDetails = lazy(() => import("../../views/admin/OrderDetails"));

export const adminRoutes = [
  {
    path: "admin/dashboard",
    Component: AdminDashboard ,
    role: "admin",
  },
  {
    path: "admin/dashboard/orders",
    Component: Order ,
    role: "admin",
  },
  {
    path: "admin/dashboard/category",
    Component: Category ,
    role: "admin",
  },
  {
    path: "admin/dashboard/sellers",
    Component: Sellers ,
    role: "admin",
  },
  {
    path: "admin/dashboard/payment-request",
    Component: PaymentRequest ,
    role: "admin",
  },
  {
    path: "admin/dashboard/deactive-sellers",
    Component: DeactiveSellers ,
    role: "admin",
  },
  {
    path: "admin/dashboard/sellers-request",
    Component: SellerRequest ,
    role: "admin",
  },
  {
    path: "admin/dashboard/seller/details/:sellerId",
    Component: SellerDetails ,
    role: "admin",
  },
  {
    path: "admin/dashboard/chat-sellers",
    Component: ChatSeller ,
    role: "admin",
  },
  {
    path: "admin/dashboard/chat-sellers/:sellerId",
    Component: ChatSeller ,
    role: "admin",
  },
  {
    path: "admin/dashboard/order/details/:orderId",
    Component: OrderDetails ,
    role: "admin",
  },
];
