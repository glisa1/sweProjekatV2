import { Component, OnInit, Inject } from '@angular/core';
import { ProfileViewComponent } from '../profile-view/profile-view.component';

@Component({
  selector: 'app-izmena-profila-user',
  templateUrl: './izmena-profila-user.component.html',
  styleUrls: ['./izmena-profila-user.component.css']
})
export class IzmenaProfilaUserComponent implements OnInit {

  constructor(@Inject(ProfileViewComponent) private parent:ProfileViewComponent) { }

  public back(){
    this.parent.editTest = false;
  }
  ngOnInit() {
  }

}
