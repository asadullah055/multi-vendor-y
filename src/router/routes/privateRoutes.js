
import adminRoutes from './adminRoutes';
import sellerRoutes from './sellerRoutes';

export const privetRoute = [
    ...adminRoutes,
    ...sellerRoutes
]