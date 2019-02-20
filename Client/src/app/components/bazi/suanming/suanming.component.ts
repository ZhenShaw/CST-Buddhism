import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router,NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-suanming',
  templateUrl: './suanming.component.html',
  styleUrls: ['./suanming.component.css']
})
export class SuanmingComponent implements OnInit {
public riqi:any
public year:any
public month:any
public day:any
public sex:any
public username:any

  constructor(public http:HttpClient,public router:Router) { }

  ngOnInit() {
   
  }
cesuan(){
  
  var now=new Date(this.riqi);            //获取date类型数据
  this.year=now.getFullYear();
  this.month=now.getMonth()+1;            //获取月份是从0-11的
  this.day=now.getDate();
  console.log(this.username,this.sex,this.year,this.month,this.day);
  // const httpOptions ={headers: new HttpHeaders({'Content-Type': 'application/json'})};
  // let api="http://localhost:4000/suan";
  // this.http.post(api,{"username":this.username,"sex":this.sex,"year":this.year,"month":this.month,"day":this.day,},httpOptions).subscribe(response=>{
  //   console.log(response);
  // })
  let queryParams:NavigationExtras={
    queryParams:{'name': this.username ,'sex':this.sex,'year':this.year,'month':this.month,'day':this.day}
    }
      this.router.navigate(['/result'],queryParams);
}
}

