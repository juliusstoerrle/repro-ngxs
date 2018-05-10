import {Injectable} from '@angular/core';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
  }

  getErrorObservable() {
    console.debug('UserService::getErrorObservable() called');
    // not sure what the rxjs 6.x way of creating an error observable is
    return throwError(new Error('test')); // of({abc: {id: 'abc', name: 'ABC'}});
  }

}
