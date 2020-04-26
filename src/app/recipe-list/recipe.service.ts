import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable( {
    providedIn : 'root'
})
export class RecipeService {
    
    recipeSelected : EventEmitter<Recipe> = new EventEmitter<Recipe>();

    private recipes : Recipe[] = [
        new Recipe('Fried Chicken', 'Fried Chicken Recipe', 
                   'https://image.shutterstock.com/image-photo/spicy-deep-fried-breaded-chicken-600w-460012054.jpg', 
                   [
                       new Ingredient("Bonesless Chicken", 4),
                       new Ingredient("Flour", 1),
                       new Ingredient("Spices", 3)
                    ]),
        new Recipe('Chicken Pasta', 'Chicken Pasta Recipe', 
                    'https://image.shutterstock.com/image-photo/pasta-dried-tomatoes-chicken-parmesan-260nw-1517235287.jpg',
                    [
                        new Ingredient("Bonesless Chicken", 4),
                        new Ingredient("Spaghetti", 2),
                        new Ingredient("Vodka Sauce", 3),
                        new Ingredient("Basil Leaves", 10)
                    ]),
        new Recipe('Veggie Burger', 'Veggie Burger Recipe', 
                    'https://www.howsweeteats.com/wp-content/uploads/2018/06/veg-burgers-I-howsweeteats.com-15.jpg',
                    [
                        new Ingredient("Veggie Patty", 1),
                        new Ingredient("Wheat Bun", 1),
                        new Ingredient("Lettuce", 1),
                        new Ingredient("Onions", 2),
                        new Ingredient("Tomatoes", 2),
                        new Ingredient("Ketchup", 1),
                        new Ingredient("Avocado", 1),
                        new Ingredient("Pepper Jack Cheese", 1)
                    ]),
      ];
      
    constructor() { }

    getRecipes() {
        return this.recipes.slice();
    }


}