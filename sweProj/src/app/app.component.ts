import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public logInTest:boolean = true;
  public userRang:number = null; //0-ucenik; 1-roditelj; 2-profa; 3-admin
}
