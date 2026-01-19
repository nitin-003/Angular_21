import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Profile } from './pages/profile/profile';
import { Setting } from './pages/setting/setting';
import { Admin } from './pages/admin/admin';

export const routes: Routes = [
    {path:'', component:Home},
    {path:'admin', loadComponent: () => import('./pages/admin/admin').then((c) => c.Admin)},
    {path:'user', 
        loadComponent: () => import('./pages/user/user').then((c) => c.User), 
        children: [
            {path:'', redirectTo:'profile', pathMatch:'full'},
            {path:'profile', component:Profile},
            {path:'setting', component:Setting}
        ]
    }
];


