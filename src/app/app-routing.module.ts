import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NoticeComponent } from './notice/notice.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactanosComponent } from './contactanos/contactanos.component';

const route: Routes = [
{path: 'home', component: HomeComponent},
{path: 'notice', component: NoticeComponent},
{path: 'nosotros', component: NosotrosComponent},
{path: 'contactanos', component: ContactanosComponent},
{path:'**', redirectTo: 'home' }
]






@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(route),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
