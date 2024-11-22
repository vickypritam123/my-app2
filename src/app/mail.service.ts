import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private _httpClient:HttpClient) { }

  getmails(): Observable<any>{
    return this._httpClient.get("https://jsonplaceholder.typicode.com/todos");
    

  }
}
