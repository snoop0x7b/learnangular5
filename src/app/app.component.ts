import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Template in component demo</h1>
    <p> Blah blah blah</p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my app';
}
