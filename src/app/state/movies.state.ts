import { computed, Injectable, signal } from '@angular/core';
import { MovieDataService } from '../services/movie-data.service';
import { map, tap } from 'rxjs';
import { ApiResponse, Movie } from './model';

export interface MoviesState {
  movies: Movie[];
  searchsStr: string | null;
  selectedMovie: Movie | null;
}

@Injectable({ providedIn: 'root' })
export class MoviesStateService {
  id = 1;
  private state = signal<MoviesState>({
    movies: [],
    searchsStr: '',
    selectedMovie: null,
  });

  constructor(private movieDataService: MovieDataService) {}

  movies = computed(() => this.state().movies);
  searchStr = computed(() => this.state().searchsStr);
  selectedMovie = computed(() => this.state().selectedMovie);

  getMoviesByTrend(): void {
    this.movieDataService
      .getTrendingMovies()
      .pipe(
        map((response: ApiResponse) => response.results),
        tap((movies: Movie[]) => {
          this.state.update((state) => ({
            ...state,
            searchsStr: '',
            movies,
          }));
        })
      )
      .subscribe();
  }

  search(searchStr: string): void {
    this.movieDataService
      .searchMovies(searchStr)
      .pipe(
        map((response: ApiResponse) => response.results),
        tap((movies: Movie[]) => {
          this.state.update((state) => ({
            ...state,
            searchsStr: searchStr,
            movies,
          }));
        })
      )
      .subscribe();
  }

  setSelectedMovie(id: number): void {
    this.movieDataService
      .getMovieDetails(id)
      .pipe(
        tap((movie: Movie) => {
          this.state.update((state) => ({
            ...state,
            searchsStr: '',
            selectedMovie: movie,
          }));
        })
      )
      .subscribe();
  }
}
