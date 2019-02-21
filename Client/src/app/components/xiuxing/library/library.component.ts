import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { StorageService } from '../../../services/storage.service';
@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  public searchInf:any;
  public list:any[]=[];
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
      if(this.searchInf.length>0){
        this.storage.remove("searchInf");
        this.storage.set("searchInf",this.searchInf); 
        this.router.navigate(['/searchResult']);
      }
  }
}
