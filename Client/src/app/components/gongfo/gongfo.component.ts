import { Component, OnInit } from '@angular/core';
import axios from 'axios';//引入第三方模块进行数据请求
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-gongfo',
  templateUrl: './gongfo.component.html',
  styleUrls: ['./gongfo.component.css']
})
export class GongfoComponent implements OnInit {

  constructor() { }

  status:number//记录换什么
  Listlength=0
  fo_index=0
  xiang_index=0
  flower_index=0
  fruit_index=0
  fo_list=new Array({
    url:"http://api10.buddhaheart.cn/webfiles/sys/201710/171015001922d66c.png",
    name:'',
    details:''
  })
 
  xiang_list=new Array({
    url:"http://api10.buddhaheart.cn/webfiles/sys/201710/171013142225d175.png",
    name:'',
    details:''
  })

  flower_list=new Array({
    url:"http://api10.buddhaheart.cn/webfiles/sys/201710/1710142350470a8e.png",
    name:'',
    details:''
  })

  fruit_list=new Array({
    url:"http://api10.buddhaheart.cn/webfiles/sys/201710/171013142539eb07.png",
    name:'',
    details:''
  })

  ngOnInit() {
  }

  flower(){
    this.status=2;
    var url ="http://localhost:9000/gongfo/flower"
    axios.get(url).then(res=>{
      console.log(res)
      this.flower_list=res.data
      console.log(this.flower_list)
      for (var item in res.data) {
        this.Listlength++;
      }
      console.log(this.Listlength)
    })
  }
  //换花
  flower_change(i:number){
    this.flower_index=i
  }

  fo(){
    this.status=1;
    var url ="http://localhost:9000/gongfo/fo"
    axios.get(url).then(res=>{
      console.log(res)
      this.fo_list=res.data
      for (var item in res.data) {
        this.Listlength++;
      }
      console.log(this.Listlength)
    })

  }
  //下一个佛
  next(){
    this.fo_index++;
    if(this.fo_index==this.Listlength){
      this.fo_index=0;
    }
  }
  //上一个佛
  pre(){
    this.fo_index--;
    if(this.fo_index<0){
      this.fo_index=this.Listlength-1;
    }
  }

  xiang(){
    this.status=3;
    var url ="http://localhost:9000/gongfo/xiang"
    axios.get(url).then(res=>{
      console.log(res)
      this.xiang_list=res.data
      for (var item in res.data) {
        this.Listlength++;
      }
      console.log(this.Listlength)
    })
  }
  //换香
  xiang_change(i:number){
    this.xiang_index=i
  }

  fruit(){
    this.status=4;
    var url ="http://localhost:9000/gongfo/fruit"
    axios.get(url).then(res=>{
      console.log(res)
      this.fruit_list=res.data
      for (var item in res.data) {
        this.Listlength++;
      }
      console.log(this.Listlength)
    })
  }
  //换水果
  fruit_change(i:number){
    this.fruit_index=i
  }
  //祈福
  bless(){

  }
}
