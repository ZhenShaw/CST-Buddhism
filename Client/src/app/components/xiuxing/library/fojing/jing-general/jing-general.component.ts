import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { StorageService } from '../../../../../services/storage.service';
@Component({
  selector: 'app-jing-general',
  templateUrl: './jing-general.component.html',
  styleUrls: ['./jing-general.component.css']
})
export class JingGeneralComponent implements OnInit {
  public jingInf:any
  constructor(public router:Router,public http:HttpClient,public storage:StorageService) { }

  ngOnInit() {
    this.jingInf = this.storage.get("jingInf");
  }
  read() {
    this.storage.set("yuanwen",{"bookname":this.jingInf.bookname,"yuanwen":this.jingInf.yuanwen});
    this.router.navigate(['/jingyuanwen']);
  }
  translation() {
    this.storage.set("yiwen",{"bookname":this.jingInf.bookname,"yiwen":this.jingInf.yiwen});
    this.router.navigate(['/jingyiwen']);
  }

}
