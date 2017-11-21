import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'SocialSound';

  users: Array<any>;

  constructor(private userService: UserService) {
    this.init();

  }

  init() {
    this.userService.getAllUsers();

  }

  getUser() {
    return this.userService.getUserData();
  }

  deleteUser(id) {
    this.userService.deleteUser(id);
  }

  saveUser() {

  }

  updateUser(id) {
    const x = this.userService.getUserById(id);
    this.userService.updateUser(id, x);
  }
}
