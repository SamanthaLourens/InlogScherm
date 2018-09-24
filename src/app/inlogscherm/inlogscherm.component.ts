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
  wachtwoord1: string; // om wachtwoord te checken
  message: string; 

  // om te registreren
  listLength: number;
  message1: string;
  setwachtwoord: string;
  registerName: string;
  person: PersonDto;
  

  constructor(private service: InloggenService) { }

  ngOnInit() {
  }

  inloggen(){
    this.service.login(this.inlognaam).subscribe( data => {
      this.wachtwoord1 = data[0].passWord;
      this.passWordCheck();
    })

  }

  passWordCheck(){
    if (this.wachtwoord1 == this.wachtwoord){
          this.message = "inloggen toegestaan"
    }
    else {
      this.inlognaam = ""
      this.wachtwoord = ""
      this.message = "Onjuiste inloggegevens"
    }
  }
  
  registrerenMogelijk(){
    this.service.registerCheck(this.registerName).subscribe( data=>{
      this.listLength = data.length;
      if (this.listLength > 0){
        this.message1 = "registeren niet toegestaan"
      }
      else{
        this.message1 = "registreren toegestaan" 
        this.person = new PersonDto();
        this.person.naam = this.registerName;
        this.person.passWord = this.setwachtwoord;
        this.person.id = 100; // Er mogen 100 in mijn database
        this.registreren();          
      }
    })
  }

  registreren(){
    this.service.registreren(this.person).subscribe( data=>{
      this.person = new PersonDto();
    })
    }
  }
}
