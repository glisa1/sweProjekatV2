import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

const ELEMENT_DATA = [
  {id: '101', ime: 'I1', razredni:'Milka Canic', brDjaka: '30'},
  {id: '1', ime: 'I2', razredni:'Marija Jovic', brDjaka: '30'},
  {id: '31', ime: 'I3', razredni:'Martin Jovic', brDjaka: '30'},
  {id: '12', ime: 'I4', razredni:'Milka Svetozarevic', brDjaka: '30'},
  {id: '54', ime: 'II1', razredni:'Dragan Cenic', brDjaka: '30'},
  {id: '5', ime: 'II2', razredni:'Marko Djordjevic', brDjaka: '30'},
  {id: '124', ime: 'II3', razredni:'Slobodan Dragosavljevic', brDjaka: '30'},
  {id: '7', ime: 'II4', razredni:'Bozana Mikic', brDjaka: '30'},
  {id: '434', ime: 'III1', razredni:'Strahinja Peric', brDjaka: '30'},
  {id: '9', ime: 'III2', razredni:'Jovan Jovic', brDjaka: '30'},
];

@Component({
  selector: 'app-dijalog-novi-profesor',
  templateUrl: './dijalog-novi-profesor.component.html',
  styleUrls: ['./dijalog-novi-profesor.component.css']
})
export class DijalogNoviProfesorComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DijalogNoviProfesorComponent>) { }

  public selectedData:Object = {
    idPredmeta: '',
    idOdeljenjaRazredni: '',
    idOdeljenjaPredaje: []
  }

  public checked:boolean = false;

  ngOnInit() {
  }

  //ovde VALUE ustvari predstavlja id predmeta koji ce novi profesor
  //da predaje 
  public predmeti: Object[] = [
    {value: '0', naziv: 'Matematika'},
    {value: '1', naziv: 'Srpski jezik'},
    {value: '2', naziv: 'Biologija'},
    {value: '3', naziv: 'Hemija'},
    {value: '4', naziv: 'Geografija'},
    {value: '5', naziv: 'Fizika'},
    {value: '6', naziv: 'Engleski jezik'},
    {value: '7', naziv: 'Logika'}
  ];

  public back(){
    this.dialogRef.close();
  }

  public checkC(){
    this.checked = !this.checked;
    if(this.checked){
      this.displayedColumns.push('radio');
    }
    else{
      this.selectedData['idOdeljenjaRazredni'] = '';
      this.displayedColumns.pop();
    }
    /*var elem = <HTMLDivElement>document.getElementById('dontHide');
    if (this.checked===true){
      elem.className = "notHiddenDiv";
    }
    else{
      elem.className = "hiddenDiv";
    }*/
  }

  public select(){
    this.dialogRef.close(this.selectedData);
  }

  displayedColumns: string[] = ['select', 'ime', 'razredni', 'brDjaka'];
  dataSource = new MatTableDataSource<Object>(ELEMENT_DATA);
  selection = new SelectionModel<Object>(true, []);

  public setChief(arg1:number, arg2){
    this.selectedData['idOdeljenjaRazredni']=arg1;
    if(this.selection.isSelected(arg2)){
      this.selection.deselect(arg2);
    }
    else{
      this.selection.select(arg2);
    }
  }

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
    if(this.selectedData['idOdeljenjaPredaje'].includes(ELEMENT_DATA[arg].id)){
      var index = this.selectedData['idOdeljenjaPredaje'].indexOf(ELEMENT_DATA[arg].id);
      this.selectedData['idOdeljenjaPredaje'].splice(index, 1);
    }
    else{
      this.selectedData['idOdeljenjaPredaje'].push(ELEMENT_DATA[arg].id);
    }

    console.log(this.selectedData);
  }


}
