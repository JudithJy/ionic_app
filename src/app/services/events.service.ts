import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const SERVER_API_URL = environment.SERVER_API_URL;

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http:HttpClient) { }

  getEvents(): Observable<any>{
    return this.http.get(`${SERVER_API_URL}/events`)
  }
}
