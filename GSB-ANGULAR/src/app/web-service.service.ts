import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WebServiceService {

readonly APIUrl="http://localhost/gsbapi"

  constructor(private http:HttpClient) { }

  getMedecinsList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/medecin');
  }
}
