import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { StorageService } from '../../../../services/storage.service';
@Component({
  selector: 'app-fojing',
  templateUrl: './fojing.component.html',
  styleUrls: ['./fojing.component.css']
})
export class FojingComponent implements OnInit {
  public jingList:any[]=[]; 
  constructor(public router:Router,public http:HttpClient,public storage:StorageService ) { }

  ngOnInit() {

    const httpOptions = { headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'})}
    this.http.post("/api/library",{"booktype":"佛经"},httpOptions).subscribe((response:any)=>{
      this.jingList = response;
   
    })
  }
  readFJ(item) {
    let tempI:number=parseInt(item["readnumber"])+1;
    let tempS:string=String(tempI)
    const addReadNum={
      "booktype":"fojing",
      "bookname":item["bookname"],
      "readnumber":tempS
    }
    const httpOptions = { headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'})}
    this.http.post("/api/changeNumber",addReadNum,httpOptions).subscribe();
    this.storage.set("jingInf",item);
    this.router.navigate(['/jingGeneral']);
   
  }
}
