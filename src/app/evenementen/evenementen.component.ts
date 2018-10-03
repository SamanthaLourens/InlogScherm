import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { EvenementDto } from '../models/EvenementDto';

@Component({
  selector: 'app-evenementen',
  templateUrl: './evenementen.component.html',
  styleUrls: ['./evenementen.component.css']
})
export class EvenementenComponent implements OnInit {


  constructor(private service:ServiceService) { }
  
  events:EvenementDto[];
  Evenement: string;
  Plaats: string;
  Datum: string;


  bericht: string;

  ngOnInit() {
    this.service.showAllEvents().subscribe( data =>{
      this.events = data;
      this.Evenement = 'Evenementen';
      this.Plaats = 'Plaats';
      this.Datum = 'Datum';
      console.log(this.events);
    })
  }

  slaOp(eventid:number){
    if (ServiceService.loginId > 0){ 
      console.log(ServiceService.loginId);
    this.service.voegToeAanAgenda(eventid).subscribe( data => {
      if (data){
        this.bericht = "Evenement toegevoegd aan agenda "
        console.log(data);
      }else this.bericht = ''
    })}
    else{ this.bericht = "U bent niet ingelogd"}
  }

}
