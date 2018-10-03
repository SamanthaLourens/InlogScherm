import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { EvenementDto } from '../models/EvenementDto';


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

  constructor(private service: ServiceService) { }

  ngOnInit() {}

  login:number;

  eventId:number;
  
  findByID(id : string){
    var hetID = parseInt(id);

    this.service.findByZoek(id).subscribe(data => {
      this.random = data;
      console.log(data);
    })
  }


  opslaan(eventid:number){
      this.service.voegToeAanAgenda(eventid).subscribe( data => {
        console.log(eventid);
        console.log(data);
        if (data){
          this.bericht = "Evenement toegevoegd aan agenda ";
        }else this.bericht = '';
      })}
  
}
