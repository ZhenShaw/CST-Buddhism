import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Message } from '../xinde.component';

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
  constructor(public http:HttpClient) { }

  ngOnInit() {
  }

  add(){
    console.log(this.Message);
    if(this.Message.Xinde == ""){
      alert("空的信息！请重新填写");
    }
    else{
      let api = 'http://127.0.0.1:9000/xiuxing/xinde/addxinde';
      const HttpOptions = {
        headers: new HttpHeaders({'Content-Type':'application/json'})
      }
      this.http.post(api,this.Message,HttpOptions).subscribe(res =>{
        console.log(res);
      })
    }
  }

}
