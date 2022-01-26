import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `
  <server></server>
  <server></server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
