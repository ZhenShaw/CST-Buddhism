import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Message{
  Uid?:number,
  WechatID:string,
  Createdat?:string,
  Xinde:string,
  Title:string
}

@Component({
  selector: 'app-xinde',
  templateUrl: './xinde.component.html',
  styleUrls: ['./xinde.component.css']
})


export class XindeComponent implements OnInit {

  public message:string;
  public messagelist:Message[]=[];
  constructor( public http:HttpClient ) {
   }

  ngOnInit() {
    this.getxinde();
  }
  
  getxinde(){
    let api = 'http://127.0.0.1:9000/xiuxing/xinde';
    this.http.get<Message[]>(api).subscribe(res=>{
      console.log(res);
      this.addxinde(res);
    })
  }

  addxinde(message:Message[]){
    this.messagelist=message;
  }
}