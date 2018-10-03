import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { PersonDto } from '../models/PersonDto';
import { EvenementDto } from '../models/EvenementDto';
import { AgendaDto } from '../models/AgendaDto';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  constructor(private http: HttpClient ) { }

  evenementId:number;

  loginId:number;

  login(inlognaam: string, wachtwoord:string): Observable<number>{
   return this.http.post<number>('http://localhost:9090/api/inloggen/'+inlognaam+'/'+ wachtwoord, PersonDto )
  }

  registreren(registername:string, password:string): Observable<PersonDto>{
    return this.http.post<PersonDto>('http://localhost:9090/api/aanmelden/'+registername+'/'+password, PersonDto);
  }

   
  showAgenda():Observable<EvenementDto[]>{
    console.log(this.loginId);
    return this.http.get<EvenementDto[]>('http://localhost:9090/api/agenda/'+ this.loginId)
  }
  
  vindIemand(eventId:number):Observable<PersonDto[]>{
    return this.http.get<PersonDto[]>('http://localhost:9090/api/VindEenMattie/'+ eventId)
  }

  showAllEvents():Observable<EvenementDto[]>{
    return this.http.get<EvenementDto[]>('http://localhost:9090/api/evenement/all')
  }

  voegToeAanAgenda(eventid:number):Observable<boolean>{
    return this.http.post<boolean>('http://localhost:9090/api/VoegToeAanAgenda/'+eventid+'/'+ this.loginId, AgendaDto)
  }

}