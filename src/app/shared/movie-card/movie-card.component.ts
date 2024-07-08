import { Component, Input } from '@angular/core';
import { img_300, unavailable } from '../../services/constants';
import { MoviesStateService } from '../../state/movies.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent {
  @Input() id: number | null = null;
  @Input() imageSrc: string = '';
  @Input() title: string | null = '';
  @Input() releaseDate: Date | null = null;

  baseImgPath = img_300;
  unavailable = unavailable;

  constructor(private state: MoviesStateService, private router: Router) {}

  openMovieDetails() {
    this.router.navigate([`/movie/${this.id}`]);
  }
}
