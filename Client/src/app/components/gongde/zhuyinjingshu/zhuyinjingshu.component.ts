import { Component, OnInit, Output } from '@angular/core';
import { Pagination } from '../zhuyinjingshu/page/pagination';
import { Scripture } from './scripture';
import { Userinf } from './userinf';
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
  booknum: number=10;

  //多种经书种类
  book: Scripture;
  //经书进度和目录
  booksbuff: any;
  //分页码
  pagenum:number=1;
  //捐赠者
  donator:Userinf;
  //捐赠者们
  donators:any

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
        this.donators=booksbuff2.dlist;
        console.log(this.donators);
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
    this.booknum = num;
  }

  donation(){

  }

}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};