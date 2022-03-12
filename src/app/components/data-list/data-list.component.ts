import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { DataListColumn } from 'src/app/interfaces/data-list-column';

@Component({
  selector: 'dw-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit, OnChanges {

  searchValue: string = '';

  @Input() items: any[] = [];
  @Input() columns: DataListColumn[] = [];
  filteredItems: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: any): void {
    if(changes.items) {
      this.filteredItems = this.items;
    }
  }

  filterList() {
    const searchValue = this.searchValue.toLowerCase();
    this.filteredItems = this.items.filter(item => {

      let flag: boolean = false;

      this.columns.map(col => {
        try {
          if (col.field && item[col.field].toLowerCase().includes(searchValue) ) {
            flag = true;
          }
        } catch(e) {}
      });

      return flag;
    });
  }

}
