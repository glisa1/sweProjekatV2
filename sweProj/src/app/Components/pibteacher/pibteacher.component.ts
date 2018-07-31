import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { PIBProfilaComponent } from '../pibprofila/pibprofila.component';

const ELEMENT_DATA: Object[] = [
  {id: 1, Ime: 'Ugljesa', Prezime: 'Stanisic', Predmet: 'Matematika'},
  {id: 2, Ime: 'Vukasin', Prezime: 'Stanisic', Predmet: 'Fizika'},
  {id: 3, Ime: 'Veljko', Prezime: 'Stanisic', Predmet: 'Fizika'},
  {id: 4, Ime: 'Marko', Prezime: 'Stanisic', Predmet: 'Matematika'},
  {id: 5, Ime: 'Darko', Prezime: 'Stanisic', Predmet: 'Matematika'},
  {id: 6, Ime: 'Carko', Prezime: 'Stanisic', Predmet: 'Fizika'},
  {id: 7, Ime: 'Dragan', Prezime: 'Stanisic', Predmet: 'Fizika'},
  {id: 8, Ime: 'Milic', Prezime: 'Stanisic', Predmet: 'Matematika'},
  {id: 9, Ime: 'Fluorina', Prezime: 'Stanisic', Predmet: 'Fizika'},
  {id: 10, Ime: 'Cveta', Prezime: 'Stanisic', Predmet: 'Matematika'},
  {id: 0, Ime: 'Cveta', Prezime: 'Stanisic', Predmet: 'Matematika'}
];

@Component({
  selector: 'app-pibteacher',
  templateUrl: './pibteacher.component.html',
  styleUrls: ['./pibteacher.component.css']
})
export class PIBTeacherComponent implements OnInit {

  constructor(@Inject(PIBProfilaComponent) private parent:PIBProfilaComponent) { }

  public checkNumbr = [];
  public selectedStudentId:number;
  public viewP:boolean = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['Ime', 'Prezime', 'Predmet', 'check'];
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
    this.parent.notTeacher();
  }

  public back(){
    this.parent.notTeacher();
  }


}
