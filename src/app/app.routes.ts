import { Routes } from '@angular/router';

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
    {
        path:'contatori-paz',
        loadComponent() {
            return import('./core/component/contatori-paz/contatori-paz.component').then(m => m.ContatoriPazComponent)
        }
    },
    {
        path:'paziente/:id',
        loadComponent() {
            return import('./core/component/paziente/paziente.component').then(m => m.PazienteComponent)
        }
    },
    {
        path:'personeTriage',
        loadComponent() {
            return import('./core/component/paziente-triage/paziente-triage.component').then(m => m.PazienteTriageComponent)
        }
    },
];
