import { sellerRoutes } from "./sellerRoutes";
import { adminRoutes } from './adminRoutes';

export const privetRoute = [...adminRoutes,...sellerRoutes];
