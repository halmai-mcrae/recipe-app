import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Recipe 1',
      'this is a test',
      'https://images.unsplash.com/photo-1561583953-29d04b8cf5ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      [
        new Ingredient('Lentils', 20),
        new Ingredient('Pastry sheet', 15)
      ]),
    new Recipe(
      'Recipe 2',
      'this is a test',
      'https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      [
        new Ingredient('Buns', 40),
        new Ingredient('Burger patty', 45)
      ]),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
