import { Component, OnInit, Inject } from '@angular/core';
import { ListaOdeljenjaComponent } from '../lista-odeljenja/lista-odeljenja.component';

@Component({
  selector: 'app-lista-ucenika',
  templateUrl: './lista-ucenika.component.html',
  styleUrls: ['./lista-ucenika.component.css']
})
export class ListaUcenikaComponent implements OnInit {

  constructor(@Inject(ListaOdeljenjaComponent) private parent:ListaOdeljenjaComponent) { }

  public back(){
    this.parent.showOdeljenje = false;
  }

  public showStudent:boolean = false;

  public selectStudent(arg:number){
    //arg predstavlja id ucenika kome treba da se upise ocena/napomena/izostanak
    console.log("Id izabranog djaka:" + arg);
  }

  djaci = [
    {
      id: "0",
      ime: "Radomir",
      prezime: "Raskovic"
    },
    {
      id: "1",
      ime: "Radomir",
      prezime: "Raskovic"
    },
    {
      id: "2",
      ime: "Radomir",
      prezime: "Raskovic"
    },
    {
      id: "3",
      ime: "Radomir",
      prezime: "Raskovic"
    },
    {
      id: "4",
      ime: "Radomir",
      prezime: "Raskovic"
    },
    {
      id: "5",
      ime: "Radomir",
      prezime: "Raskovic"
    },
    {
      id: "6",
      ime: "Radomir",
      prezime: "Raskovic"
    }
  ]

  ngOnInit() {
  }

}
