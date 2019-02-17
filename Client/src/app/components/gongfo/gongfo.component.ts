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

  status:number
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

  next(){
    this.fo_index++;
    if(this.fo_index==this.Listlength){
      this.fo_index=0;
    }
  }

  pre(){
    this.fo_index--;
    if(this.fo_index<0){
      this.fo_index=this.Listlength-1;
    }
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

  xiang(){
    this.status=2;
  }

  fruit(){
    
  }

  bless(){

  }
}
