import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { EvenementDto } from "../models/EvenementDto";
import { InlogschermComponent } from "../inlogscherm/inlogscherm.component";
import { PersonDto } from '../models/PersonDto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})


export class AgendaComponent implements OnInit {


  constructor(private service: ServiceService, private router:Router) { }

  evenementen: EvenementDto[];
  Evenement: string;
  Plaats:string;
  Datum:string;

  ngOnInit() { 
    this.service.showAgenda().subscribe( data => {
      this.evenementen = data;
      this.Evenement = 'Evenementen';
      this.Plaats = 'Plaats';
      this.Datum = 'Datum';} )      
  }


  allEvents(){
    this.router.navigate(['/evenementen']);

  }

  laatPersonenZien(eventid:number){
      this.service.evenementId = eventid;
      this.router.navigate(['/vindiemand']);
    }
  }






