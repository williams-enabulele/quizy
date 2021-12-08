import { questionActionTypes } from "../actions/questions.actions";
import { QuestionsService } from "../../services/questions.service"
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map, tap  } from "rxjs/operators";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class QuestionEffects {

    loadQuestions$ = createEffect(() => 
    
    this.actions$.pipe(
        ofType(questionActionTypes.loadQuestions),
        concatMap(() => this.questionsService.getQuestions()),
        map( questions => questionActionTypes.questionsLoaded({questions}))
    ));

    constructor(private questionsService: QuestionsService, private actions$: Actions, private router: Router) {}
}
