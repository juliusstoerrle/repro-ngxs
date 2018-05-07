import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs/index';
import {map} from 'rxjs/operators';
import {catchError} from 'rxjs/internal/operators';
import {User} from './app.state';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
  }

  getErrorObservable() {
    console.debug('UserService::getErrorObservable() called');
    // not sure what the rxjs 6.x way of creating an error observable is
    return Observable.throw('error'); // of({abc: {id: 'abc', name: 'ABC'}});
  }

}
