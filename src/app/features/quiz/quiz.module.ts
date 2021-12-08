import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { QuizRoutingModule } from './quiz-routing.module';



import { QuestionsService } from './services/questions.service';
import { QuizQuestionsComponent } from './components/quiz-questions/quiz-questions.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { QuizResponseComponent } from './components/quiz-response/quiz-response.component';
import { QuestionEffects } from './store/effects/questions.effects';
import { questionReducer } from './store/reducers/questions.reducers';
import { responseReducer } from './store/reducers/responses.reducer'



@NgModule({
  declarations: [
    QuizQuestionsComponent,
    QuizComponent,
    QuizResponseComponent,
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    StoreModule.forFeature('questions', questionReducer),
    StoreModule.forFeature('responses', responseReducer),
    EffectsModule.forFeature([QuestionEffects])
  ],
  providers: [QuestionsService]
})
export class QuizModule { }
