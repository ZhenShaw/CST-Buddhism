import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public year:string
  public month:string
  public date:string
  public sex:string
  public caiyun:any=''
  public jiankang:any=''
  public shiye:any=''
  public aiqing:any=''
  public jiaofei:any=false
  constructor(public http:HttpClient,public route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((data)=>{
      this.year=data.year;
      this.month=data.month;
      this.date=data.day;
      this.sex=data.sex;
      })
    const httpOptions ={headers:new HttpHeaders({'Content-Type':'application/json'})};
    let api="/api/bazi/bazhidetail";
    this.http.post(api,{year:this.year,month:this.month,date:this.date,sex:this.sex},httpOptions).subscribe((response:any)=>{
     this.caiyun=response.caiyun;
     this.jiankang=response.jiankang;
     this.shiye=response.shiye;
     this.aiqing=response.aiqing;

    });

  }

  money(){
    this.close();
    this.jiaofei=true;
  }
  

  close() {
    document.getElementById('modal').style.display = 'none'
    document.getElementById('content').style.display = 'none'
  }

}
