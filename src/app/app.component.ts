import { Component } from '@angular/core';
import {Store} from '@ngxs/store';
import {LoadAll} from './app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NGXS/Angular "Bug" Reproduction App';

  constructor(private store: Store) {}

  loadUser() {
    this.store.dispatch(new LoadAll()).subscribe(
      x => console.debug('Completed Action Succesfully', x),
      err => alert('received error! Great"')
    );
  }
}
