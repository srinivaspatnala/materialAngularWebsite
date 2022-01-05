import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipes[] = [
    new Recipes('Recipe name', 'lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum description', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),
    new Recipes('Recipe name', 'lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum description', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg')
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
