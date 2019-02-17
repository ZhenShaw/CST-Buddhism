import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simiaotwo',
  templateUrl: './simiaotwo.component.html',
  styleUrls: ['./simiaotwo.component.css']
})
export class SimiaotwoComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  firstpage(){
    this.router.navigate(['../simiao']);
  }
  
  secondpage(){
    this.router.navigate(['../simiaotwo']);
  }
  
  thirdpage(){
    this.router.navigate(['../simiaothree']);
  }
}
