import { UserResponse } from '../../models/responses.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { responseActionTypes, responsesLoaded } from '../actions/responses.actions';

export interface ResponseState extends EntityState<UserResponse>{
    responseLoaded: boolean;
}

export const adapter: EntityAdapter<UserResponse> = createEntityAdapter<UserResponse>();

export const initialState = adapter.getInitialState({
    responseLoaded: false
});

export const responseReducer = createReducer(
    initialState,
    on(responseActionTypes.responsesLoaded, (state, action) => {
        return adapter.addOne(action.response,state)
    })
)

export const { selectAll, selectIds } = adapter.getSelectors();

