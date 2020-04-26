import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable( {
    providedIn : 'root'
})
export class RecipeService {
    
    recipeSelected : EventEmitter<Recipe> = new EventEmitter<Recipe>();

    private recipes : Recipe[] = [
        new Recipe('Test recipe 1', 'Test recipe description 1', ''),
        new Recipe('Test recipe 2', 'Test recipe description 2', ''),
        new Recipe('Test recipe 3', 'Test recipe description 3', ''),
      ];
      
    constructor() { }

    getRecipes() {
        return this.recipes.slice();
    }


}