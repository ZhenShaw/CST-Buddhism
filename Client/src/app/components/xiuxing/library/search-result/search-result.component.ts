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
  public number:Number;
  public list:any[]=[];
  public searchInf:any;
  constructor(public router:Router,public http:HttpClient,public storage:StorageService) { }

  ngOnInit() {
   this.list=this.storage.get("result");   
  }
  search() {
    
    const httpOptions = { headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'})}
    this.http.post("http://127.0.0.1:9000/search",{"bookname":this.searchInf },httpOptions).subscribe((response:any)=>{
      this.list = response;
      this.storage.remove("result");
      this.storage.set("result",this.list);
    });
    this.router.navigate(['/searchResult']);
  } 
  read(item) {
      if(item.booktype=="fozhou"){
        this.storage.set("zhouInf",item);
        this.router.navigate(['/zhouGeneral']);
      }else {
        this.storage.set("zhouInf",item);
        this.router.navigate(['/jingGeneral']);
      }
  }
}
