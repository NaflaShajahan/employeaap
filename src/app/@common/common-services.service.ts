import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CommonServicesService {

  baseUrl = 'http://localhost:3000/'

  constructor(private http:HttpClient) { }


  login(params){
    return new Observable<any>(observe => {
      this.http.post(
        this.baseUrl + 'login',params
      ).subscribe(res => {
        observe.next(res);
        observe.complete();
      })
    })
  }

}
