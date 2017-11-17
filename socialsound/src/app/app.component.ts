import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'SocialSound';

  users: Array<any>;

  constructor(private _dataService: DataService) {
    this.init();

  }

  init() {
    this._dataService.getUsers();

  }

  getUser() {
    return this._dataService.getUserData();
  }

}
