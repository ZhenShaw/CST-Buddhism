import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QiuqianComponent } from './components/qiuqian/qiuqian.component';
import { BaziComponent } from './components/bazi/bazi.component';
import { GongfoComponent } from './components/gongfo/gongfo.component';
import { XiuxingComponent } from './components/xiuxing/xiuxing.component';
import { GongdeComponent } from './components/gongde/gongde.component';
import { XindeComponent } from './components/xiuxing/xinde/xinde.component'
import { SuanmingComponent } from './components/bazi/suanming/suanming.component';


import { ZhuyinjingshuComponent } from './components/gongde/zhuyinjingshu/zhuyinjingshu.component'
import { DialogComponent } from './components/gongfo/dialog/dialog.component'
import { LibraryComponent } from './components/xiuxing/library/library.component';
import { FojingComponent } from './components/xiuxing/library/fojing/fojing.component';
import { FozhouComponent } from './components/xiuxing/library/fozhou/fozhou.component';
import { DetailComponent } from './components/bazi/detail/detail.component';
import { ZhouGeneralComponent } from './components/xiuxing/library/fozhou/zhou-general/zhou-general.component';
import { JingGeneralComponent } from './components/xiuxing/library/fojing/jing-general/jing-general.component';
import { JingyuanwenComponent } from './components/xiuxing/library/fojing/jingGeneral/jingyuanwen/jingyuanwen.component';
import { JingyiwenComponent } from './components/xiuxing/library/fojing/jingGeneral/jingyiwen/jingyiwen.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'bazi', component: BaziComponent },
  { path: 'qiuqian', component: QiuqianComponent },
  { path: 'gongfo', component: GongfoComponent },
  { path: 'xiuxing', component: XiuxingComponent },
  { path: 'gongde', component: GongdeComponent },
  // 子页面路由写在下方
  { path: 'xinde', component:XindeComponent},
  { path: 'suanming', component:SuanmingComponent},
  { path: 'xiuxing/xinde', component:XindeComponent},
  { path: 'gongde/zhuyinjingshu', component:ZhuyinjingshuComponent},
  { path: 'gongfo/dialog', component:DialogComponent},
  { 
    path: 'library',component:LibraryComponent,
    children:[
      { path: '',redirectTo: 'fozhou',pathMatch: 'full'},
      { path: 'fojing',component:FojingComponent },
      { path: 'fozhou',component:FozhouComponent }
    ]
  },
  { path: 'detail', component:DetailComponent},
  { path: 'zhouGeneral',component: ZhouGeneralComponent},
  { path: 'jngGeneral',component: JingGeneralComponent},
  { path: 'jingyuanwen',component: JingyuanwenComponent},
  { path: 'jingyiwen',component: JingyiwenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
