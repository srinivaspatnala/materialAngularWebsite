import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  cardItems = [{ checking: 'one', title: 'hello sreinivas', description: 'lorem ipsum hello srinivas' }];





  constructor() { }

  ngOnInit(): void {
  }

}
