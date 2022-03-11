import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dw-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {

  searchValue: string = '';

  @Input() items: any[] = [];
  filteredItems: any[] = [];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      console.log('Datos: ', this.items);
    }, 1000);
  }

  filterList() {

  }

}
