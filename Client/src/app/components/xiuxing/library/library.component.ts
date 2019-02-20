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

    const httpOptions = { headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'})}
    this.http.post("http://127.0.0.1:9000/search",{"bookname":this.searchInf },httpOptions).subscribe((response:any)=>{
      this.list = response;
      this.storage.set("result",this.list);
    });
   
    this.router.navigate(['/searchResult']);
  }
}
