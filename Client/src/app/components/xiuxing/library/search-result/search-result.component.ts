import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { StorageService } from '../../../../services/storage.service';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  public number:Number;
  public list:any[]=[];
  constructor(public router:Router,public http:HttpClient,public storage:StorageService) { }

  ngOnInit() {
   this.list=this.storage.get("result");   
  }
  search() {
    this.router.navigate(['/searchResult']);
  } 
}
