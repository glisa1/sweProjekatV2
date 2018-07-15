import {Component, OnInit, Inject} from '@angular/core';
import { ContentComponentComponent } from '../content-component/content-component.component';

/** @title Sidenav open & close behavior */
@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.css']
})
export class MenuComponentComponent implements OnInit {

  constructor(@Inject(ContentComponentComponent) private parent:ContentComponentComponent) { }

  ngOnInit() {
  }

  public logOut(){
    this.parent.parent.logInTest = true;
  }

}