import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements: any[] = ['Server running!', 'Server not work!'];

  onAddServer(newServerName: String) {
    this.serverElements.push(newServerName);
  }
}
