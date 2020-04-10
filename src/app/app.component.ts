import { Component } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedNavItemName : string = 'recipe';

  onNavItemClicked(navItemName: string) {
    this.selectedNavItemName = navItemName;
  }
}
