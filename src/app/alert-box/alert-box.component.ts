import { Component, Input, SimpleChanges } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in')
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class AlertBoxComponent {
  @Input() message: string;
  @Input() type: 'success' | 'error' | 'info' | 'warning' = 'info';
  @Input() autoClose: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['message'] && this.message && this.autoClose) {
      setTimeout(() => {
        this.close();
      }, 3000);
    }
  }

  close() {
    this.message = '';
  }
}
