import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() height: any  //接收外部传入弹窗高度

  constructor() { }

  ngOnInit() {
    document.getElementById('modal').style.height = this.height
  }

  open() {
    document.getElementById('modal').style.display = 'block'
    document.getElementById('overlay').style.display = 'block'
  }

  close() {
    document.getElementById('modal').style.display = 'none'
    document.getElementById('overlay').style.display = 'none'
  }

}
