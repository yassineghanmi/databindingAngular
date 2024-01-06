import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.css'],
})
export class AddServerComponent {
  @Output() serverCreated = new EventEmitter<any>();
  newServerName: String = '';

  onClickAddServer() {
    this.serverCreated.emit(this.newServerName);
  }
}
