import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { EvenementDto } from '../models/EvenementDto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})



export class SearchbarComponent implements OnInit {
  Zoekopdracht: string;
  Search: number;
  random: EvenementDto[];

  bericht:string;

  constructor(private service: ServiceService, private router:Router) { }

  ngOnInit() {}

  Evenement:string;
  Plaats:string;
  Datum:string;

  login:number;

  eventId:number;
  
  findByID(id : string){
    var hetID = parseInt(id);
    this.service.evenementId = hetID;
    ServiceService.zoek = id;
    console.log(id);
    this.router.navigate(['/searchresults'])

    }
  }


