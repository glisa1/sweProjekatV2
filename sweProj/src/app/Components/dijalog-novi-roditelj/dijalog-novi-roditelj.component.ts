import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { MatDialogRef } from '@angular/material';

const ELEMENT_DATA = [
  {id: '101', ime: 'Dragan', prezime:'Jovic', odeljenje: 'I1'},
  {id: '1', ime: 'Slavoljub', prezime:'Jovic', odeljenje: 'I2'},
  {id: '31', ime: 'Mitar', prezime:'Jovic', odeljenje: 'I3'},
  {id: '12', ime: 'Borka', prezime:'Jovic', odeljenje: 'I4'},
  {id: '54', ime: 'Jovana', prezime:'Jovic', odeljenje: 'I2'},
  {id: '5', ime: 'Jelena', prezime:'Jovic', odeljenje: 'IV4'},
  {id: '124', ime: 'Mirka', prezime:'Jovic', odeljenje: 'IV4'},
  {id: '7', ime: 'Ljubisa', prezime:'Jovic', odeljenje: 'IV4'},
  {id: '434', ime: 'Svetozar', prezime:'Jovic', odeljenje: 'II2'},
  {id: '9', ime: 'Mirko', prezime:'Jovic', odeljenje: 'III3'},
];

@Component({
  selector: 'app-dijalog-novi-roditelj',
  templateUrl: './dijalog-novi-roditelj.component.html',
  styleUrls: ['./dijalog-novi-roditelj.component.css']
})
export class DijalogNoviRoditeljComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DijalogNoviRoditeljComponent>) { }

  public selectedData = [];

  ngOnInit() {
  }

  public back(){
    this.dialogRef.close();
  }

  public select(){
    this.dialogRef.close(this.selectedData);
  }

  displayedColumns: string[] = ['select', 'ime', 'prezime', 'odeljenje'];
  dataSource = new MatTableDataSource<Object>(ELEMENT_DATA);
  selection = new SelectionModel<Object>(true, []);

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  public getData(arg:number){
    console.log("Izabran id: " + arg);
    if(this.selectedData.includes(ELEMENT_DATA[arg].id)){
      var index = this.selectedData.indexOf(ELEMENT_DATA[arg].id);
      this.selectedData.splice(index, 1);
    }
    else{
      this.selectedData.push(ELEMENT_DATA[arg].id);
    }

    console.log(this.selectedData);
  }

}
