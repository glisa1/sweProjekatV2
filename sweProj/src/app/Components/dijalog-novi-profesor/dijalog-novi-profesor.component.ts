import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dijalog-novi-profesor',
  templateUrl: './dijalog-novi-profesor.component.html',
  styleUrls: ['./dijalog-novi-profesor.component.css']
})
export class DijalogNoviProfesorComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DijalogNoviProfesorComponent>) { }

  ngOnInit() {
  }

  public selectedData = [];

  public back(){
    this.dialogRef.close();
  }

  public select(){
    this.dialogRef.close(this.selectedData); //salju se podaci nazad
  }

}
