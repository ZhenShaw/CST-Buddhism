import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qifu',
  templateUrl: './qifu.component.html',
  styleUrls: ['./qifu.component.css']
})
export class QifuComponent implements OnInit {

  constructor() { }
  // util functions
  sleep = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));
  log = str => (document.getElementById('logDiv') as HTMLInputElement).value += (str + '\n');
  // rawAudioBuffer
  rawAudioBuffer = null;
  // convertedAudioBuffer
  convertedAudioBuffer = null;
  startButton = async () => {
    const startButton = document.getElementById('startButtonid');
    const config = {
      numOfChannels: 1,
      length: 3 * 44100,
      sampleRate: 44100,
    };

    startButton.textContent = '正在录音...';

    const ctx = new OfflineAudioContext(config.numOfChannels, config.length, config.sampleRate);

    const source = ctx.createOscillator();
    source.connect(ctx.destination);
    source.start();

    await this.sleep(3000);

    this.rawAudioBuffer = await ctx.startRendering();
    source.stop();
    this.log(`rawAudioBuffer 就绪: length=${this.rawAudioBuffer.length} duration=${this.rawAudioBuffer.duration} numberOfChannels=${this.rawAudioBuffer.numberOfChannels} sampleRate=${this.rawAudioBuffer.sampleRate}`);
    startButton.textContent = '开始录音';
  };

  convertButton = async () => {
    const convertButton = document.getElementById('convertButtonid');
    const config = {
      numOfChannels: 1,
      length: 3 * 16000,
      sampleRate: 16000,
    };

    convertButton.textContent = '正在转换...';

    const ctx = new OfflineAudioContext(config.numOfChannels, config.length, config.sampleRate);

    const source = ctx.createBufferSource();
    source.buffer = this.rawAudioBuffer;
    source.connect(ctx.destination);
    source.start();

    await this.sleep(3000);

    this.convertedAudioBuffer = await ctx.startRendering();
    source.stop();
    this.log(`convertedAudioBuffer 就绪: length=${this.convertedAudioBuffer.length} duration=${this.convertedAudioBuffer.duration} numberOfChannels=${this.convertedAudioBuffer.numberOfChannels} sampleRate=${this.convertedAudioBuffer.sampleRate}`);
    convertButton.textContent = '转换录音(44100 => 16000)';
  };

  // replay
  replayButton = async () => {
    const ctx = new AudioContext();

    const source = ctx.createBufferSource();
    source.buffer = this.rawAudioBuffer;
    source.connect(ctx.destination);
    source.start();
  };

  replayConvertedButton= async () => {
    const ctx = new AudioContext();

    const source = ctx.createBufferSource();
    source.buffer = this.convertedAudioBuffer;
    source.connect(ctx.destination);
    source.start();
  };
  ngOnInit() {
  }

  
}
