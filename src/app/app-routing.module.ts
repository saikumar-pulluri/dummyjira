import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BacklogComponent } from './backlog/backlog.component';
import { IssuesComponent } from './issues/issues.component';
import { SprintComponent } from './sprint/sprint.component';

const routes: Routes = [
  {path:"backlog",component:BacklogComponent},
  {path:"issues",component:IssuesComponent},
  {path:"sprint",component:SprintComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
