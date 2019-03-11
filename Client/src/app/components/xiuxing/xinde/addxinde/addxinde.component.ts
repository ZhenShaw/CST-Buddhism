import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Message } from '../xinde.component';
import { FlashMessagesService } from 'angular2-flash-messages'

@Component({
  selector: 'app-addxinde',
  templateUrl: './addxinde.component.html',
  styleUrls: ['./addxinde.component.css']
})
export class AddxindeComponent implements OnInit {

  public Message:Message={
    WechatID:"asd",
    Xinde:"",
    Title:""
  }
  constructor(public http:HttpClient,public flashMessagesService:FlashMessagesService,public route:Router) { }

  ngOnInit() {
  }

  add(){
    console.log(this.Message);
    if(this.Message.Xinde == ""){
      this.flashMessagesService.show("心得不能为空！",{cssClass:"alert-danger",timeout:3000});
    }
    else if (this.Message.Title == ""){
      this.flashMessagesService.show("心得标题不能为空！",{cssClass:"alert-danger",timeout:3000});
    }
    else{
      let api = '/api/xiuxing/xinde/addxinde';
      const HttpOptions = {
        headers: new HttpHeaders({'Content-Type':'application/json'})
      }
      this.http.post(api,this.Message,HttpOptions).subscribe(res =>{
        console.log(res);
        if (res){
          this.route.navigate(['/xiuxing/xinde']);
        }
      })
    }
  }

}
