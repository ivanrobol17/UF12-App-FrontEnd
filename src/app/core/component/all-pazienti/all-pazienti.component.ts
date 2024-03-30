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
    this.coreHttp.get<paziente[]>('/getPazientiNonDimessi').subscribe((ris: paziente[])=>{
      this.$pazienti=ris
    }
    )
  }
  modificaPaz(paziente: paziente){
    this.router.navigate(['/paziente/'+paziente.Id])
  }
  eliminaPaz(paziente: paziente){
    this.coreHttp.delete<paziente>('/DeletePazienti/'+paziente.Id).subscribe((ris: paziente)=>{
    })
    this.getAllPazienti()
  }
}
