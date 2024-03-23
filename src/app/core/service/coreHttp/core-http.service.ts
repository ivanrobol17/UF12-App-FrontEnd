import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { paziente } from '../../interface/paziente';

@Injectable({
  providedIn: 'root'
})
export class CoreHttpService {

  private BaseUrl = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  public get<T=unknown>(url: string): Observable<T>{
    return this.http.get<T>(this.BaseUrl+url)
  }
}
