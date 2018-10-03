import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uitloggen',
  templateUrl: './uitloggen.component.html',
  styleUrls: ['./uitloggen.component.css']
})
export class UitloggenComponent implements OnInit {

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
      ServiceService.loginId = 0;
      this.router.navigate (['/inloggen']);
    }
  }


