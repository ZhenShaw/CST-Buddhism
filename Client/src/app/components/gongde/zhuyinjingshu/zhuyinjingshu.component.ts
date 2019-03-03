import { Component, OnInit, Output } from '@angular/core';
import { Pagination } from '../zhuyinjingshu/page/pagination';
import { Scripture } from './scripture';
import { Userinf } from './userinf';
import { Donator } from './donator';
import { Observable, of, observable, } from 'rxjs';
import { BOOKS } from './Count';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-zhuyinjingshu',
  templateUrl: './zhuyinjingshu.component.html',
  styleUrls: ['./zhuyinjingshu.component.css'],

})

@Output()


export class ZhuyinjingshuComponent implements OnInit {

  //印书数量
  booknum: number = 10;

  //多种经书种类
  book: Scripture = {
    scripturename: "", //经书名
    targetnum: 20000,  //目标数量
    nownum: 0,    //已达成数量
    donatornum: 0, //捐赠人数
  };
  //经书进度和目录
  booksbuff: any;
  //分页码
  pagenum: number = 1;
  //捐赠者
  donator: Donator;
  //捐赠者们
  donators: any
  //用户
  user: Userinf = {
    wechatid: "匿名",
    scripturename: "",
    donatenum: 10,
    do: "donate"
  }

  init = JSON.stringify({ "do": "init" });



  public pagination: Pagination = Pagination.defaultPagination;

  constructor(
    private http: HttpClient,
  ) {

  }

  public initList(): void {
    this.http.post('http://localhost:9000/yinjingshu', this.init, httpOptions).subscribe(
      data => {
        var booksbuff1 = JSON.stringify(data);
        var booksbuff2 = JSON.parse(booksbuff1);
        this.booksbuff = booksbuff2.slist;
        this.donators = booksbuff2.dlist;
        console.log("组件初始化,获取助印者列表和经书列表为：");
        console.log(this.donators);
        console.log(this.booksbuff);
        let page = this.pagination.currentPage - 1;
        this.pagination.totalItems = 6;
        let head = page;
        this.book = this.booksbuff[head];
      });

  }


  ngOnInit() {
    this.initList();
    this.pagination.changePage = (() => {
      this.initList();
      this.pagenum = this.pagination.currentPage;
      console.log(this.pagenum);
    });
  }
  // 弹窗的开关函数
  open() {
    document.getElementById('modal').style.display = 'block'
    document.getElementById('overlay').style.display = 'block'
  }
  close() {
    document.getElementById('modal').style.display = 'none'
    document.getElementById('overlay').style.display = 'none'
  }
  //改变助印书籍数量的函数
  select(num: number) {
    this.user.donatenum = num;
  }

  donation() {
    //根据页码改变捐赠经书类型
    
    switch (this.pagenum) {
      case 1:
        this.user.scripturename = this.booksbuff[0].scripturename;
        console.log(this.booksbuff[0].scripturename);
        break;
      case 2:
        this.user.scripturename = this.booksbuff[1].scripturename;
        console.log(this.booksbuff[1].scripturename);
        break;
      case 3:
        this.user.scripturename = this.booksbuff[2].scripturename;
        console.log(this.booksbuff[2].scripturename);
        break;
      case 4:
        this.user.scripturename = this.booksbuff[3].scripturename;
        console.log(this.booksbuff[3].scripturename);
        break;
      case 5:
        this.user.scripturename = this.booksbuff[4].scripturename;
        console.log(this.booksbuff[4].scripturename);
        break;
      case 6:
        this.user.scripturename = this.booksbuff[5].scripturename;
        console.log(this.booksbuff[5].scripturename);
        break;
    }
    this.SendDonator(this.user);
    this.close();
    this.initList();
    // location.reload();刷新网页的代码   
  }
  //发送捐赠请求
  SendDonator(user: Userinf) {
    if (this.user.wechatid == "") { this.user.wechatid = "匿名" }
    var todonate = JSON.stringify(this.user);
    console.log("发送捐赠请求,发送列表为：");
    console.log(todonate);
    this.http.post('http://localhost:9000/yinjingshu', todonate, httpOptions).subscribe(function (data) { console.log(data); });
  }

}
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};