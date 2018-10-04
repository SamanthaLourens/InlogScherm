import { Injectable } from '@angular/core';
import { ServiceService } from './service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NogeenserviceService {

  
  inlogId: number;

  constructor(private http: HttpClient, private service: ServiceService) { }

  

  voegToeAanAgenda(eventid:number){
    console.log(ServiceService.loginId);
    this.inlogId = ServiceService.loginId;
    return this.http.post('http://localhost:9090/api/VoegToeAanAgenda/'+eventid+'/'+ this.inlogId, this.inlogId);
  }


}
