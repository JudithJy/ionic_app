import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Contacts } from '../models/contacts';

const SERVER_API_URL = environment.SERVER_API_URL;

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  postContact(addContact:Contacts){
    return this.http.post(`${SERVER_API_URL}/contact`,addContact)
  }

  
}
