import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  // stops user from creating new server
  allowNewServer = false;
  serverCreationStatus = 'no server was created';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  //
  onCreateServer() {
    this.serverCreationStatus = 'server was created';
  }
}
