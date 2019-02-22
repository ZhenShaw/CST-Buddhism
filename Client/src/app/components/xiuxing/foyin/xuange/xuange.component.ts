import { Component, OnInit } from '@angular/core';
import { AudioService } from '../service/audio.service';
import { Audio } from '../interface/audio.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-xuange',
  templateUrl: './xuange.component.html',
  styleUrls: ['./xuange.component.css']
})
export class XuangeComponent implements OnInit {
  public playList: Audio[];
  
  constructor(public audio: AudioService,public route:Router) { }

  ngOnInit() {
    this.playList = this.audio.PlayList();
  }
  
  public xuange(index) {
     this.audio.PlayIndex(index);
     this.route.navigate(['/xiuxing/foyin']);
  }
}
