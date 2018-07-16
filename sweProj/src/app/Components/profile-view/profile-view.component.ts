import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {

  constructor() { }
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
