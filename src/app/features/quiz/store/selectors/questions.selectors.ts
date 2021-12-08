import { QuestionState } from "../reducers/questions.reducers";
import { Data } from '../../models/data.model';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { selectAll, selectIds } from '../reducers/questions.reducers';

export const questionFeatureSelector = createFeatureSelector<QuestionState>('questions');

export const getAllQuestions = createSelector(
    questionFeatureSelector,
    selectAll
);

export const areQuestionsLoaded = createSelector(
    questionFeatureSelector,
    state => state.questionsLoaded
);