import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public caiyun:any='财运财运财运财运财运财运财运财运财运财运财运财运财运财运财运财运财运财运财运财运财运财运财运财运财运财运财运财运财运财运财运财运财运财运'
  public jiankang:any='健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康健康'
  public shiye:any='事业事业事业事业事业事业事业事业事业事业事业事业事业事业事业事业事业事业事业事业事业事业事业事业事业事业事业事业事业事业事业事业事业事业事业事业'
  public aiqing:any='爱情爱情爱情爱情爱情爱情爱情爱情爱情爱情爱情爱情爱情爱情爱情爱情爱情爱情爱情爱情爱情爱情爱情爱情爱情爱情爱情爱情爱情爱情爱情爱情爱情爱情爱情爱情'
  public jiaofei:any=false
  constructor() { }

  ngOnInit() {
  }

  money(){
    this.close();
    this.jiaofei=true;
  }
  

  close() {
    document.getElementById('modal').style.display = 'none'
    document.getElementById('content').style.display = 'none'
  }

}
