import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // 弹窗高度
  public height = "25%"

  constructor() { }

  ngOnInit() {
  }

}
