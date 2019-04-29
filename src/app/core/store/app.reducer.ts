import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import * as fromAuth from './auth/auth.reducer';

// Entity Reducers
import * as fromQuarterGoal from './quarter-goal/quarter-goal.reducer';
import * as fromUser from './user/user.reducer';

export interface State {
  auth: fromAuth.State;
  router: RouterReducerState;
  // Entity State
  quarterGoal: fromQuarterGoal.State;
  user: fromUser.State;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
  auth: fromAuth.reducer,
  // Entity Reducers
  quarterGoal: fromQuarterGoal.reducer,
  user: fromUser.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];