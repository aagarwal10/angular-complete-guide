import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild("nameInput") nameInput : ElementRef;
  @ViewChild("amountInput") amountInput : ElementRef;

  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddClicked() {
    let ingredientName : string = this.nameInput.nativeElement.value;
    let ingredientAmount : number = this.amountInput.nativeElement.value;

    this.shoppingListService.addIngredient(new Ingredient(ingredientName, ingredientAmount));    
  }
}
