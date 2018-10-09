import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ShopComponent } from './shop/shop.component';

export const appRoutes: Routes = [
    {
        path: "detail/:id",
        component: DetailComponent
    },
    {
        path: "",
        component: ShopComponent
    }
];
