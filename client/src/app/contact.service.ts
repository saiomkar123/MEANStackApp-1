import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Contact} from './contact';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {

  constructor(private http: Http) { }

  // Retreving Contacts Services
  getContacts(){
    return this.http.get('http://localhost:6544/api/contact')
          .map(res => res.json());
  }

  // Add Contact Method
  addContact(newContact){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:6544/api/contact', newContact, {headers: headers})
        .map(res => res.json());
  }

  // Delete Contact
  deleteContact(id){
    return this.http.delete('http://localhost:6544/api/contact/'+id)
        .map(res => res.json())
  }
}
