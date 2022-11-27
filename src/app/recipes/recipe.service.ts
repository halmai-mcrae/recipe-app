import { EventEmitter } from "@angular/core";
import {Recipe} from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Recipe 1', 'this is a test',
      'https://images.unsplash.com/photo-1561583953-29d04b8cf5ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'),
    new Recipe('Recipe 2', 'this is a test',
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80")
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}