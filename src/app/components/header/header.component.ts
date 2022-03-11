import { Component, OnInit } from '@angular/core';

interface MenuLink {
  path: string;
  text: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  pages: MenuLink[] = [
    { path: 'users', text: 'Users' },
    { path: 'movies', text: 'Movies' },
    { path: 'albums', text: 'Albums' }
  ]

  ngOnInit(): void {
  }

}
