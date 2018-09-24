import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { PersonDto } from '../models/PersonDto';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

export class InloggenService {

  constructor(private http: HttpClient ) { }

  
  login(inlognaam: string): Observable<PersonDto[]>{
   return this.http.get<PersonDto[]>('http://localhost:8080/api/person/name/'+ inlognaam);
  }


  registerCheck(inlognaam: string): Observable<PersonDto[]>{
  return this.http.get<PersonDto[]>('http://localhost:8080/api/person/name/'+ inlognaam);
  }

  registreren(person:PersonDto): Observable<PersonDto>{
    return this.http.post<PersonDto>('http://localhost:8080/api/person/', person);
  }

}
