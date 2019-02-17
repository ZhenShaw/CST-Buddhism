import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simiaothree',
  templateUrl: './simiaothree.component.html',
  styleUrls: ['./simiaothree.component.css']
})
export class SimiaothreeComponent implements OnInit {

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
