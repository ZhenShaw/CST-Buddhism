import { Component, OnInit,Output } from '@angular/core';
import { Pagination } from '../zhuyinjingshu/page/pagination';
import { JingShu } from './jingshu';
import { BOOKS } from './Count';
@Component({
  selector: 'app-zhuyinjingshu',
  templateUrl: './zhuyinjingshu.component.html',
  styleUrls: ['./zhuyinjingshu.component.css'],

})

@Output()


export class ZhuyinjingshuComponent implements OnInit {
  //已达成的经书数量
  pgvalue: number;
  //参与人数
  participants: number;
  //购书数
  booknum: number;
  //多种经书种类
  book: JingShu;


  public pagination: Pagination = Pagination.defaultPagination;

  constructor() { }

  private initList(): void {
    let url: string = 'your-url';
    let page = this.pagination.currentPage - 1;
    this.pagination.totalItems = 6;
    let head = page;
    this.book = BOOKS[head];
  }


  ngOnInit() {
    this.pgvalue = 12777;
    this.booknum = 10;


    this.initList();
    this.pagination.changePage = (() => {
      this.initList();
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






}
