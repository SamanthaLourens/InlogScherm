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

  constructor(private http: HttpClient, private service:ServiceService ) { }

  evenementId:number;

  static loginId: number;

 static zoek: string;

  login(inlognaam: string, wachtwoord:string): Observable<number>{
   return this.http.post<number>('http://localhost:9090/api/inloggen/'+inlognaam+'/'+ wachtwoord, PersonDto )
  }

  registreren(registername:string, password:string): Observable<PersonDto>{
    return this.http.post<PersonDto>('http://localhost:9090/api/aanmelden/'+registername+'/'+password, PersonDto);
  }

   
  showAgenda():Observable<EvenementDto[]>{
    console.log(ServiceService.loginId);
    return this.http.get<EvenementDto[]>('http://localhost:9090/api/agenda/'+ ServiceService.loginId);
  }
  
  vindIemand(eventId:number):Observable<PersonDto[]>{
    return this.http.get<PersonDto[]>('http://localhost:9090/api/VindEenMattie/'+ eventId);
  }

  showAllEvents():Observable<EvenementDto[]>{
    return this.http.get<EvenementDto[]>('http://localhost:9090/api/evenement/all');
  }

  voegToeAanAgenda(eventid:number){
    console.log(ServiceService.loginId);
    return this.http.post('http://localhost:9090/api/VoegToeAanAgenda/'+eventid+'/'+ ServiceService.loginId, PersonDto);
  }
  
  findById(id: number): Observable<EvenementDto>{
    return this.http.get<EvenementDto>("http://localhost:9090/api/evenement/" + id);
  }
  
  findByZoek () {
    return this.http.get<EvenementDto[]>("http://localhost:9090/api/evenement/zoek/" + ServiceService.zoek);
  }

}






