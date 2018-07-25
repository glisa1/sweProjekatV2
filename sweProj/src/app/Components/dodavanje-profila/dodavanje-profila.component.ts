import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DijalogNoviDjakComponent } from '../dijalog-novi-djak/dijalog-novi-djak.component';
import { DijalogNoviRoditeljComponent } from '../dijalog-novi-roditelj/dijalog-novi-roditelj.component';
import { DijalogNoviProfesorComponent } from '../dijalog-novi-profesor/dijalog-novi-profesor.component';

@Component({
  selector: 'app-dodavanje-profila',
  templateUrl: './dodavanje-profila.component.html',
  styleUrls: ['./dodavanje-profila.component.css']
})
export class DodavanjeProfilaComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  public korIme:string;
  public lozinka:string;
  public lozinka2:string;
  public ime:string;
  public prezime:string;
  public adresa:string;
  public datRodj:Date;
  public rang;
//----

openDialog(): void {
  let rol1 =document.getElementById('prvi');
  let rol2 =document.getElementById('drugi');
  let rol3 =document.getElementById('treci');
  if(rol1['checked'] == true){
    const dialogRef = this.dialog.open(DijalogNoviDjakComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  else if (rol2['checked'] == true){
    const dialogRef = this.dialog.open(DijalogNoviRoditeljComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  else if(rol3['checked'] == true){
    const dialogRef = this.dialog.open(DijalogNoviProfesorComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

  public show(){
    console.log(this.korIme);
    console.log(this.lozinka);
    console.log(this.lozinka2);
    console.log(this.ime);
    console.log(this.prezime);
    console.log(this.adresa);
  }

  ngOnInit() {
  }

}
