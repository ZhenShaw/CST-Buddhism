import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { StorageService } from '../../../../services/storage.service';

@Component({
  selector: 'app-fozhou',
  templateUrl: './fozhou.component.html',
  styleUrls: ['./fozhou.component.css']
})
export class FozhouComponent implements OnInit {
  public zhouList:any[]=[]
  constructor(public http:HttpClient,public router:Router,public storage:StorageService) { }

  ngOnInit() {
    
    const httpOptions = { headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'})}
    this.http.post("http://127.0.0.1:9000/library",{"booktype":"佛咒"},httpOptions).subscribe((response:any)=>{
      this.zhouList = response;

    });
  }
  readFZ(item){
   
    let tempI:number=parseInt(item["readnumber"])+1;
    let tempS:string=String(tempI);
    const addReadNum={
      "booktype":"fozhou",
      "bookname":item["bookname"],
      "readnumber":tempS
    }

    const httpOptions = { headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'})}
    this.http.post("http://127.0.0.1:9000/changeNumber",addReadNum,httpOptions).subscribe();
    this.storage.set("zhouInf",item);
    this.router.navigate(['/zhouGeneral']);
  }
}
