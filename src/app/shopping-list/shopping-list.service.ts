import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
    providedIn : 'root'
})
export class ShoppingListService {
    ingredientsAdded : EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();

    private ingredients : Ingredient[] = [];
      
    constructor() { }

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient : Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsAdded.emit(this.ingredients.slice());
    }

    addIngredients(ingredientsToAdd : Ingredient[]) {
        this.ingredients.push(...ingredientsToAdd);
        this.ingredientsAdded.emit(this.ingredients.slice());
    }
}