import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { StorageService } from '../../../../../services/storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-zhou-general',
  templateUrl: './zhou-general.component.html',
  styleUrls: ['./zhou-general.component.css']
})
export class ZhouGeneralComponent implements OnInit {
  public zhouInf:any
  public displayInf:any
  constructor(public router:Router,public http:HttpClient,public storage:StorageService) { }

  ngOnInit() {
     this.zhouInf = this.storage.get("zhouInf");
     this.displayInf=this.zhouInf.contentintroduce;
  }
  readIntroduce() {
     this.displayInf=this.zhouInf.contentintroduce;
  }
  readContent() {
     this.displayInf=this.zhouInf.yuanwen;
  }
}
