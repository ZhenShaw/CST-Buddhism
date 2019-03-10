import { Component, OnInit } from '@angular/core';
import axios from 'axios';//引入第三方模块进行数据请求
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-gongfo',
  templateUrl: './gongfo.component.html',
  styleUrls: ['./gongfo.component.css']
})
export class GongfoComponent implements OnInit {

  constructor(private storage: StorageService) { }

  status: number//记录换什么
  Listlength = 0
  fo_index = 0
  xiang_index = 0
  flower_index = 0
  fruit_index = 0
  fo_list = new Array({
    url: "http://api10.buddhaheart.cn/webfiles/sys/201710/171015001922d66c.png",
    name: '',
    details: ''
  })

  xiang_list = new Array({
    url: "http://api10.buddhaheart.cn/webfiles/sys/201710/171013142225d175.png",
    name: '',
    details: ''
  })

  flower_list = new Array({
    url: "http://api10.buddhaheart.cn/webfiles/sys/201710/1710142350470a8e.png",
    name: '',
    details: ''
  })

  fruit_list = new Array({
    url: "http://api10.buddhaheart.cn/webfiles/sys/201710/171013142539eb07.png",
    name: '',
    details: ''
  })

  ngOnInit() {
    if (this.storage.get("fo_list")) { this.fo_list = this.storage.get("fo_list") }
    if (this.storage.get("xiang_list")) { this.xiang_list = this.storage.get("xiang_list") }
    if (this.storage.get("flower_list")) { this.flower_list = this.storage.get("flower_list") }
    if (this.storage.get("fruit_list")) { this.fruit_list = this.storage.get("fruit_list") }
    if (this.storage.get("fo_index")) { this.fo_index = this.storage.get("fo_index") }
    if (this.storage.get("xiang_index")) { this.xiang_index = this.storage.get("xiang_index") }
    if (this.storage.get("flower_index")) { this.flower_index = this.storage.get("flower_index") }
    if (this.storage.get("fruit_index")) { this.fruit_index = this.storage.get("fruit_index") }
  }

  flower() {
    this.status = 2;
    if (this.storage.get("flower_list")) { this.flower_list = this.storage.get("flower_list") }
    else {
      var url = "/api/gongfo/flower"
      axios.get(url).then(res => {
        console.log(res)
        this.flower_list = res.data
        console.log(this.flower_list)
        this.storage.set("flower_list", this.flower_list)
      })
    }
  }
  //换花
  flower_change(i: number) {
    this.flower_index = i
    this.storage.set("flower_index", this.flower_index)
  }

  fo() {
    this.status = 1;
    if (this.storage.get("fo_list")) { 
      this.fo_list = this.storage.get("fo_list") 
      this.Listlength = this.fo_list.length
    }
    else {
      var url = "/api/gongfo/fo"
      axios.get(url).then(res => {
        console.log(res)
        this.fo_list = res.data
        this.Listlength = res.data.length
        console.log(this.Listlength)
        this.storage.set("fo_list", this.fo_list)
      })
    }
  }
  //下一个佛
  next() {
    this.fo_index++;
    if (this.fo_index == this.Listlength) {
      this.fo_index = 0;
    }
    this.storage.set("fo_index", this.fo_index)
  }
  //上一个佛
  pre() {
    this.fo_index--;
    if (this.fo_index < 0) {
      this.fo_index = this.Listlength - 1;
    }
    this.storage.set("fo_index", this.fo_index)
  }

  xiang() {
    this.status = 3;
    if (this.storage.get("xiang_list")) { this.xiang_list = this.storage.get("xiang_list") }
    else {
      var url = "/api/gongfo/xiang"
      axios.get(url).then(res => {
        console.log(res)
        this.xiang_list = res.data
        this.storage.set("xiang_list", this.xiang_list)
      })
    }
  }
  //换香
  xiang_change(i: number) {
    this.xiang_index = i
    this.storage.set("xiang_index", this.xiang_index)
  }

  fruit() {
    this.status = 4;
    if (this.storage.get("fruit_list")) { this.fruit_list = this.storage.get("fruit_list") }
    else {
      var url = "/api/gongfo/fruit"
      axios.get(url).then(res => {
        console.log(res)
        this.fruit_list = res.data
        this.storage.set("fruit_list", this.fruit_list)
      })
    }
  }
  //换水果
  fruit_change(i: number) {
    this.fruit_index = i
    this.storage.set("fruit_index", this.fruit_index)
  }
}
