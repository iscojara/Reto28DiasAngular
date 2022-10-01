import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
  <button [ngStyle]= "{'background': color }" [ngClass]="['btn', 'btn-primary']">{{label}}</button>
  `,
  styleUrls: ['./button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() color!:string;
  @Input() label!:string;
  @Input() selection!:string;


}
