import { Injectable } from '@angular/core';
import{Audio}from'../interface/audio.model';
import{PlayData}from'../interface/playdata.model';
@Injectable({
  providedIn: 'root'
})
export class AudioService {

  private _audio:HTMLAudioElement;
  public playList:Audio[];
  //当前播放的数据
  public playData:PlayData;
  private listenInterval;
  constructor() { 
     //初始化音频
     this._audio=document.createElement("audio");
     this._audio.autoplay=false;
     this._audio.onplay= () => {
        let that=this;
        //window对象 setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。
        this.listenInterval=window.setInterval(() => {
          that.playData.Current=that._audio.currentTime;//播放到
          that.playData.Url=that._audio.src;//图片地址
          that.playData.During=that._audio.duration;//音频全长
          that.playData.Data=that._audio.buffered &&//已缓冲
             that._audio.buffered.length ?
             (that._audio.buffered.end(0)||0) : 0;
           },1000);
           this.playData.IsPlaying=true;
     };
      //音频播放结束之后执行
    this._audio.onended =() => {
      window.clearInterval(this.listenInterval);
      this.playData.Current=this._audio.currentTime;
      this.playData.Url=this._audio.src;
      this.playData.During=this._audio.duration;
      this.playData.Data=this._audio.buffered &&
           this._audio.buffered.length ?
           (this._audio.buffered.end(0) || 0) : 0;
      this.playData.IsPlaying=false;
    }
     //音频暂停播放时执行
     this._audio.onpause = () => {
      window.clearInterval(this.listenInterval);//先停止
      this.playData.Current=this._audio.currentTime;
      this.playData.Url=this._audio.src;
      this.playData.During=this._audio.duration;
      this.playData.Data = this._audio.buffered &&
           this._audio.buffered.length ?
           (this._audio.buffered.end(0) || 0): 0;
      this.playData.IsPlaying=false;

    };
    this.playData = { Style: 0, Index: 0 };
    this.playList=[
        {Url: 'https://cst-1256261760.cos.ap-guangzhou.myqcloud.com/audio/%E5%8D%97%E6%97%A0%E9%98%BF%E5%BC%A5%E9%99%80%E4%BD%9B.mp3', Title: '大悲咒'},
        {Url: 'https://cst-1256261760.cos.ap-guangzhou.myqcloud.com/audio/%E5%A4%A7%E6%82%B2%E5%92%92.mp3', Title: '南无阿弥陀佛'},
        {Url: 'https://cst-1256261760.cos.ap-guangzhou.myqcloud.com/audio/%E5%8D%97%E6%97%A0%E9%98%BF%E5%BC%A5%E9%99%80%E4%BD%9B.mp3', Title: '六字真言'},
        {Url: 'https://cst-1256261760.cos.ap-guangzhou.myqcloud.com/audio/%E5%8D%97%E6%97%A0%E9%98%BF%E5%BC%A5%E9%99%80%E4%BD%9B.mp3', Title: '地藏经'},
        {Url: 'https://cst-1256261760.cos.ap-guangzhou.myqcloud.com/audio/%E5%8D%97%E6%97%A0%E9%98%BF%E5%BC%A5%E9%99%80%E4%BD%9B.mp3', Title: '消灾吉祥神咒'},
        {Url: 'https://cst-1256261760.cos.ap-guangzhou.myqcloud.com/audio/%E5%8D%97%E6%97%A0%E9%98%BF%E5%BC%A5%E9%99%80%E4%BD%9B.mp3', Title: '心经'},
        {Url: 'https://cst-1256261760.cos.ap-guangzhou.myqcloud.com/audio/%E5%8D%97%E6%97%A0%E9%98%BF%E5%BC%A5%E9%99%80%E4%BD%9B.mp3', Title: '楞严咒'},
        {Url: 'https://cst-1256261760.cos.ap-guangzhou.myqcloud.com/audio/%E5%8D%97%E6%97%A0%E9%98%BF%E5%BC%A5%E9%99%80%E4%BD%9B.mp3', Title: '往生咒'},
        {Url: 'https://cst-1256261760.cos.ap-guangzhou.myqcloud.com/audio/%E5%8D%97%E6%97%A0%E9%98%BF%E5%BC%A5%E9%99%80%E4%BD%9B.mp3', Title: '般若波罗蜜多心经'}
    ];
  }
   //添加音频
public add(audio:Audio): void {
  this.playList.push(audio);
  if(this.playList.length===1) {
    this.PlayIndex(0);
  }
}
//进度条
public Skip(percent: number): void {
  this._audio.currentTime = this._audio.duration * percent;
  this.playData.Current = this._audio.currentTime;
}

//上一首
public Prev(): void {
  switch (this.playData.Style) {
      case 0:
          if (this.playData.Index > 0) {
              this.playData.Index--;
              this.PlayIndex(this.playData.Index);
          }
          break;
      case 1:
          this.playData.Index = (this.playData.Index - 1) < 0 ?
              (this.playList.length - 1) :
              (this.playData.Index - 1);
          this.PlayIndex(this.playData.Index);
          break;
      case 2:
          this.playData.Index = (this.playData.Index - 1) < 0 ?
              (this.playList.length - 1) :
              (this.playData.Index - 1);
          this.PlayIndex(this.playData.Index);
          console.log('暂不考虑随机播放将视为列表循环播放');
          break;
      case 3:
          this._audio.currentTime = 0;
          break;
      default:
          if (this.playData.Index > 0) {
              this.playData.Index--;
              this.PlayIndex(this.playData.Index);
          }
          break;
  }
}
public Toggle(audio?: Audio): void {
  let tryGet = audio ?
      this.playList.findIndex((p) => p.Url === audio.Url) :
      this.playData.Index;
  if (tryGet < 0) {
      this.playList.push(audio);
      this.PlayIndex(this.playList.length);
  } else {
      if (tryGet === this.playData.Index) {
          if (this._audio.paused) {
              this._audio.play();
              this.playData.IsPlaying = true;
          } else {
              this._audio.pause();
              this.playData.IsPlaying = false;
          }
      } else {
          this.PlayIndex(tryGet);
      }
  }
}

//下一首
public Next(): void {
  switch (this.playData.Style) {
      case 0:
          if (this.playData.Index < this.playList.length) {
              this.playData.Index++;
              this.PlayIndex(this.playData.Index);
          }
          break;
      case 1:
          this.playData.Index = (this.playData.Index + 1) % this.playList.length;
          this.PlayIndex(this.playData.Index);
          break;
      case 2:
          this.playData.Index = (this.playData.Index + 1) % this.playList.length;
          this.PlayIndex(this.playData.Index);
          console.log('暂不考虑随机播放将视为列表循环播放');
          break;
      case 3:
          this._audio.currentTime = 0;
          break;
      default:
          if (this.playData.Index < this.playList.length) {
              this.playData.Index++;
              this.PlayIndex(this.playData.Index);
          }
          break;
  }
}
//播放指定索引的音频
public PlayIndex(index : number):void {
  index=this.playList[index] ? index :
  this.playList[index+1] ? (index+1):
  this.playList[index-1] ? (index-1):-1;
  if(index !== -1) {
    this._audio.src=this.playList[index].Url;
    if(this._audio.paused) {
      this._audio.play();
      this.playData.IsPlaying=true;
    }
    this.playData.Index=index;
  } else {
    console.log("nothing to be played.");
  }
  }

  public PlayList(): Audio[] {
    return this.playList;
}

public PlayData(): PlayData {
    return this.playData;
  }
}

