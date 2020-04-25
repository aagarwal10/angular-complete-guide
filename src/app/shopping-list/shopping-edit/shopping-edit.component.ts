import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild("nameInput") nameInput : ElementRef;
  @ViewChild("amountInput") amountInput : ElementRef;
  @Output() ingredientAdded : EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddClicked() {
    let ingredientName : string = this.nameInput.nativeElement.value;
    let ingredientAmount : number = this.amountInput.nativeElement.value;

    this.ingredientAdded.emit(new Ingredient(ingredientName, ingredientAmount));    
  }
}
