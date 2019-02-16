import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QiuqianComponent } from './components/qiuqian/qiuqian.component';
import { BaziComponent } from './components/bazi/bazi.component';
import { GongfoComponent } from './components/gongfo/gongfo.component';
import { XiuxingComponent } from './components/xiuxing/xiuxing.component';
import { GongdeComponent } from './components/gongde/gongde.component';
import { XindeComponent } from './components/xiuxing/xinde/xinde.component'
import { DialogComponent } from './components/gongfo/dialog/dialog.component'


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
  { path: 'gongfo/dialog', component:DialogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
