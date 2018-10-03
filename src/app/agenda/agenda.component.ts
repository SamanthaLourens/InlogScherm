import { Component, OnInit } from '@angular/core';
import { InloggenService } from '../service/inloggen.service';
import { EvenementDto } from "../models/EvenementDto";
import { InlogschermComponent } from "../inlogscherm/inlogscherm.component";
import { PersonDto } from '../models/PersonDto';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})


export class AgendaComponent implements OnInit {


  constructor(private service: InloggenService) { }

  ngOnInit() {
  }

  events: EvenementDto[];
  evenementen: EvenementDto[];

  Evenement: string;
  Plaats:string;
  Datum:string;

  personen:PersonDto[];

  bericht:string;

  laatzien: string;


  showPlans(){
    this.service.showAgenda().subscribe( data => {
      this.evenementen = data;
      this.Evenement = 'Evenementen';
      this.Plaats = 'Plaats';
      this.Datum = 'Datum';
      //console.log(data);
      //console.log(this.events);
    })
  }

  allEvents(){
    this.service.showAllEvents().subscribe( data =>{
      this.events = data;
      this.Evenement = 'Evenementen';
      this.Plaats = 'Plaats';
      this.Datum = 'Datum';
      console.log(this.events);
    })

  }

  slaOp(eventid:number, agendaid:number){
    this.service.voegToeAanAgenda(eventid).subscribe( data => {
      if (data){
        this.bericht = "Evenement toegevoegd aan agenda "
        console.log(data);
      }else this.bericht = '';
    })
  }

  laatPersonenZien(eventid:number){
    this.service.vindIemand(eventid).subscribe( data => {
      this.laatzien = "Deze personen gaan naar het evenement";
      this.personen = data;

    })
  }

}




