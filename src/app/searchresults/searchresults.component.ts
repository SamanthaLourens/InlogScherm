import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { EvenementDto } from '../models/EvenementDto';
import { Router } from '@angular/router';
import { NogeenserviceService } from '../service/nogeenservice.service';

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.css']
})
export class SearchresultsComponent implements OnInit {

  constructor(private service: ServiceService, private nogeenservice:NogeenserviceService) { }

  ngOnInit() {   
    this.service.findByZoek().subscribe(data => {
    console.log(data);
    this.Evenement = 'Evenementen';
    this.Plaats = 'Plaats';
    this.Datum = 'Datum';
    this.random = data;
  })
}

Evenement:string;
Plaats:string;
Datum:string;
random: EvenementDto[]

bericht:string;


opslaan(eventid:number){
  this.nogeenservice.voegToeAanAgenda(eventid).subscribe( data => {
    console.log(eventid);
    console.log(data);
    if (data){
      this.bericht = "Evenement toegevoegd aan agenda ";
    }else this.bericht = '';
  })}


}
