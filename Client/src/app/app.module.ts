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
import { SuanmingComponent } from './components/bazi/suanming/suanming.component';
import { DialogComponent } from './components/gongfo/dialog/dialog.component';
import { LibraryComponent } from './components/xiuxing/library/library.component';
import { FozhouComponent } from './components/xiuxing/library/fozhou/fozhou.component';
import { FojingComponent } from './components/xiuxing/library/fojing/fojing.component';
import { ZhouGeneralComponent } from './components/xiuxing/library/fozhou/zhou-general/zhou-general.component';
import { JingGeneralComponent } from './components/xiuxing/library/fojing/jing-general/jing-general.component';
import { JingyuanwenComponent } from './components/xiuxing/library/fojing/jingGeneral/jingyuanwen/jingyuanwen.component';
import { JingyiwenComponent } from './components/xiuxing/library/fojing/jingGeneral/jingyiwen/jingyiwen.component';
import { JuanxianghuoComponent } from './components/gongde/juanxianghuo/juanxianghuo.component';
import { SimiaoComponent } from './components/xiuxing/simiao/simiao.component';
import { SimiaotwoComponent } from './components/xiuxing/simiao/simiaotwo/simiaotwo.component';
import { SimiaothreeComponent } from './components/xiuxing/simiao/simiaothree/simiaothree.component';


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
    ZhuyinjingshuComponent,
    SuanmingComponent,
    DialogComponent,
    LibraryComponent,
    FozhouComponent,
    FojingComponent,
    ZhouGeneralComponent,
    JingGeneralComponent,
    JingyuanwenComponent,
    JingyiwenComponent,
    JuanxianghuoComponent,
    SimiaoComponent,
    SimiaotwoComponent,
    SimiaothreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
