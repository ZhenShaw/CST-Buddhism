import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-zhuyinjingshu',
  templateUrl: './zhuyinjingshu.component.html',
  styleUrls: ['./zhuyinjingshu.component.css']
})
export class ZhuyinjingshuComponent implements OnInit {
  //已达成的经书数量
  pgvalue: number;
  //参与人数
  participants: number;
  //购书数
  booknum: number;
  constructor() { }


  ngOnInit() {
    this.pgvalue = 12777;
    this.booknum = 10;
  }

  open() {
    document.getElementById('modal').style.display = 'block'
    document.getElementById('overlay').style.display = 'block'
  }

  select(num: number) {
    this.booknum = num;
  }

  close() {
    document.getElementById('modal').style.display = 'none'
    document.getElementById('overlay').style.display = 'none'
  }




}
