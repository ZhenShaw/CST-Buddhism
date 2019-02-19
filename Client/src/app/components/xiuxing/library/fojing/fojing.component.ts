import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http'
@Component({
  selector: 'app-fojing',
  templateUrl: './fojing.component.html',
  styleUrls: ['./fojing.component.css']
})
export class FojingComponent implements OnInit {
  public list:any[]=[]; 
  constructor(public router:Router,public http:HttpClient ) { }

  ngOnInit() {
    const httpOptions = { headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'})}
    this.http.post("http://127.0.0.1:900/library",{'booktype':"佛经"},httpOptions).subscribe((response:any)=>{
      this.list = response;
      console.log(this.list);
    })
  }
  readFJ() {
    this.router.navigate(['library/fozhou'])
  }
}
