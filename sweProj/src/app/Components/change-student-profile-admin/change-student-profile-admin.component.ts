import { Component, OnInit, Inject } from '@angular/core';
import { PIBStudentComponent } from '../pibstudent/pibstudent.component';

@Component({
  selector: 'app-change-student-profile-admin',
  templateUrl: './change-student-profile-admin.component.html',
  styleUrls: ['./change-student-profile-admin.component.css']
})
export class ChangeStudentProfileAdminComponent implements OnInit {

  constructor(@Inject(PIBStudentComponent) private parent:PIBStudentComponent) { }

  public profileData = {
    Username: "Vlaxy",
    Ime: "Vlajko",
    Prezime: "Vlajkovic",
    Adresa: "Ne znam di sam 12",
    DatRodj:Date,
    Odeljenje: '3'
  }

  odeljenja: Object[] = [
    {id: '0', ime: 'I1'},
    {id: '1', ime: 'I2'},
    {id: '2', ime: 'I3'},
    {id: '3', ime: 'I4'},
    {id: '4', ime: 'II1'},
    {id: '5', ime: 'II2'},
    {id: '6', ime: 'II3'},
    {id: '7', ime: 'II4'},
    {id: '8', ime: 'III1'},
    {id: '9', ime: 'III2'},
    {id: '10', ime: 'III3'},
    {id: '11', ime: 'III4'}
  ];

  ngOnInit() {
  }

  public editData(){
    this.parent.viewP = false;
  }

}
