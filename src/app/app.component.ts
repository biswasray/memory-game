import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Memory Game';
  counter = 0;
  increase() {
    console.log("fgh");
    this.counter++;
  }
}
