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

  public usrName = '';
  public paswr = '';

  public rang:number;
  ngOnInit() {
  }

  public logInClick(){
    this.parent.logInTest = false; //false zato sto ce je logout postaviti na true
    //let rol=<HTMLInputElement>document.getElementById("Role");
    //this.parent.userRang = Number(rol.value); //radi, provereno donjim logovanjem
    this.parent.userRang = this.rang;
    //console.log(rol.type);
    console.log(this.parent.userRang);
    console.log(this.usrName);
    console.log(this.paswr);
  }

}
