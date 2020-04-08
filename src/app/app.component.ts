import { Component } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Complete Guide';
  userName : string = "test";
  
  getUserNameState()
  {
    let state : boolean = this.userName === "";
    return state;
  }

  resetUserName()
  {
    this.userName = "";
  }
}
