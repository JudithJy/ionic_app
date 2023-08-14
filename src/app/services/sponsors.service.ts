import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Sponsors } from '../models/sponsors';

const SERVER_API_URL = environment.SERVER_API_URL;

@Injectable({
  providedIn: 'root'
})
export class SponsorsService {

  constructor(private http: HttpClient) { }

  postSponsor(addSponsor:Sponsors){
    return this.http.post(`${SERVER_API_URL}/sponsor`,addSponsor)
  }

}
