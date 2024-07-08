import { Component, Input } from '@angular/core';
import { Credit } from '../../state/model';
import { img_300, unavailable } from '../../services/constants';

@Component({
  selector: 'app-cast-list',
  templateUrl: './cast-list.component.html',
  styleUrl: './cast-list.component.scss',
})
export class CastListComponent {
  @Input() cast: Credit[] = [];
  @Input() crew: Credit[] = [];

  baseImgPath = img_300;
  unavailable = unavailable;
}
