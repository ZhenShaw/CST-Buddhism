import { Component, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';
import axios from 'axios';//引入第三方模块进行数据请求
@Component({
  selector: 'app-qifu',
  templateUrl: './qifu.component.html',
  styleUrls: ['./qifu.component.css']
})
export class QifuComponent implements OnInit {

  constructor(private render2: Renderer2) { }
  ngOnInit() {
    this.mounted();
  }
  public chunks = []
  public chunkList = {
    duration: 0,
    stream: ''
  }
  public btnText = '按住说话'
  ishide = true
  recorder: any
  audio: any
  blobEvent: any
  requestAudioAccess() {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
      this.recorder = new (<any>window).MediaRecorder(stream);
      this.bindEvents();
    }, error => {
      alert('出错，请确保已允许浏览器获取录音权限');
    });
  }

  timeOutEvent = 0;//定时器   


  //开始按   
  gtouchstart() {
    document.getElementById('btntext').innerHTML = '松开结束';
    this.timeOutEvent = window.setTimeout(() => {//此处用箭头函数对变量赋值
      this.timeOutEvent = 0;
      //执行长按要执行的内容，如弹出菜单   
      console.log("长按事件触发发");
      this.onStart();
    },
      500);//这里设置定时器，定义长按500毫秒触发长按事件，时间可以自己改，个人感觉500毫秒非常合适   
    document.addEventListener('contextmenu', function (e) {//阻止浏览器默认行为，这里阻止长按弹窗
      e.preventDefault();
    });

  };
  //手释放，如果在500毫秒内就释放，则取消长按事件，此时可以执行onclick应该执行的事件   
  gtouchend() {
    document.getElementById('btntext').innerHTML = '开始录音';
    this.onStop();
    clearTimeout(this.timeOutEvent);//清除定时器  
    if (this.timeOutEvent != 0) {
      //这里写要执行的内容（尤如onclick事件）   
      console.log("你这是点击，不是长按");
    }
    this.ishide = false
  };
  //如果手指有移动，则取消所有事件，此时说明用户只是要移动而不是长按   
  gtouchmove() {
    clearTimeout(this.timeOutEvent);//清除定时器   
  };


  onStart() {
    this.recorder.start();
  }

  onStop() {
    this.recorder.stop();
  }

  play() {
    console.log(this.chunkList)
    const audio = this.render2.selectRootElement("#audio");
    audio.src = this.chunkList.stream;
    audio.play();
    var x = document.getElementsByClassName("span");
    for (let i = 0; i < 3; i++) {
      (<HTMLElement>x[i]).style.animation = "wink " + 1 + "s ease infinite";
      window.setTimeout(() => { (<HTMLElement>x[i]).style.animationPlayState = "running" }, 0);
      window.setTimeout(() => { (<HTMLElement>x[i]).style.animationPlayState = "paused" }, this.chunkList.duration * 1000 - 1);
    }
  }

  bindEvents() {

    this.recorder.ondataavailable = (e) => {
      this.chunks.push(e.data);
      console.log(e)
      console.log(this.chunks)
    };

    this.recorder.onstop = () => {
      console.log(this.chunks)
      //let blob = new Blob(this.chunks, { 'type': 'audio/ogg; codecs=opus' }),
      let blob = new Blob(this.chunks, { 'type': 'audio/mpeg; codecs=opus' }),
        audioStream = URL.createObjectURL(blob),
        //估算时长
        duration = Math.round(blob.size / 6600);
      console.log(blob)
      if (duration <= 0) {
        //alert('说话时间太短');
        return;
      }
      if (duration > 60) {
        duration = 60;
      }
      this.chunkList = { duration: duration, stream: audioStream };
      this.chunks = [];
      document.getElementById('voiceposition').style.width = (this.chunkList.duration * 20 + 30) + 'px';//更新录音框外层div的宽度
      document.getElementById('time').innerHTML = String(this.chunkList.duration) + '"';//更新录音时长
      document.getElementById('voice').style.width = this.chunkList.duration * 20 + 'px';//更新录音框宽度
      console.log(this.chunkList);
      //上传文件
      const formData = new FormData()
      formData.append('file', blob, 'voice.mp3')
      axios({
        method: 'post',
        url: 'http://localhost:9000/gongfo/qifu',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(
          res => {
            console.log('上传成功！')
            console.log(res.data)
          }
        )
        .catch(
          err => {
            console.log('上传失败！')
          }
        )
    };
  }
  mounted() {
    if (!navigator.mediaDevices) {
      alert('您的浏览器不支持获取用户设备');
      return;
    }
    if (!(<any>window).MediaRecorder) {

      alert('您的浏览器不支持录音');
      return;
    }
    this.audio = this.render2.selectRootElement("#audio");
    this.requestAudioAccess();
  }
}