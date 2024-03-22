import { Component } from '@angular/core';
import { AllPazientiComponent } from "../all-pazienti/all-pazienti.component";
import { RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from '../../../app.routes';

@Component({
    selector: 'app-dashbord',
    standalone: true,
    templateUrl: './dashbord.component.html',
    styleUrl: './dashbord.component.css',
    imports: [AllPazientiComponent, RouterLink, RouterLinkActive]
})
export class DashbordComponent {
}
