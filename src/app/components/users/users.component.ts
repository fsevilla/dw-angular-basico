import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'dw-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  searchValue: string = '';
  users: Array<User> = [];
  filteredUsers: Array<User> = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getItems().subscribe(response => {
      this.users = response;
      this.filteredUsers = response;
    });
  }

  filterList() {
    const searchValue = this.searchValue.toLowerCase();
    this.filteredUsers = this.users.filter(user => {
      return user.name.toLowerCase().includes(searchValue);
    });
  }

}
