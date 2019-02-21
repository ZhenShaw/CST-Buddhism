import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(public http:HttpClient,public router: Router,public route:ActivatedRoute) { }

  public message:any="message";

  public people:any={
  name:"", //姓名
  sex:"", //性别
  birthday:"", //出生
  fateforyear:"", //年命
  luckfromgod:"", //天运
  animal:"", //生肖
  fate:"", //本命
  divinesign:"" //命卦
  }
  public year:any;
  public month:any;
  public day:any;
  moremessage(){
    let queryParams:NavigationExtras={
      queryParams:{'name': this.people.name ,'sex':this.people.sex,'year':this.year,'month':this.month,'day':this.day}
      }
        this.router.navigate(['/detail'],queryParams);
  
    
    }
  ngOnInit() {
    this.route.queryParams.subscribe((data)=>{
      console.log(data);
      this.people.name=data.name;
      this.people.sex=data.sex;
      this.year=data.year;
      this.month=data.month;
      this.day=data.day;
     })

    const httpOptions = {headers: new HttpHeaders({'Content-Type':'application/json'})}
    var api = "http://127.0.0.1:9000/result";
    this.http.post(api,{"date":'2010/10/01'},httpOptions).subscribe(response=>{
      console.log(response)
      var b:any=response
      var a:any[]=b.split(" ")
      this.people.fateforyear=a[0]
      this.people.luckfromgod=a[1]
      this.people.animal=a[2]
      this.people.fate=a[3]
      this.people.divinesign=a[4]
    }) 
  }
}
