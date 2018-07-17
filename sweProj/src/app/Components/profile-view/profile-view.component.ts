import { Component, OnInit, Inject } from '@angular/core';
import { DesnaStranaComponentComponent } from '../desna-strana-component/desna-strana-component.component';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {

  constructor(@Inject(DesnaStranaComponentComponent) private parent:DesnaStranaComponentComponent) { }
  public rang:number = this.parent.rang;
  public editTest:boolean = false;
  public profileData = {
    "Username": "Vlaxy",
    "Ime": "Vlajko",
    "Prezime": "Vlajkovic",
    "Adresa": "Ne znam di sam 12",
    "Datum_rodjenja": "21.02.1988.",
    "RangProfila": "Profesor"
  }
  ngOnInit() {
  }

  public editData(){
    this.editTest = true;
  }
}
