import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { CastListComponent } from './cast-list/cast-list.component';

const routes: Routes = [
  {
    path: '',
    component: MovieDetailsComponent,
  },
];

@NgModule({
  declarations: [MovieDetailsComponent, CastListComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    RouterModule.forChild(routes),
  ],
})
export class MovieDetailsModule {}
