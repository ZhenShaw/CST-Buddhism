import { Component, OnInit } from '@angular/core';
import { Router, UrlSerializer } from '@angular/router';

@Component({
  selector: 'app-qiuqian',
  templateUrl: './qiuqian.component.html',
  styleUrls: ['./qiuqian.component.css']
})
export class QiuqianComponent implements OnInit {

  constructor(public router:Router) { }
  public kongzhidonghuaxiaoguo:any=''//控制动画样式

  ngOnInit() {
  }
  jieqian(){
    this.kongzhidonghuaxiaoguo='1'
    setTimeout(() => { this.router.navigate(['jieqian']) },2000)
    //2s动画，然后跳到解签界面
  }

}
