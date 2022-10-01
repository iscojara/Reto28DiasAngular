import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { City } from '../services/data.service';

@Component({
  selector: 'app-cities',
  template: `
    <ul class="list-group">
      <li
        class="list-group-item mt-1"
        (click)="onCitySelected(city)"
        [ngClass]="{ active: city?._id === selection?._id }">
        {{ city?.name | titlecase }}
        <button
          *ngIf="city?._id === selection?._id"
          (click)="onCityDelete(city._id)"
          type="button"
          class="btn btn-danger float-end">
          Delete
        </button>
      </li>
    </ul>
  `,
  styleUrls: ['./cities.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitiesComponent {
  @Input() city!: City;
  @Input() selection!: City;
  @Output() citySelectedEvent = new EventEmitter<City>();
  @Output() cityDeleteEvent = new EventEmitter<string>();

  onCitySelected(city: City): void {
    // emit
    this.citySelectedEvent.emit(city);
  }
  onCityDelete(id: string): void {
    this.cityDeleteEvent.emit(id);
  }
}
