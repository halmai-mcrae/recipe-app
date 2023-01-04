import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
  export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
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
    this.ingredientsChanged.next([...this.ingredients])
  }
}