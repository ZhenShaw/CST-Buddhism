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

  public people:any={
  name:"", //姓名
  sex:"", //性别
  birthday:"", //出生
  yinli:"", //阴历
  nianzhu:"", //年柱
  yuezhu:"", //月柱
  rizhu:"", //日柱
  fateforyear:"", //年命
  luckfromgod:"", //天运
  animal:"", //生肖
  fate:"", //本命
  divinesign:"", //命卦
  jin:"",
  mu:"",
  shui:"",
  huo:"",
  tu:""
  }
  public sex:any;
  public year:any;
  public month:any;
  public day:any;
  moremessage(){
    let queryParams:NavigationExtras={
      queryParams:{'name': this.people.name ,'sex':this.sex,'year':this.year,'month':this.month,'day':this.day}
      }
        this.router.navigate(['/detail'],queryParams);
  
    
    }
  ngOnInit() {
    this.route.queryParams.subscribe((data)=>{
      console.log(data);
      this.people.name=data.name;
      this.sex=data.sex;
      if(data.sex==1){
        this.people.sex="男";
      }
      else {
        this.people.sex="女";
      }
      this.year=data.year;
      this.month=data.month;
      this.day=data.day;
     })
     this.people.birthday = this.year + "年" + this.month + "月" + this.day+"日";
    const httpOptions = {headers: new HttpHeaders({'Content-Type':'application/json'})}
    var api = "/api/result";
    this.http.post(api,{"year":this.year,"month":this.month,"day":this.day,"sex":this.people.sex},httpOptions).subscribe(response=>{
      console.log(response)
      var b:any=response
      var a:any[]=b.split(" ")
      this.people.fateforyear=a[0]
      this.people.luckfromgod=a[1]
      this.people.animal=a[2]
      this.people.fate=a[3]
      this.people.divinesign=a[4]
      this.people.yinli=a[5]+"   "+a[6]+"   "+a[7]
      this.people.nianzhu=a[8]
      this.people.yuezhu=a[9]
      this.people.rizhu=a[10]
      this.people.mu=a[11]
      this.people.jin=a[12]
      this.people.shui=a[13]
      this.people.huo=a[14]
      this.people.tu=a[15]
    }) 
  }
}
