import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dijalog-novi-djak',
  templateUrl: './dijalog-novi-djak.component.html',
  styleUrls: ['./dijalog-novi-djak.component.css']
})
export class DijalogNoviDjakComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DijalogNoviDjakComponent>) { }

  public cancel(){
    this.dialogRef.close();
  }
  
  public godine= [
    {
      id: "0",
      broj: "I"
    },
    {
      id: "1",
      broj: "II"
    },
    {
      id: "2",
      broj: "III"
    },
    {
      id: "3",
      broj: "IV"
    }
  ]

  public odeljenja = [
    {
      id: "0",
      naziv: "I1",
      brdjaka: "31"
    },
    {
      id: "1",
      naziv: "I2",
      brdjaka: "31"
    },
    {
      id: "2",
      naziv: "I3",
      brdjaka: "31"
    },
    {
      id: "3",
      naziv: "I4",
      brdjaka: "31"
    }
  ]

  ngOnInit() {
  }

}
