import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Hackathons } from '../models/hackathons';

const SERVER_API_URL = environment.SERVER_API_URL;

@Injectable({
  providedIn: 'root'
})
export class HackathonsService {

  constructor(private http: HttpClient) { }

  postHackathons(addHackathon:Hackathons){
    return this.http.post(`${SERVER_API_URL}/hackathon`,addHackathon)
  }

}
