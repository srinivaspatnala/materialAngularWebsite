import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  @Input() cards: { checking: string, title: string, description: string }
  constructor() { }

  ngOnInit(): void {
  }

}
