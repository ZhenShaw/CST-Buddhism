import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { StorageService } from '../../../../../services/storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-zhou-general',
  templateUrl: './zhou-general.component.html',
  styleUrls: ['./zhou-general.component.css']
})
export class ZhouGeneralComponent implements OnInit {
   @ViewChild("bookintroduce") bookintroduce:any;
   @ViewChild("displaytext") displaytext:any;
  public zhouInf:any
  public displayInf:any
  constructor(public router:Router,public http:HttpClient,public storage:StorageService) { }

  ngOnInit() {
     this.zhouInf = this.storage.get("zhouInf");
     this.displayInf=this.zhouInf.contentintroduce;
     this.bookintroduce.nativeElement.innerHTML=this.zhouInf.bookintroduce;
     this.displaytext.nativeElement.innerHTML=this.displayInf;
  }
  readIntroduce() {
     this.displayInf=this.zhouInf.contentintroduce;
     this.displaytext.nativeElement.innerHTML=this.displayInf;
  }
  readContent() {
     this.displayInf=this.zhouInf.yuanwen;
     this.displaytext.nativeElement.innerHTML=this.displayInf;
  }
}
