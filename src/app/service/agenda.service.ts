import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { AgendaDto } from '../models/AgendaDto';
import { EvenementDto } from '../models/EvenementDto';
import { PersonDto } from '../models/PersonDto';


@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor(private http: HttpClient ) { }

  
  
  showAgenda(agendaId:number):Observable<EvenementDto[]>{
    return this.http.get<EvenementDto[]>('http://localhost:9090/api/agenda/'+ agendaId)
  }
  
  vindIemand(eventId:number):Observable<PersonDto[]>{
    return this.http.get<PersonDto[]>('http://localhost:9090/api/VindEenMattie/'+ eventId)
  }

  showAllEvents():Observable<EvenementDto[]>{
    return this.http.get<EvenementDto[]>('http://localhost:9090/api/evenement/all')
  }

  voegToeAanAgenda(eventid:number, agendaid: number):Observable<boolean>{
    return this.http.post<boolean>('http://localhost:9090/api/VoegToeAanAgenda/'+eventid+'/'+ agendaid, AgendaDto)
  }

}
