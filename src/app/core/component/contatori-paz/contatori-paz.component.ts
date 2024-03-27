import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { numPaz } from '../../interface/num-paz';
import { CoreHttpService } from '../../service/coreHttp/core-http.service';

@Component({
  selector: 'app-contatori-paz',
  standalone: true,
  imports: [],
  templateUrl: './contatori-paz.component.html',
  styleUrl: './contatori-paz.component.css'
})
export class ContatoriPazComponent {
  constructor(private router:Router, private coreHttp:CoreHttpService){}
  $numPazInCura: numPaz[];
  $numPazInAttesa: numPaz[];
  stampaErrore: unknown;
  ngOnInit(){ 
    this.getNumPazInCura()
    this.getNumPazInAttesa()
  }  
  goToDashbord(){
    this.router.navigate(['/'])
  }
  getNumPazInCura(){
    this.coreHttp.get<numPaz[]>('/getContatoriPazInCura').subscribe((ris: numPaz[])=>{
      this.$numPazInCura=ris
    }
    )
  }
  getNumPazInAttesa(){
    this.coreHttp.get<numPaz[]>('/getContatoriPazInAttesa').subscribe((ris: numPaz[])=>{
      this.$numPazInAttesa=ris
    }
    )
  }
}
