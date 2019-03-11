import { Component, OnInit,ViewChild } from '@angular/core';
import { StorageService } from '../../../../../../services/storage.service';
@Component({
  selector: 'app-jingyiwen',
  templateUrl: './jingyiwen.component.html',
  styleUrls: ['./jingyiwen.component.css']
})
export class JingyiwenComponent implements OnInit {
  @ViewChild("yiwentext") yiwentext:any;
  public yiwen:any;
  constructor(public storage:StorageService) { }

  ngOnInit() {
    this.yiwen=this.storage.get("yiwen");
    this.yiwentext.nativeElement.innerHTML=this.yiwen.yiwen;
  }

}
