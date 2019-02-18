import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(public http:HttpClient,public router: Router) { }

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
    /*var api = "https://localhost:9000/result";
    this.http.post(api,"12").subscribe(response=>{
      console.log(response)
      var result:any = response
      result.split(" ")
      this.people.birthday = result[1]
      this.people.birthday = response
    }) */
  }
  /*var result:any = "欧文 女 1999/05/30 不好 很坏 兔 木 八卦";
  var b:any[] = result.split(' ')
  this.people.name = b[0]
  this.people.sex = b[1]
  this.people.birthday = b[2]
  this.people.fateforyear = b[3]
  this.people.luckfromgod = b[4]
  this.people.animal = b[5]
  this.people.fate = b[6]
  this.people.divinesign = b[7]
  } */
}
