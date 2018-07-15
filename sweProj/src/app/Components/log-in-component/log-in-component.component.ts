import { Component, OnInit, Inject } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-log-in-component',
  templateUrl: './log-in-component.component.html',
  styleUrls: ['./log-in-component.component.css']
})
export class LogInComponentComponent implements OnInit {
  constructor(@Inject(AppComponent) private parent:AppComponent) {
   }

  ngOnInit() {
  }

  public logInClick(){
    this.parent.logInTest = false; //false zato sto ce je logout postaviti na true
  }

}
