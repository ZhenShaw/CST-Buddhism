import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
@Component({
  selector: 'app-fozhou',
  templateUrl: './fozhou.component.html',
  styleUrls: ['./fozhou.component.css']
})
export class FozhouComponent implements OnInit {
  public list:any[]=[]
  constructor(public http:HttpClient) { }

  ngOnInit() {
    const httpOptions = { headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'})}
    this.http.post("http://127.0.0.1:9000/library",{'booktype':"佛咒"},httpOptions).subscribe((response:any)=>{
      this.list = response;
      console.log(this.list);
    })
  }

}
