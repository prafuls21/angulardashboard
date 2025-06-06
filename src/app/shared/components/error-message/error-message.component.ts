import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  template: `
    <div *ngIf="errorMessage" class="error-message">
      {{ errorMessage }}
    </div>
  `,
  styles: [`
    .error-message {
      color: red;
      font-weight: bold;
      margin: 10px 0;
    }
  `]
})
export class ErrorMessageComponent {
  @Input() errorMessage: string | null = null;
}