import { Component, OnInit } from '@angular/core';
import axios from 'axios';//引入第三方模块进行数据请求

@Component({
  selector: 'app-gongfo',
  templateUrl: './gongfo.component.html',
  styleUrls: ['./gongfo.component.css']
})
export class GongfoComponent implements OnInit {

  constructor() { }

  status:number
  fo_list:any={
    url:"http://api10.buddhaheart.cn/webfiles/sys/201710/171015001922d66c.png",
    name:'',
    details:''
  }
 
  xiang_list:any={
    url:"http://api10.buddhaheart.cn/webfiles/sys/201710/171013142225d175.png",
    name:'',
    details:''
  }

  flower_list:any={
    url:"http://api10.buddhaheart.cn/webfiles/sys/201710/1710142350470a8e.png",
    name:'',
    details:''
  }

  fruit_list:any={
    url:"http://api10.buddhaheart.cn/webfiles/sys/201710/171013142539eb07.png",
    name:'',
    details:''
  }

  ngOnInit() {
  }

  hua(){
    
  }

  fo(){
    this.status=1;
    var url ="/fo"
    axios({
      method: 'post',
      url: url,
      data: {
      },
      headers: { "Content-Type": "application/x-www-form-urlencoded" }

    }).then((res) => {
      console.log(res.data)
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
