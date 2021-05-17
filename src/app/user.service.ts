import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private _url:string = '/assets/companyname.json';
  constructor(private http:HttpClient) { }

  getCompanies():Observable<String[]> {
    return this.http.get<String[]>(this._url);
  }
}