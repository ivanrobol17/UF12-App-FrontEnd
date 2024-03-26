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
  $pazienti: paziente[];
  stampaErrore: unknown;
  ngOnInit(){ 
    this.getAllPazienti()
  }  
  goToDashbord(){
    this.router.navigate(['/'])
  }
  getAllPazienti(){
    this.coreHttp.get<paziente[]>('/getAllPazienti').subscribe((ris: paziente[])=>{
      this.$pazienti=ris
    }
    )
  }
  modificaPaz(paziente: paziente){
    this.coreHttp.put<paziente[]>('/UpdatePaziente/'+paziente.Id, paziente).subscribe((ris: paziente[])=>{
      this.$pazienti=ris
    })
    this.getAllPazienti()
  }
  eliminaPaz(paziente: paziente){
    this.coreHttp.delete<paziente[]>('/DeletePazienti/'+paziente.Id).subscribe((ris: paziente[])=>{
      this.$pazienti=ris
    })
    this.getAllPazienti()
  }
}
