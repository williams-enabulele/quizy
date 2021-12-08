import { UserResponse } from '../../models/responses.model';
import { createAction, props } from '@ngrx/store';


export const loadResponse = createAction(
    '[USER RESPONSE LIST] Load User Responses', 
);

export const responsesLoaded = createAction(
    '[USER RESPONSE] Qusetions Loaded Successfully',
    props<{response: UserResponse}>()
);

export const createResponse = createAction(
    '[CREATE USER RESPONSE] Create UserResponse',
    props<{response: UserResponse}>()
  );



  export const responseActionTypes = {
    loadResponse,
    responsesLoaded,
    createResponse
  };