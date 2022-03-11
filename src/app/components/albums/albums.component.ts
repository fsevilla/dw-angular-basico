import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Album } from 'src/app/interfaces/album';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'dw-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: Album[] = [];
  userId: Number = 0;

  constructor(private albumsService: AlbumsService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      if (params.userId) {
        this.userId = params.userId;
        this.getAlbums();
      }
    });

    this.activatedRoute.params.subscribe((params: any) => {
      if (params.userId) {
        this.userId = params.userId;
        this.getAlbums();
      }
    });
  }

  ngOnInit(): void {
    if(!this.userId) {
      this.albumsService.getItems().subscribe(response => {
        this.albums = response;
      });
    }
  }

  getAlbums() {
    this.albumsService.getAlbumsByUser(this.userId).subscribe(response => {
      this.albums = response;
    });
  }

}
