import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { StorageService } from '../../../services/storage.service';
@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  public searchInf:any;
  constructor(public router:Router,public http:HttpClient,public storage:StorageService) { }

  ngOnInit() {
  }

  fozhou() {

    this.router.navigate(['/library/fozhou']);
  }
  fojing() {
    this.router.navigate(['/library/fojing']);
  }
  search() {
    this.storage.set("result",{});
    this.router.navigate(['/searchResult']);
  }
}
