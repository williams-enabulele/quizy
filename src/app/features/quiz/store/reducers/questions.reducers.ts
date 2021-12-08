import { Data } from '../../models/data.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { questionActionTypes, questionsLoaded } from '../actions/questions.actions';

export interface QuestionState extends EntityState<Data>{
    questionsLoaded: boolean;
}

export const adapter: EntityAdapter<Data> = createEntityAdapter<Data>();

export const initialState = adapter.getInitialState({
    questionsLoaded: false
});

export const questionReducer = createReducer(
    initialState,
    on(questionActionTypes.questionsLoaded, (state, action) => {
        return adapter.addMany(
            action.questions,
            {...state, questionsLoaded: true}
        )
    })
)

export const { selectAll, selectIds } = adapter.getSelectors();

