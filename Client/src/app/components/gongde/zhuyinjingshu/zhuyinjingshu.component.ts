import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zhuyinjingshu',
  templateUrl: './zhuyinjingshu.component.html',
  styleUrls: ['./zhuyinjingshu.component.css']
})
export class ZhuyinjingshuComponent implements OnInit {

   pgvalue: number;
   //已达成的经书数量
  constructor() { }

  ngOnInit() {
    this.pgvalue=12777;
  }


 
 

}
