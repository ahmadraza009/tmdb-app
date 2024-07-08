import { Component, OnInit } from '@angular/core';
import { MoviesStateService } from '../../../state/movies.state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  movies = this.state.movies;
  title = 'Trending';
  searchStr = this.state.searchStr;
  constructor(private state: MoviesStateService) {}

  ngOnInit(): void {
    this.state.getMoviesByTrend();
  }
}
