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
  constructor() { }

  ngOnInit() {
    this.pgvalue = 12777;
  }

  open() {
    document.getElementById('modal').style.display = 'block'
    document.getElementById('overlay').style.display = 'block'
  }

  close() {
    document.getElementById('modal').style.display = 'none'
    document.getElementById('overlay').style.display = 'none'
  }




}
