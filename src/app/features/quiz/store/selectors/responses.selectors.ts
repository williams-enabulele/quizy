import { ResponseState } from "../reducers/responses.reducer";
import { UserResponse } from '../../models/responses.model';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { selectAll, selectIds } from '../reducers/responses.reducer';

export const responseFeatureSelector = createFeatureSelector<ResponseState>('response');

export const getAllResponses = createSelector(
    responseFeatureSelector,
    selectAll
);

export const areQuestionsLoaded = createSelector(
    responseFeatureSelector,
    state => state.responseLoaded
);