import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inline-template',
  imports: [FormsModule, NgIf, NgFor],
  template: `
    <p>inline-template works!</p>
    <button (click)="greet()">Greet</button>
    <div>{{ greeting }}</div>
    <input type="text" #inputValue />
    <button (click)="logValue(inputValue)">log</button>
    <div>{{ loggedValue }}</div>
    <input [(ngModel)]="loggedValue" type="text" />
    <h2 *ngIf="condition; else elseD">if value</h2>
    <ng-template #elseD>
      <p>else value</p>
    </ng-template>
    <div *ngFor="let color of colors; let o = odd">
      {{ color }}
      <div *ngIf="o; else elseEven">is Odd</div>
      <ng-template #elseEven>
        <div>is Even</div>
      </ng-template>
    </div>
    {{name}}
  `,
  styleUrl: './inline-template.component.css',
})
export class InlineTemplateComponent {
 @Input('parentData') public name='';
  colors = ['red', 'green', 'blue', 'yellow'];
  loggedValue = '';
  greeting = '';
  condition = false;
  greet() {
    console.log('greet');
    this.greeting = 'Hello';
  }
  logValue(inputValue: HTMLInputElement) {
    console.log(inputValue.value);
  }
}
