import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  //将数据写入服务
  set(key:string,value:any){
    localStorage.setItem(key,JSON.stringify(value))
  }
  //从服务提取数据
  get(key:string){
    return JSON.parse(localStorage.getItem(key))
  }
  //删除服务数据
  remove(key:string){
    localStorage.removeItem(key)
  }
}
