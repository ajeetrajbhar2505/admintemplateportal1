import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizListsComponent } from './quiz-lists.component'
import { QuizListsRoutingModule } from './quiz-lists-routing.module';


@NgModule({
  declarations: [
    QuizListsComponent
  ],
  imports: [
    CommonModule,
    QuizListsRoutingModule
  ]
})
export class QuizListsModule { }
