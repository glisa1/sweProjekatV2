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
  public rad1:boolean=false;
  public rad2:boolean=false;
  public rad3:boolean=false;
  public rad4:boolean=false;

  public radioBool(arg:number){
    if(arg===0){
        this.rad2=false;
        this.rad3=false;
        this.rad4=false;
        this.rad1=true;
    }
    else if(arg===1)
    {
        this.rad2=true;
        this.rad3=false;
        this.rad4=false;
        this.rad1=false;
    }
    else if(arg===2){
        this.rad2=false;
        this.rad3=true;
        this.rad4=false;
        this.rad1=false;
    }
    else if(arg===3){
        this.rad2=false;
        this.rad3=false;
        this.rad4=true;
        this.rad1=false;
    }
  }

openDialog(): void {
  if(this.rad1 == true){
    console.log("uso prvi");
    const dialogRef = this.dialog.open(DijalogNoviDjakComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
        console.log("Id izabranog odeljenja: " + result['id']);
      }
    });
  }
  else if (this.rad2 == true){
    console.log("uso drugi");
    const dialogRef = this.dialog.open(DijalogNoviRoditeljComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
        console.log("Izabrano/a dete/a: " + result);
      }
    });
  }
  else if(this.rad3 == true){
    console.log("uso treci");
    const dialogRef = this.dialog.open(DijalogNoviProfesorComponent, {
      width: '500px',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
        console.log("Izabrani id-evi: " + result);
      }
    });
  }
}

  public reset(){
    this.korIme = '';
    this.lozinka = '';
    this.lozinka2 = '';
    this.ime = '';
    this.prezime = '';
    this.adresa = '';
    this.datRodj = null;
  }

  ngOnInit() {
  }

}