import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { paziente } from '../../interface/paziente';
import { CoreHttpService } from '../../service/coreHttp/core-http.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paziente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paziente.component.html',
  styleUrl: './paziente.component.css'
})
export class PazienteComponent {
  constructor(private router:Router, private route: ActivatedRoute, private coreHttp:CoreHttpService){}
  $paziente: paziente;
  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.getAllPazienti(params['id'])
        }
      );  
  }
  getAllPazienti(id: number){
    this.coreHttp.get<paziente>('/getPazientiById/'+id).subscribe((ris: paziente)=>{
      this.$paziente=ris[0]
    }
    )
  }
  annulla(){
    this.router.navigate(['/'])
  }
}
