import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { paziente } from '../../interface/paziente';

@Injectable({
  providedIn: 'root'
})
export class CoreHttpService {

  private BaseUrl = 'https://pncsf5uw41.execute-api.us-east-1.amazonaws.com/'
  constructor(private http: HttpClient) { }

  public get<T=unknown>(url: string): Observable<T>{
    return this.http.get<T>(this.BaseUrl+url) 
  }
  public post<T=unknown>(url: string, body: Omit<paziente, "Id">): Observable<T>{
    return this.http.post<T>(this.BaseUrl+url, body) 
  }
  public put<T=unknown>(url: string, body: paziente): Observable<T>{
    return this.http.post<T>(this.BaseUrl+url, body) 
  }
  public delete<T=unknown>(url: string): Observable<T>{
    return this.http.delete<T>(this.BaseUrl+url) 
  }
}
