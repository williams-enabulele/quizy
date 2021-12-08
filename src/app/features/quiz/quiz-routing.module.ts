import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizLayoutComponent } from '@app/_layouts/quiz-layout/quiz-layout.component';
import { QuizResultsComponent } from './pages/quiz-results/quiz-results.component';
import { QuizComponent } from './pages/quiz/quiz.component';

const routes: Routes = [
  { 
    path: '',
    component: QuizLayoutComponent,
    children: [
      { path: '', redirectTo: 'quiz', pathMatch: 'full' },
      { 
        path: 'questions', 
        component: QuizComponent,
       },
      { path: 'results', component: QuizResultsComponent}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
