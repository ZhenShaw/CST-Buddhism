import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-juanxianghuo',
  templateUrl: './juanxianghuo.component.html',
  styleUrls: ['./juanxianghuo.component.css']
})
export class JuanxianghuoComponent implements OnInit {

  constructor(public http:HttpClient) { }

  ngOnInit() {this.dodisplay()
  }
  //record用于记录用户选择的香的类型和购买的数量
  public record1:any={
    wechatid:'匿名',
    name:'',
    number:'',
    type:'',
  };
  public record2:any={}
  //选择香的按钮被点击，给香的type赋值对应的香名
  pinganxiang(){
  this.record1.type='平安香';
  console.log(this.record1.type);
  console.log(this.record1.name);
  var but1 = document.getElementById('button1'); 
  var but2 = document.getElementById('button2');
  var but3 = document.getElementById('button3');
  var but4 = document.getElementById('button4');
  var but5 = document.getElementById('button5');
  var but6 = document.getElementById('button6'); 
  but1.style.backgroundColor = '#f9a11b';   //改变当前按钮颜色
  but2.style.backgroundColor = '#ffc952';
  but3.style.backgroundColor = '#ffc952';
  but4.style.backgroundColor = '#ffc952';
  but5.style.backgroundColor = '#ffc952';
  but6.style.backgroundColor = '#ffc952';
  }
  xiaozaixiang(){
    this.record1.type='消灾香';
  var but1 = document.getElementById('button1'); 
  var but2 = document.getElementById('button2');
  var but3 = document.getElementById('button3');
  var but4 = document.getElementById('button4');
  var but5 = document.getElementById('button5');
  var but6 = document.getElementById('button6'); 
  but1.style.backgroundColor = '#ffc952';   
  but2.style.backgroundColor = '#f9a11b';//改变当前按钮颜色
  but3.style.backgroundColor = '#ffc952';
  but4.style.backgroundColor = '#ffc952';
  but5.style.backgroundColor = '#ffc952';
  but6.style.backgroundColor = '#ffc952';
  }
  fuguixiang(){
    this.record1.type='富贵香';
  var but1 = document.getElementById('button1'); 
  var but2 = document.getElementById('button2');
  var but3 = document.getElementById('button3');
  var but4 = document.getElementById('button4');
  var but5 = document.getElementById('button5');
  var but6 = document.getElementById('button6'); 
  but1.style.backgroundColor = '#ffc952';   
  but2.style.backgroundColor = '#ffc952';
  but3.style.backgroundColor = '#f9a11b';//改变当前按钮颜色
  but4.style.backgroundColor = '#ffc952';
  but5.style.backgroundColor = '#ffc952';
  but6.style.backgroundColor = '#ffc952';
  }
  qiuzixiang(){
    this.record1.type='求子香';
    var but1 = document.getElementById('button1'); 
  var but2 = document.getElementById('button2');
  var but3 = document.getElementById('button3');
  var but4 = document.getElementById('button4');
  var but5 = document.getElementById('button5');
  var but6 = document.getElementById('button6'); 
  but1.style.backgroundColor = '#ffc952';   
  but2.style.backgroundColor = '#ffc952';
  but3.style.backgroundColor = '#ffc952';
  but4.style.backgroundColor = '#f9a11b';//改变当前按钮颜色
  but5.style.backgroundColor = '#ffc952';
  but6.style.backgroundColor = '#ffc952';
    
  }
  zengcaixiang(){
    this.record1.type='增财香';
    var but1 = document.getElementById('button1'); 
  var but2 = document.getElementById('button2');
  var but3 = document.getElementById('button3');
  var but4 = document.getElementById('button4');
  var but5 = document.getElementById('button5');
  var but6 = document.getElementById('button6'); 
  but1.style.backgroundColor = '#ffc952';   
  but2.style.backgroundColor = '#ffc952';
  but3.style.backgroundColor = '#ffc952';
  but4.style.backgroundColor = '#ffc952';
  but5.style.backgroundColor = '#f9a11b';//改变当前按钮颜色
  but6.style.backgroundColor = '#ffc952';
  }
  zhihuixiang(){
    this.record1.type='智慧香';
    var but1 = document.getElementById('button1'); 
  var but2 = document.getElementById('button2');
  var but3 = document.getElementById('button3');
  var but4 = document.getElementById('button4');
  var but5 = document.getElementById('button5');
  var but6 = document.getElementById('button6'); 
  but1.style.backgroundColor = '#ffc952';   
  but2.style.backgroundColor = '#ffc952';
  but3.style.backgroundColor = '#ffc952';
  but4.style.backgroundColor = '#ffc952';
  but5.style.backgroundColor = '#ffc952';
  but6.style.backgroundColor = '#f9a11b';//改变当前按钮颜色
  }
  //select框选择时将数值赋值给record.number
  getChange(uid:string){
    console.log('=====');
    console.log(uid);
    this.record1.number=uid;
  }
//后端还未完成
pay(){
  console.log(this.record1);              
  const httpOptions ={headers:new HttpHeaders({'Content-Type':'application/json'})};
  var api="/api/gongde/juanxianghuo";
  this.http.post(api,this.record1,httpOptions).subscribe((response:any)=>{
    console.log(response)
    //判断姓名是否已经填写，香是否已选择
   if (response==true){
     alert("支付成功")
   }
   else{
     alert("请填写您的名字及选择香型")
   }
  }) 
  //清空消息
  this.record1={};
  this.record1.wechatid='匿名';
}
//获取数据库记录的数据
dodisplay(){
  var api="/api/gongde/juanxianghuo/display";
      this.http.get(api).subscribe((response:any)=>{
        console.log(response);
        this.record2=response;
        //this.record2 = Array.of(this.record2); 
      });
     // console.log(this.record2.Name)
}
}
