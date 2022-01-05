import { Component } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";

@Component({
    selector: 'app-shopping-list',
    templateUrl: 'shopping-list.component.html',
    styleUrls: ['shopping-list.component.scss']
})
export class shoppingListComponent {

    ingredients: Ingredients[] = [
        new Ingredients('Sugar', 15),
        new Ingredients('Milk', 2)
    ];

}