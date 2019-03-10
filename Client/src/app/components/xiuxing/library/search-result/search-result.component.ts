import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { StorageService } from '../../../../services/storage.service';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  public number:Number=0;
  public list:any[]=[];
  public searchInf:any;

  constructor(public router:Router,public http:HttpClient,public storage:StorageService) { }

  ngOnInit() {
    let inf =this.storage.get("searchInf");
    const httpOptions = { headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'})}
    this.http.post("/api/search",{"bookname":inf },httpOptions).subscribe((response:any)=>{
      this.list = response;
      this.number = this.list.length;
    });
  }
  search() {
    if(this.searchInf.length>0){
      const httpOptions = { headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'})}
      this.http.post("/api/search",{"bookname":this.searchInf },httpOptions).subscribe((response:any)=>{
        this.list = response;
        this.number = this.list.length;
        this.storage.remove("searchInf");
        this.storage.set("searchInf",this.searchInf);
       
      });
    
      this.router.navigate(['/searchResult']);
    }
  } 
  read(item) {
      if(item.booktype=="fozhou"){
        this.storage.set("zhouInf",item);
        this.router.navigate(['/zhouGeneral']);
      }else {
        this.storage.set("jingInf",item);
        this.router.navigate(['/jingGeneral']);
      }
  }
}
