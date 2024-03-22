import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-all-pazienti',
  standalone: true,
  imports: [],
  templateUrl: './all-pazienti.component.html',
  styleUrl: './all-pazienti.component.css'
})
export class AllPazientiComponent {
  constructor(private router:Router){}
  goToDashbord(){
    this.router.navigate(['/'])
  }
}
