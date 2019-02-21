import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    // 设置body高度为窗口高度
    document.body.style.height = String(window.innerHeight) + "px"
    // var agent = navigator.userAgent.toLowerCase()
    // if (/iphone|ipod|ipad|ios|android/.test(agent)) {
    //   document.body.style.height = String(window.innerHeight) + "px"
    // } else {
    //   console.log(agent)
    //   document.body.style.width = "375px"
    //   document.body.style.height = "650px"
    // }
  }
}
