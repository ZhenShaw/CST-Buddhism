import { Component, OnInit } from '@angular/core';
import { AudioService } from './service/audio.service';
import { Audio } from './interface/audio.model';
import { PlayData } from './interface/playdata.model';
import { Router } from '@angular/router';
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
  constructor(public audio: AudioService,public route:Router) {
    this.disp = 'off';

   }

  ngOnInit() {
    this.playList = this.audio.PlayList();
    this.playData = this.audio.PlayData();
  }

  public xuange()
{
  this.route.navigate(['/xiuxing/foyin/xuange']);
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
