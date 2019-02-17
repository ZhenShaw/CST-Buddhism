import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simiao',
  templateUrl: './simiao.component.html',
  styleUrls: ['./simiao.component.css']
})
export class SimiaoComponent implements OnInit {

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
