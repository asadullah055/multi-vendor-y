import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import store from "./store/index.js";

const App = lazy(() => import("./App.jsx"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback="Loading">
        <App />
        <Toaster
          toastOptions={{
            position: "top-center",
            style: { background: "#283046", color: "white" },
          }}
        />
      </Suspense>
    </Provider>
  </BrowserRouter>
);
