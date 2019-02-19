import { Component, OnInit } from '@angular/core';
import { Router, UrlSerializer } from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-jieqian',
  templateUrl: './jieqian.component.html',
  styleUrls: ['./jieqian.component.css']
})
export class JieqianComponent implements OnInit {

  public qiuqian:any={ }

  constructor(public router:Router,public http:HttpClient) { }

  ngOnInit() {
    const httpOptions={ headers:new HttpHeaders({'Content-Type':"application/x-www-form-urlencoded"}) };
    let api="http://localhost:9000/jieqian"; 
    this.http.post(api,'1',httpOptions).subscribe(response=>{ 
      this.qiuqian=response
      console.log(this.qiuqian)
  })
  }
  suanmi(){

    this.router.navigate(['suanming'])
  }

}
