import { Component, OnInit } from '@angular/core';
import { InloggenService } from '../service/inloggen.service';
import { PersonDto } from '../models/PersonDto';

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
  
 
  constructor(private service: InloggenService) { }

  ngOnInit() {
  }

  inloggen() {
   this.service.login(this.inlognaam, this.wachtwoord).subscribe( data => {
      if (data > 0){
        this.message = "inloggen toegestaan";
        this.inlogId = data;
        //console.log(data);
        //console.log(this.inlogId);
        this.service.loginId = this.inlogId;
      }else this.message = "inloggen niet toegestaan"
      //console.log(data);
    })

  }


  registrerenMogelijk(){
    this.service.registreren(this.registerName, this.setwachtwoord).subscribe(data =>{
      if (data){
        //console.log(data);
      this.message1 = "registreren gelukt"
      }else this.message1 = "registreren mislukt"
    })
  
    }
}





