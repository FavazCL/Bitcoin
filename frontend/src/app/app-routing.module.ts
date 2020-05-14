import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { RecordComponent } from './features/record/record.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'record', component: RecordComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
