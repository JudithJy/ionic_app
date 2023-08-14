import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Partners } from '../models/partners';

const SERVER_API_URL = environment.SERVER_API_URL;

@Injectable({
  providedIn: 'root'
})
export class PartnersService {

  constructor(private http: HttpClient) { }
  postPartner(addPartner:Partners){
    return this.http.post(`${SERVER_API_URL}/partner`,addPartner)
  }

}
