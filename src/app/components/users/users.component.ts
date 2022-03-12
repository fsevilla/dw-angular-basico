import { Component, OnInit } from '@angular/core';
import { DataListColumn } from 'src/app/interfaces/data-list-column';

import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'dw-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<User> = [];
  columns: DataListColumn[] = [
    { header: 'Name', field: 'name' },
    { header: 'Username', field: 'username' },
    { header: 'Email', field: 'email' },
    { header: 'Actions', preformat: (item: User) => {
      return `<a href="users/${item.id}/albums">Ver detalles</a>`;
    }}
  ]

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getItems().subscribe(response => {
      this.users = response;
    });
  }

}
