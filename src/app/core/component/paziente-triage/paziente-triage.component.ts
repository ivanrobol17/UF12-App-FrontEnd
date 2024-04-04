import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CoreHttpService } from '../../service/coreHttp/core-http.service';
import { AllPazienti } from '../../interface/all-pazienti';
import { Persone } from '../../interface/persone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paziente-triage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paziente-triage.component.html',
  styleUrl: './paziente-triage.component.css'
})
export class PazienteTriageComponent {
  constructor(private router:Router, private coreHttp:CoreHttpService){}
  $persone: Persone[];
  stampaErrore: unknown;
  ngOnInit(){ 
    this.getAllPersone()
  } 
  getAllPersone(){
    this.coreHttp.get<Persone[]>('/getPersone').subscribe((ris: Persone[])=>{
      this.$persone=ris
    }
    )
  }
  goToDashbord(){
    this.router.navigate(['/'])
  }

}
