import { Data } from '../../models/data.model';
import { createAction, props } from '@ngrx/store';


export const loadQuestions = createAction(
    '[QUESTION LIST] Load Questions via service', 
);

export const questionsLoaded = createAction(
    '[QUESTION EFFECT] Qusetions Loaded Successfully',
    props<{ questions: Data[]}>()
);

export const questionActionTypes = {
    loadQuestions,
    questionsLoaded
  };