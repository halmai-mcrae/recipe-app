import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Spring onion', 5),
    new Ingredient('Milk', 10),
    new Ingredient('Pumpkin', 5),
    new Ingredient('Chives', 10),
    new Ingredient('Basil', 5),
    new Ingredient('Aubergine', 10),
    new Ingredient('Chilli oil', 5),
    new Ingredient('Truffles', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}