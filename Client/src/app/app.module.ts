import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { QiuqianComponent } from './components/qiuqian/qiuqian.component';
import { BaziComponent } from './components/bazi/bazi.component';
import { GongfoComponent } from './components/gongfo/gongfo.component';
import { XiuxingComponent } from './components/xiuxing/xiuxing.component';
import { GongdeComponent } from './components/gongde/gongde.component';
import { ModalComponent } from './components/common/modal/modal.component';
import { XindeComponent } from './components/xiuxing/xinde/xinde.component';
import { ResultComponent } from './components/bazi/result/result.component';
import { DetailComponent } from './components/bazi/detail/detail.component';
import { Detail2Component } from './components/bazi/detail2/detail2.component';
import { ZhuyinjingshuComponent } from './components/gongde/zhuyinjingshu/zhuyinjingshu.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QiuqianComponent,
    BaziComponent,
    GongfoComponent,
    XiuxingComponent,
    GongdeComponent,
    XindeComponent,
    ModalComponent,
    XindeComponent,
    ResultComponent,
    DetailComponent,
    Detail2Component,
    XindeComponent,
    ZhuyinjingshuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
