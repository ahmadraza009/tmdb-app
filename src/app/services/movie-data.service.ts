import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ENDPOINTS } from './constants';
import { Observable } from 'rxjs';
import { ApiResponse, Movie } from '../state/model';

@Injectable({
  providedIn: 'root',
})
export class MovieDataService {
  constructor(private http: HttpClient) {}

  getTrendingMovies(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(
      `${environment.TMDB_API_URL}/${ENDPOINTS.TRENDING}`
    );
  }

  searchMovies(searchString: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(
      `${environment.TMDB_API_URL}/${ENDPOINTS.SEARCH}?query=${searchString}`
    );
  }

  getMovieDetails(id: number): Observable<Movie> {
    return this.http.get<Movie>(
      `${environment.TMDB_API_URL}/${ENDPOINTS.DETAILS}/${id}?append_to_response=credits`
    );
  }
}
