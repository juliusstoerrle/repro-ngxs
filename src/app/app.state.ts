import {Action, State, StateContext} from '@ngxs/store';
import {UserService} from './user.service';
import {catchError, tap} from 'rxjs/internal/operators';
import {throwError} from 'rxjs';

export interface User {
  id: string;
  name: string;
}

export interface UserStateModel {
  entities: {[id: string]: User};
  ids: string[];
}

export class LoadAll {
  static type = '[User] Load All User';
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    entities: {},
    ids: []
  }
  })
export class UserState {

  constructor(private repository: UserService) {}

  @Action(LoadAll)
  loadAll(ctx: StateContext<UserStateModel>, action: LoadAll) {
    console.debug('UserState::loadAll() | method called');
    return this.repository.getErrorObservable().pipe(
      catchError((x, caught) => {
        console.debug('inside catchError', x);
        return throwError(x);
      }),
      tap((user: {[id: string]: User}) => {
        console.debug('updating state', user);
        const state = ctx.getState();
        ctx.setState({
          ...state,
          entities: user,
          ids: Object.keys(user)
        });
      })
    );
  }
}
