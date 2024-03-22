import { Routes } from '@angular/router';
import { DashbordComponent } from './core/component/dashbord/dashbord.component';

export const routes: Routes = [
    {
        path:'dashbord',
        loadComponent() {
            return import('./core/component/dashbord/dashbord.component').then(m => m.DashbordComponent)
        }
    },
    {
        path:'',
        redirectTo: '/dashbord',
        pathMatch: 'full'
    },
    {
        path:'all-patient',
        loadComponent() {
            return import('./core/component/all-pazienti/all-pazienti.component').then(m => m.AllPazientiComponent)
        }
    },
];
