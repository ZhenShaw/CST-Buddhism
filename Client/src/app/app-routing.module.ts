import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QiuqianComponent } from './components/qiuqian/qiuqian.component';
import { BaziComponent } from './components/bazi/bazi.component';
import { GongfoComponent } from './components/gongfo/gongfo.component';
import { XiuxingComponent } from './components/xiuxing/xiuxing.component';
import { GongdeComponent } from './components/gongde/gongde.component';
import { XindeComponent } from './components/xiuxing/xinde/xinde.component'
import { ZhuyinjingshuComponent } from './components/gongde/zhuyinjingshu/zhuyinjingshu.component'
import { DialogComponent } from './components/gongfo/dialog/dialog.component'
import { LibraryComponent } from './components/xiuxing/library/library.component';
import { FojingComponent } from './components/xiuxing/library/fojing/fojing.component';
import { FozhouComponent } from './components/xiuxing/library/fozhou/fozhou.component';

const routes: Routes = [
  { path: '', redirectTo: 'library', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'bazi', component: BaziComponent },
  { path: 'qiuqian', component: QiuqianComponent },
  { path: 'gongfo', component: GongfoComponent },
  { path: 'xiuxing', component: XiuxingComponent },
  { path: 'gongde', component: GongdeComponent },
  // 子页面路由写在下方
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
