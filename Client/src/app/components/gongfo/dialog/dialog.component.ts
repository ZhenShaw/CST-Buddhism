import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  open(){
    document.getElementById("dialog").style.display='block'
  }

  close(){
    document.getElementById("dialog").style.display='none'
  }
}
