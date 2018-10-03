import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { PersonDto } from '../models/PersonDto';
import { Router } from '@angular/router';
import { AgendaComponent } from '../agenda/agenda.component';

@Component({
  selector: 'app-inlogscherm',
  templateUrl: './inlogscherm.component.html',
  styleUrls: ['./inlogscherm.component.css']
})


export class InlogschermComponent implements OnInit {

  // om in te loggen
  inlognaam: string;
  wachtwoord: string;
  message: string; 

  // om te registreren
  message1: string;
  setwachtwoord: string;
  registerName: string;

  inlogId:number = 0; //Wordt eerst op 0 gezet daarna op id van de gebruiker als hij ingelogd is 
  

 
  constructor(private service: ServiceService, private router:Router) { }

  ngOnInit() {
  }

  inloggen() {
   this.service.login(this.inlognaam, this.wachtwoord).subscribe( data => {
      if (data > 0){
        this.message = "inloggen toegestaan";
        ServiceService.loginId = data;
        this.router.navigate(['/searchbar']);
      }else{
        this.message = "inloggen niet toegestaan";
      }

    })

  }


  registrerenMogelijk(){
    this.service.registreren(this.registerName, this.setwachtwoord).subscribe(data =>{
      if (data){
      this.message1 = "registreren gelukt";
      }else this.message1 = "registreren mislukt";
    })
  
    }
}





