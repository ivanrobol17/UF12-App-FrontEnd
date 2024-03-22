import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DashbordComponent } from "./core/component/dashbord/dashbord.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, DashbordComponent, RouterLink, RouterLinkActive]
})
export class AppComponent {
  title = 'ospedale';
}
