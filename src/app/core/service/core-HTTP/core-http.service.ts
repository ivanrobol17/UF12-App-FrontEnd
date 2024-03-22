import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreHttpService {

  private BaseUrl = 'https://pncsf5uw41.execute-api.us-east-1.amazonaws.com'
  constructor(private http: HttpClient) { }

  public get<T=unknown>(url: string): Observable<T>{
    return this.http.get<T>(url)
  }
}
