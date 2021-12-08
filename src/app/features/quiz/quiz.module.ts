import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizQuestionsComponent } from './components/quiz-questions/quiz-questions.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { QuizResponseComponent } from './components/quiz-response/quiz-response.component';


@NgModule({
  declarations: [
    QuizQuestionsComponent,
    QuizComponent,
    QuizResponseComponent,
  ],
  imports: [
    CommonModule,
    QuizRoutingModule
  ]
})
export class QuizModule { }
