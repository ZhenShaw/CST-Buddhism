import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-jing-general',
  templateUrl: './jing-general.component.html',
  styleUrls: ['./jing-general.component.css']
})
export class JingGeneralComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  read() {
    this.router.navigate(['/jingyuanwen']);
  }
  translation() {
    this.router.navigate(['/jingyiwen']);
  }

}
