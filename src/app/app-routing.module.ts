import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Input1Component } from './components/input1/input1.component';
import { Form1Component } from './components/form1/form1.component';
import { Form2Component } from './components/form2/form2.component';
import { ShowgroupsComponent } from './components/showgroups/showgroups.component';
import { PowerRangerComponent } from './components/power-ranger/power-ranger.component';


const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: Input1Component},
  { path: 'form1', component: Form1Component},
  { path: 'form2', component: Form2Component},
  { path: 'shuffleScreen', component: PowerRangerComponent},
  { path: 'showGroups', component: ShowgroupsComponent},
  { path: '**', redirectTo: '/start'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
