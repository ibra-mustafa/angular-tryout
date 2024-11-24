import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InlineTemplateComponent } from './inline-template/inline-template.component';
import { NonInlineComponent } from "./non-inline/non-inline.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InlineTemplateComponent, NonInlineComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-arab';
}
