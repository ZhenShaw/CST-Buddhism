import { Component, OnInit } from '@angular/core';
import { AudioService } from './service/audio.service';
import { Audio } from './interface/audio.model';
import { PlayData } from './interface/playdata.model';
@Component({
  selector: 'app-foyin',
  templateUrl: './foyin.component.html',
  styleUrls: ['./foyin.component.css']
})
export class FoyinComponent implements OnInit {
  public playList: Audio[];
  public playData: PlayData;
  public audios: Audio[];
  public disp;
  constructor(public audio: AudioService) {
    this.disp = 'off';
    this.audio.add({Url: 'https://cst-1256261760.cos.ap-guangzhou.myqcloud.com/audio/%E5%8D%97%E6%97%A0%E9%98%BF%E5%BC%A5%E9%99%80%E4%BD%9B.mp3', Title: '大悲咒'});
     this.audio.add({Url: '/assets/foyin/udio/南无阿弥陀佛.mp3', Title: '南无阿弥陀佛'});
   }

  ngOnInit() {
    this.playList = this.audio.PlayList();
    this.playData = this.audio.PlayData();
  }
  public audioSwiped(e) {
    switch (e) {
        case 'up':
            this.disp = 'off';
            return;
        case 'down':
            this.disp = 'on';
            return;
        default:
            return;
    }
}
public Skip(e) {
  this.audio.Skip(e.layerX /
  document.getElementById('audio-total').getBoundingClientRect().width);
}
}
