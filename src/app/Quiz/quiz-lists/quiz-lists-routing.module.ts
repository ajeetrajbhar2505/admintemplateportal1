import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizListsComponent } from './quiz-lists.component'
const routes: Routes = [
  {
    path : '',
    component : QuizListsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizListsRoutingModule { }
