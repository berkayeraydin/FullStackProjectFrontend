import { Component, Input } from '@angular/core';

@Component({
  selector: 'etiya-input',
  templateUrl: './reactive-input.component.html',
  styleUrls: ['./reactive-input.component.css'],
})

export class ReactiveInputComponent {
  @Input() id!: string;
  @Input() label!: string;
  @Input() placeHolder!: string;
  @Input() formControlName!: string;
  @Input() type: string = 'text';
}