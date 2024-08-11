import { lazy } from "react";

const SellerDashboard = lazy(() =>
  import("../../views/seller/SellerDashboard")
);
const AddProduct = lazy(() => import("../../views/seller/AddProduct"));
const Products = lazy(() => import("../../views/seller/Products"));
const DiscountProducts = lazy(() =>
  import("../../views/seller/DiscountProducts")
);
const Orders = lazy(() => import("../../views/seller/Orders"));
const Payments = lazy(() => import("../../views/seller/Payments"));
const SellerToAdmin = lazy(() => import("../../views/seller/SellerToAdmin"));
const SellerToCustomer = lazy(() =>
  import("../../views/seller/SellerToCustomer")
);
const Profile = lazy(() => import("../../views/seller/Profile"));
const EditProduct = lazy(() => import("../../views/seller/EditProduct"));
const OrderDetails = lazy(() => import("../../views/seller/OrderDetails"));

export const sellerRoutes = [
  {
    path: "/seller/dashboard",
    Component: SellerDashboard,
    role: "seller",
    status: "active",
  },

  {
    path: "/seller/dashboard/add-product",
    Component: AddProduct,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/edit-product/:productId",
    Component: EditProduct,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/products",
    Component: Products,
    role: "seller",
    status: "active",
  },

  {
    path: "/seller/dashboard/discount-products",
    Component: DiscountProducts,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/orders",
    Component: Orders,
    role: "seller",
    visibility: ["active", "deactive"],
  },
  {
    path: "/seller/dashboard/order/details/:orderId",
    Component: OrderDetails,
    role: "seller",
    visibility: ["active", "deactive"],
  },
  {
    path: "/seller/dashboard/payments",
    Component: Payments,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/chat-support",
    Component: SellerToAdmin,
    role: "seller",
    visibility: ["active", "deactive", "pending"],
  },
  {
    path: "/seller/dashboard/chat-customer/:customerId",
    Component: SellerToCustomer,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/chat-customer",
    Component: SellerToCustomer,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/profile",
    Component: Profile,
    role: "seller",
    visibility: ["active", "deactive", "pending"],
  },
];
