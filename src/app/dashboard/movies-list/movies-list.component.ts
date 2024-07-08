import { Component, Input } from '@angular/core';
import { Movie } from '../../state/model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss',
})
export class MoviesListComponent {
  @Input() pageTitle: string | null = 'Trending';
  @Input() searchText: string | null = '';
  @Input() movies: Movie[] = [];
}
