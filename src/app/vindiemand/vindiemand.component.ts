import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { PersonDto } from '../models/PersonDto';

@Component({
  selector: 'app-vindiemand',
  templateUrl: './vindiemand.component.html',
  styleUrls: ['./vindiemand.component.css']
})



export class VindiemandComponent implements OnInit {

  laatzien:string;
  personen:PersonDto[];

  constructor(private service:ServiceService) {}

  ngOnInit() {
    this.service.vindIemand(this.service.evenementId).subscribe( data => {
    this.laatzien = "Deze personen gaan naar het evenement";
    this.personen = data;

  })

}



}