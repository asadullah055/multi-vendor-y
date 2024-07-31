import MainLayout from "../../layout/MainLayout"
import { privetRoute } from "./privateRoutes"


export const getRoutes = ()=>{
    return {
        path: '/',
        Component: MainLayout,
        children: privetRoute
    }
}