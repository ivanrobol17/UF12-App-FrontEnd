import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CoreHttpService } from '../../service/coreHttp/core-http.service';
import { AllPazienti } from '../../interface/all-pazienti';
import { Persone } from '../../interface/persone';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RicercaPersona } from '../../interface/ricerca-persona';

@Component({
  selector: 'app-paziente-triage',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './paziente-triage.component.html',
  styleUrl: './paziente-triage.component.css'
})
export class PazienteTriageComponent {
  $persone: Persone[];
  stampaErrore: unknown;
  ricercaPersone: FormGroup;
  constructor(private router:Router, private coreHttp:CoreHttpService){
    this.ricercaPersone= new FormGroup({
      nome: new FormControl(""),
      cognome: new FormControl(""),
      cf: new FormControl(""),
      sesso: new FormControl(""),
      dataNascita: new FormControl("")
    })
  }
  ngOnInit(){ 
    // this.getAllPersone()
  } 
  getAllPersone(){
    this.coreHttp.get<Persone[]>('/getPersone').subscribe((ris: Persone[])=>{
      this.$persone=ris
    }
    )
  }
  getPersoneCercate(){
    let campiricerca: Partial<RicercaPersona> = this.getValoriCompilati();
    console.log(campiricerca)
    this.coreHttp.get<Persone[]>('/ricercaPersone').subscribe((ris: Persone[])=>{
      this.$persone=ris
    }
    )
  }
  
  goToDashbord(){
    this.router.navigate(['/'])
  }
  getValoriCompilati(): Partial<RicercaPersona>  {
    const formValues = this.ricercaPersone.value;
    const campiRiempiti = {};
  
    for (const campo in formValues) {
      if (formValues.hasOwnProperty(campo) && formValues[campo]) {
        campiRiempiti[campo] = formValues[campo];
      }
    }
  
    return campiRiempiti;
  }

}
