import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: NxWelcomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'products',
        loadComponent: () => import('@myngapp/modules/products').then((c) => c.ProductsComponent)
    }, 
    {
        path: 'orders',
        loadComponent: () => import('@myngapp/modules/orders').then((c) => c.OrdersComponent)
    }
];
