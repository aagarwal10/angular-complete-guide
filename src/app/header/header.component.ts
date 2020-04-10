import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  collapsed : boolean = true;
  @Output() navItemClick: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
  
  ngOnInit(): void {
  }

  onNavMenuClicked(navItemName: string) {
    this.navItemClick.emit(navItemName);
  }
}
