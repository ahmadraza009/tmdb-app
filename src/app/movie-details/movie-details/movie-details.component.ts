import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesStateService } from '../../state/movies.state';
import { img_300, unavailable } from '../../services/constants';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
})
export class MovieDetailsComponent implements OnInit {
  selectedMovie = this.state.selectedMovie;

  baseImgPath = img_300;
  unavailable = unavailable;

  constructor(
    private route: ActivatedRoute,
    private state: MoviesStateService
  ) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    this.state.setSelectedMovie(Number(movieId));
  }

  getGenres(): string {
    return (
      this.selectedMovie()
        ?.genres?.map((val) => val.name)
        .join(',') ?? 'No Info'
    );
  }
}
