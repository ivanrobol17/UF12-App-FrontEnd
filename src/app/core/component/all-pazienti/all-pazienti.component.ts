import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CoreHttpService } from '../../service/coreHttp/core-http.service';
import { CommonModule } from '@angular/common';
import { paziente } from '../../interface/paziente';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-pazienti',
  standalone: true,
  imports: [CommonModule],
  providers: [CoreHttpService],
  templateUrl: './all-pazienti.component.html',
  styleUrl: './all-pazienti.component.css'
})
export class AllPazientiComponent {
  constructor(private router:Router, private coreHttp:CoreHttpService){}
  $pazienti: Observable<paziente[]>;
  ngOnInit(){ 
    this.$pazienti=this.coreHttp.get<paziente[]>('/getAllPatients')
  }  
  goToDashbord(){
    this.router.navigate(['/'])
  }
}
