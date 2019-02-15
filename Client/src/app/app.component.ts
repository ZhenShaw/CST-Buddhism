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
  }
}
