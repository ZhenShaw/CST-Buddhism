import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  fozhou() {
    this.router.navigate(['/library/fozhou'])
  }
  fojing() {
    this.router.navigate(['/library/fojing'])
  }
}
