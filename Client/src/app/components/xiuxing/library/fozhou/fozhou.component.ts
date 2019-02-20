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
      console.log("佛咒");
      console.log(response);
    });
  }
  readFZ(item){
    this.storage.set("zhouInf",item);
    this.router.navigate(['/zhouGeneral']);
  }
}
