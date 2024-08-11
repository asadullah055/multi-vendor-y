import { lazy } from "react";
import { privetRoute } from "./privateRoutes";
const MainLayout = lazy(() => import("../../layout/MainLayout"));
export const getRoutes = () => {
 
  /* privetRoute.map(r => {
      r.element = <ProtectRoute route={r} >{r.element}</ProtectRoute>
  }) */
  return {
      path: '/',
      Component: MainLayout,
      children: privetRoute
  }
}
