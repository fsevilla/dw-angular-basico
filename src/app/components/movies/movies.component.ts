import { Component, OnDestroy, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy {

  searchValue: string = '';

  movies: Array<Movie> = [];

  filteredMovies: Array<Movie> = [];

  getMoviesObservable: any;

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.getMoviesObservable = this.moviesService.getItems().subscribe(response => {
      this.movies = response;
      this.filteredMovies = response;
    });
  }

  doOnClick() {
  
    const buscar = this.searchValue.toLowerCase();
    // console.log('Hicieron click en mi!', e);
    // this.flag = !this.flag;
    
    this.filteredMovies = this.movies.filter(movie => {
      return movie.title.toLowerCase().includes(buscar);
    });
  }

  ngOnDestroy() {
    this.getMoviesObservable.unsubscribe();
  }

}
