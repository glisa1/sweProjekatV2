import { Component, OnInit, Inject } from '@angular/core';
import { PIBAdminComponent } from '../pibadmin/pibadmin.component';

@Component({
  selector: 'app-change-admin-profile-admin',
  templateUrl: './change-admin-profile-admin.component.html',
  styleUrls: ['./change-admin-profile-admin.component.css']
})
export class ChangeAdminProfileAdminComponent implements OnInit {

  constructor(@Inject(PIBAdminComponent) private parent:PIBAdminComponent) { }

  public profileData = {
    Username: "Vlaxy",
    Ime: "Vlajko",
    Prezime: "Vlajkovic",
    Adresa: "Ne znam di sam 12",
    DatRodj:Date
  }

  ngOnInit() {
  }

  public editData(){
    this.parent.viewP = false;
  }
}
