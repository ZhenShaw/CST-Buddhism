import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(public router: Router) { }

  public message:any="message";

public people:any={
name:"", //姓名
sex:"", //性别
birthday:"", //出生
fateforyear:"", //年命
luckfromgod:"", //天运
animal:"", //生肖
fate:"", //本命
divinesign:"" //命卦
}
moremessage(){
this.router.navigateByUrl("detail");
}
  ngOnInit() {
  }

}
