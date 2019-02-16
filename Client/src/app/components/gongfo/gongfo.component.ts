import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';//路由

@Component({
  selector: 'app-gongfo',
  templateUrl: './gongfo.component.html',
  styleUrls: ['./gongfo.component.css']
})
export class GongfoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  hua(){
    this.router.navigateByUrl("/gongfo/modal")
  }

  fo(){
   this.router.navigateByUrl("/gongfo/modal")
  }

  xiang(){
    this.router.navigateByUrl("/gongfo/modal")
  }

  fruit(){
    this.router.navigateByUrl("/gongfo/modal")
  }
}
