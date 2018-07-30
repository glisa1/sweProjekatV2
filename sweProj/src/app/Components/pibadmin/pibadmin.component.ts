import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { PIBProfilaComponent } from '../pibprofila/pibprofila.component';

const ELEMENT_DATA: Object[] = [
  {id: 1, Ime: 'Ugljesa', Prezime: 'Stanisic', Odeljenje: 'II3'},
  {id: 2, Ime: 'Vukasin', Prezime: 'Stanisic', Odeljenje: 'II3'},
  {id: 3, Ime: 'Veljko', Prezime: 'Stanisic', Odeljenje: 'II3'},
  {id: 4, Ime: 'Marko', Prezime: 'Stanisic', Odeljenje: 'II3'},
  {id: 5, Ime: 'Darko', Prezime: 'Stanisic', Odeljenje: 'II3'},
  {id: 6, Ime: 'Carko', Prezime: 'Stanisic', Odeljenje: 'II3'},
  {id: 7, Ime: 'Dragan', Prezime: 'Stanisic', Odeljenje: 'II3'},
  {id: 8, Ime: 'Milic', Prezime: 'Stanisic', Odeljenje: 'II3'},
  {id: 9, Ime: 'Fluorina', Prezime: 'Stanisic', Odeljenje: 'II3'},
  {id: 10, Ime: 'Cveta', Prezime: 'Stanisic', Odeljenje: 'II3'},
  {id: 0, Ime: 'Cveta', Prezime: 'Stanisic', Odeljenje: 'II3'}
];

@Component({
  selector: 'app-pibadmin',
  templateUrl: './pibadmin.component.html',
  styleUrls: ['./pibadmin.component.css']
})
export class PIBAdminComponent implements OnInit {

  constructor(@Inject(PIBProfilaComponent) private parent:PIBProfilaComponent) { }

  public checkNumbr = [];
  public selectedStudentId:number;
  public viewP:boolean = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['Ime', 'Prezime', 'Odeljenje', 'check'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  public empty(arg:number){
    console.log("Cheat..." + arg);
    let b = <HTMLButtonElement>document.getElementById('dltBtn');
    if(this.checkNumbr.includes(arg)){
      var i = this.checkNumbr.indexOf(arg);
      this.checkNumbr.splice(i, 1);
      if (this.checkNumbr.length === 0){
        b.disabled = true;
      }
    }
    else{
      this.checkNumbr.push(arg);
      b.disabled = false;
    }
    console.log(this.checkNumbr);
  }

  public selectStudent(arg:number){
    this.selectedStudentId = arg;
    console.log("Izabran id djaka: " + this.selectedStudentId);
    this.viewP = true;
  }

  public delete(){
    /* Logika za brisanje izabranih ucenika */
    console.log("Obrisani nalozi sa id-em: " + this.checkNumbr);
    this.parent.notAdmin();
  }

  public back(){
    this.parent.notAdmin();
  }

}
