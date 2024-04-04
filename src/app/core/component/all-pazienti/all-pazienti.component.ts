import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CoreHttpService } from '../../service/coreHttp/core-http.service';
import { CommonModule } from '@angular/common';
import { paziente } from '../../interface/paziente';
import { Observable } from 'rxjs';
import { AllPazienti } from '../../interface/all-pazienti';

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
  $pazienti: AllPazienti[];
  stampaErrore: unknown;
  ngOnInit(){ 
    this.getAllPazienti()
  }  
  goToDashbord(){
    this.router.navigate(['/'])
  }
  getAllPazienti(){
    this.coreHttp.get<AllPazienti[]>('/getPazientiNonDimessi').subscribe((ris: AllPazienti[])=>{
      this.$pazienti=ris
    }
    )
  }
  modificaPaz(paziente: AllPazienti){
    this.router.navigate(['/paziente/'+paziente.idPaziente])
  }
  eliminaPaz(paziente: AllPazienti){
    this.coreHttp.delete<paziente>('/DeletePazienti/'+paziente.idPaziente).subscribe((ris: paziente)=>{
    })
    this.getAllPazienti()
  }
}
