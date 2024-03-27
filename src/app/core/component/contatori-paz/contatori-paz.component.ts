import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { numPaz } from '../../interface/num-paz';
import { CoreHttpService } from '../../service/coreHttp/core-http.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contatori-paz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contatori-paz.component.html',
  styleUrl: './contatori-paz.component.css'
})
export class ContatoriPazComponent {
  constructor(private router: Router, private coreHttp: CoreHttpService) { }
  $contatoriPaz: numPaz[];
  ngOnInit() {
    this.getContatori()
  }
  goToDashbord() {
    this.router.navigate(['/'])
  }
  getContatori() {
    this.coreHttp.get<numPaz[]>('/getContatoriCuraAttesa').subscribe(ris=>{
      this.$contatoriPaz = ris
    })
  }
}
