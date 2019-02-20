import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Message{
  Uid?:number,
  WechatID:string,
  Createdat?:string,
  Xinde:string,
  Title:string
}

@Component({
  selector: 'app-xinde',
  templateUrl: './xinde.component.html',
  styleUrls: ['./xinde.component.css']
})


export class XindeComponent implements OnInit {

  public message:string;
  public messagelist:Message[]=[];
  totalUser:number;
  public email:string;
  public tableList = [];
  public tablePageList = [];  //分页后前台显示数据
  public pageNo = 1; //当前页码
  public preShow = false; //上一页
  public nextShow = true; //下一页
  public pageSize = 5; //单页显示数
  public curPage = 1; //当前页
  public pageNos:number[]=[5,10];
  constructor( public http:HttpClient ) {
   }

  ngOnInit() {
    this.getxinde();
  }
  
  getxinde(){
    let api = 'http://127.0.0.1:9000/xiuxing/xinde';
    this.http.get<Message[]>(api).subscribe(res=>{
      console.log(res);
      this.addxinde(res);
      this.getPageList();
      this.onChangePageSize(3);
    })
  }

  addxinde(message:Message[]){
    this.messagelist=message;
  }


  getPageList() {
    if (this.messagelist.length >= 1) {//如果有数据
      if (this.messagelist.length % this.pageSize === 0) {//如果刚好10/5=2，刚好两页，否则9%5=1，就再多加一页
        this.pageNo = Math.floor(this.messagelist.length / this.pageSize);//当前页等于，Math.floor，返回一个小于等于参数的最大整数
      } else {
        this.pageNo = Math.floor(this.messagelist.length / this.pageSize) + 1;
      }
      if (this.pageNo < this.curPage) {
        this.curPage = this.curPage - 1;
      }
      if (this.pageNo === 1 || this.curPage === this.pageNo) {
        this.preShow = this.curPage !== 1;
        this.nextShow = false;
      } else {
        this.preShow = this.curPage !== 1;
        this.nextShow = true;
      }
    } else {
      this.messagelist.length = 0;
      this.pageNo = 1;//当前页为1
      this.curPage = 1;//当前页为1
    }
    this.tablePageList = this.messagelist.slice((this.curPage - 1) * this.pageSize, (this.curPage) * this.pageSize)
  }
  //点击上一页方法
  showPrePage() {
    this.curPage--;
    if (this.curPage >= 1) {
      this.getPageList();
    } else {
      this.curPage = 1;
    }
  }
  //点击下一页方法
  showNextPage() {
    this.curPage++;
    if (this.curPage <= this.pageNo) {
      this.getPageList();
    } else {
      this.curPage = this.pageNo;
    }
  }
  //改变每页显示方法
  onChangePageSize(value) {
    this.pageSize = value;
    this.curPage = 1;
    this.getPageList();
  }
  
}