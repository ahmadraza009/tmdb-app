import { Component, inject } from '@angular/core';
import { MoviesStateService } from '../../state/movies.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.scss',
})
export class ToolBarComponent {
  constructor(private router: Router) {}

  goToDashboard() {
    this.state.getMoviesByTrend();
    this.router.navigate(['/dashboard']);
  }
  searchText = '';
  state = inject(MoviesStateService);

  search(): void {
    this.state.search(this.searchText);
  }
}
