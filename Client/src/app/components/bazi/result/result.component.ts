import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http'
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
    const httpOptions = {headers: new HttpHeaders({'Content-Type':'application/json'})}
    var api = "http://127.0.0.1:9000/result";
    this.http.post(api,{"date":'2010/10/01'},httpOptions).subscribe(response=>{
      console.log(response)
      var b:any=response
      var a:any[]=b.split(" ")
      this.people.fateforyear=a[0]
      this.people.luckfromgod=a[1]
      this.people.animal=a[2]
      this.people.fate=a[3]
      this.people.divinesign=a[4]
    }) 
  }
}
