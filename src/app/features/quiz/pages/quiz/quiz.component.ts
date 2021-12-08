import { Component, OnInit } from '@angular/core';
import { areQuestionsLoaded, getAllQuestions } from '../../store/selectors/questions.selectors';
import { AppState } from '@app/store/reducers/index';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Data } from '../../models/data.model';
import { filter, first, tap } from 'rxjs/operators';
import { loadQuestions } from '../../store/actions/questions.actions';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  onAdd(){

  }


  ngOnInit(): void {
    this.store
    .pipe(
        select(areQuestionsLoaded),
        tap((questionsLoaded) => {
          if (!questionsLoaded) {
            this.store.dispatch(loadQuestions());
          }

        }),
        filter(questionsLoaded => questionsLoaded),
        first()
    );
    this.store.select(getAllQuestions).subscribe((data) => {
      console.log(data);
    });
  }

  constructor(private store: Store<AppState>) { }

}


