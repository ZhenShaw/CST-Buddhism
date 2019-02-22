import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router,NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-suanming',
  templateUrl: './suanming.component.html',
  styleUrls: ['./suanming.component.css']
})
export class SuanmingComponent implements OnInit {
public riqi:any;
public year:any;
public month:any;
public day:any;
public sex:any;
public username:any;

  constructor(public http:HttpClient,public router:Router) { }

  ngOnInit() {
   
  }
cesuan(){
    if (this.username==null){
      alert("请输入你的姓名")
    }
    else{
        if(this.username.length<2){
          alert("请输入大于2的名字")
       }
        else{
          if(this.sex==null){
            alert("请选择性别")
        }
          else{
            var now=new Date(this.riqi);            //获取date类型数据
            this.year=now.getFullYear();
            this.month=now.getMonth()+1;            //获取月份是从0-11的
            this.day=now.getDate();
            if (( isNaN(this.year) ) || (this.year==null) ) {
              alert("请选择出生日期")
            }
            else{
              console.log(this.username,this.sex,this.year,this.month,this.day);
              
              let queryParams:NavigationExtras={                          //页面地址传值
                queryParams:{'name': this.username ,'sex':this.sex,'year':this.year,'month':this.month,'day':this.day}
                }
                  this.router.navigate(['/result'],queryParams);
            }
           }
        }
      }
}
}
