import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummonersAbout } from './summoners-about/summoners-about';
import { Monsters } from './monster-container/monsters';

const routes: Routes = [
  {path: '', redirectTo: 'monsters', pathMatch: 'full'},
  {path: 'monsters', component: Monsters},
  {path: 'about', component: SummonersAbout}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
