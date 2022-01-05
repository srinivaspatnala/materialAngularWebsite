import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {
  newTitle = '';
  newDescription = '';
  constructor() { }

  addCardItems() {
    // this.cardItems.push(
    //   {
    //     checking: 'one',
    //     title: this.newTitle,
    //     description: this.newDescription
    //   }
    // );
    // console.log(this.cardItems[2].type);

  }

  addCardGreen() {
    // this.cardItems.push(
    //   {
    //     checking: 'two',
    //     title: this.newTitle,
    //     description: this.newDescription
    //   }
    // );

  }

  ngOnInit(): void {
  }

}
