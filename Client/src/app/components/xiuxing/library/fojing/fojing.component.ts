import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fojing',
  templateUrl: './fojing.component.html',
  styleUrls: ['./fojing.component.css']
})
export class FojingComponent implements OnInit {

  constructor(public router:Router ) { }

  ngOnInit() {
  }
  readFJ() {
    this.router.navigate(['library/fozhou'])
  }
}
