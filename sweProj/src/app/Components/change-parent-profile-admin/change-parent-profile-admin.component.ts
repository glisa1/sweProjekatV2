import { Component, OnInit, Inject } from '@angular/core';
import { PIBParentComponent } from '../pibparent/pibparent.component';

@Component({
  selector: 'app-change-parent-profile-admin',
  templateUrl: './change-parent-profile-admin.component.html',
  styleUrls: ['./change-parent-profile-admin.component.css']
})
export class ChangeParentProfileAdminComponent implements OnInit {

  constructor(@Inject(PIBParentComponent) private parent:PIBParentComponent) { }

  public profileData = {
    id: '4',
    userN: 'Vlassad',
    name: 'Ugi',
    surname: 'Ugic',
    adress: 'Random street 1',
    datRodj:Date,
    decaId: [0, 1]
  }

  public profileChildren = [
    {
      id: 0,
      ime: "Stanko",
      Prezime: "Ugic",
      Odeljenje: "I1"
    },
    {
      id: 1,
      ime: "Branko",
      Prezime: "Ugic",
      Odeljenje: "III3"
    }
  ]

  ngOnInit() {
  }

  public back(){
    this.parent.viewP = false;
  }

  public delete(arg:number){
    console.log("Deleted: " + arg);
  }

  public addChild(){
    
  }

}
