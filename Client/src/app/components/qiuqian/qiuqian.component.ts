import { Component, OnInit } from '@angular/core';
import { Router, UrlSerializer } from '@angular/router';

@Component({
  selector: 'app-qiuqian',
  templateUrl: './qiuqian.component.html',
  styleUrls: ['./qiuqian.component.css']
})
export class QiuqianComponent implements OnInit {

  constructor(public router:Router) { 

    this._audio1=document.createElement("audio");
    this._audio1.src=this. playData1.Url;
    this._audio2=document.createElement("audio");
    this._audio2.src=this. playData2.Url;

  }
  public kongzhidonghuaxiaoguo:any=''//控制动画样式

  public _audio1:HTMLAudioElement;
  public playData1={
    Url: '../../../../assets/qiuqian/yaoyiyao.mp3'
  }
  public _audio2:HTMLAudioElement;
  public playData2={
    Url: '../../../../assets/qiuqian/jieguo.mp3'
  }

  ngOnInit() {
  }
  jieqian(){

    var element:any=document.getElementById('img');
    element.src="assets/qiuqian/qian.gif";
    this.kongzhidonghuaxiaoguo='1'
    this._audio1.play();
    setTimeout(() => { this.router.navigate(['jieqian']);
    this._audio2.play();
  },1500)
    //2s动画，然后跳到解签界面
  }

}
