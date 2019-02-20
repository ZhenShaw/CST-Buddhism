import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qifu',
  templateUrl: './qifu.component.html',
  styleUrls: ['./qifu.component.css']
})
export class QifuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  test() {
    // dom bindings
    const startButton = document.getElementById('startButton');
    const convertButton = document.getElementById('convertButton');
    const replayButton = document.getElementById('replayButton');
    const replayConvertedButton = document.getElementById('replayConvertedButton');
    const logDiv = document.getElementById('logDiv');

    // util functions
    const sleep = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));
    // const log = str => logDiv.value += (str + '\n');

    // rawAudioBuffer
    let rawAudioBuffer = null;

    startButton.onclick = async () => {
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

      await sleep(3000);

      rawAudioBuffer = await ctx.startRendering();
      source.stop();
      // log(`rawAudioBuffer 就绪: length=${rawAudioBuffer.length} duration=${rawAudioBuffer.duration} numberOfChannels=${rawAudioBuffer.numberOfChannels} sampleRate=${rawAudioBuffer.sampleRate}`);
      startButton.textContent = '开始录音';
    };

    // convertedAudioBuffer
    let convertedAudioBuffer = null;

    convertButton.onclick = async () => {
      const config = {
        numOfChannels: 1,
        length: 3 * 16000,
        sampleRate: 16000,
      };

      convertButton.textContent = '正在转换...';

      const ctx = new OfflineAudioContext(config.numOfChannels, config.length, config.sampleRate);

      const source = ctx.createBufferSource();
      source.buffer = rawAudioBuffer;
      source.connect(ctx.destination);
      source.start();

      await sleep(3000);

      convertedAudioBuffer = await ctx.startRendering();
      source.stop();
      // log(`convertedAudioBuffer 就绪: length=${convertedAudioBuffer.length} duration=${convertedAudioBuffer.duration} numberOfChannels=${convertedAudioBuffer.numberOfChannels} sampleRate=${convertedAudioBuffer.sampleRate}`);
      convertButton.textContent = '转换录音(44100 => 16000)';
    };

    // replay
    replayButton.onclick = async () => {
      const ctx = new AudioContext();

      const source = ctx.createBufferSource();
      source.buffer = rawAudioBuffer;
      source.connect(ctx.destination);
      source.start();
    };

    replayConvertedButton.onclick = async () => {
      const ctx = new AudioContext();

      const source = ctx.createBufferSource();
      source.buffer = convertedAudioBuffer;
      source.connect(ctx.destination);
      source.start();
    };

  }

}
