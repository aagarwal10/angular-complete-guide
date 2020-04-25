import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  selectedRecipe : Recipe;

  recipes : Recipe[] = [
    new Recipe('Test recipe 1', 'Test recipe description 1', ''),
    new Recipe('Test recipe 2', 'Test recipe description 2', ''),
    new Recipe('Test recipe 3', 'Test recipe description 3', ''),
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
}
