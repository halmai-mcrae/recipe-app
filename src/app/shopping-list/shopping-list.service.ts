import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    // new Ingredient('Apples', 5, 'kg'),
    // new Ingredient('Tomatoes', 10, 'kg'),
    // new Ingredient('Spring onion', 5, 'kg'),
    // new Ingredient('Milk', 10, 'l'),
    // new Ingredient('Pumpkin', 5, 'kg'),
    // new Ingredient('Chives', 10, 'cup'),
    // new Ingredient('Basil', 5, 'cup'),
    // new Ingredient('Aubergine', 10, 'kg'),
    // new Ingredient('Chilli oil', 5, 'l'),
    // new Ingredient('Truffles', 10 , 'kg'),
  ];
  public getIngredient(index: number) {
    return this.ingredients[index];
  }

  public getIngredients() {
    return [...this.ingredients];
  }

  public addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.getIngredients());
  }

  public addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  public updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next([...this.ingredients]);
  }

  public deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
