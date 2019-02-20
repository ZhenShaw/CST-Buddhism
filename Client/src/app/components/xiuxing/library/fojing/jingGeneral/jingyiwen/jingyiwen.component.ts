import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../../../../services/storage.service';
@Component({
  selector: 'app-jingyiwen',
  templateUrl: './jingyiwen.component.html',
  styleUrls: ['./jingyiwen.component.css']
})
export class JingyiwenComponent implements OnInit {
  public yiwen:any;
  constructor(public storage:StorageService) { }

  ngOnInit() {
    this.yiwen=this.storage.get("yiwen");
  }

}
