import { Component, OnInit, Inject } from '@angular/core';
import { DesnaStranaComponentComponent } from '../desna-strana-component/desna-strana-component.component';

@Component({
  selector: 'app-obavestenje-component',
  templateUrl: './obavestenje-component.component.html',
  styleUrls: ['./obavestenje-component.component.css']
})
export class ObavestenjeComponentComponent implements OnInit {

  constructor(@Inject(DesnaStranaComponentComponent) private parent:DesnaStranaComponentComponent) { }
  public novoObavestenjeTest:boolean = false;
  public rang:number = this.parent.rang;
  public tema = "";
  public textTeme = "";
  public novoObavestenje(){
    this.novoObavestenjeTest = !this.novoObavestenjeTest;
    console.log(this.tema + "  " + this.textTeme);
  }
  public obavestenjaList = [
  {
    "Autor": "Miki",
    "Tema" : "O'm'kiju",
    "Tekst": "Miki miki veliki gde si da si miki doso si tako da si tu bez obzira na to sto mislis da nisi iako mislis da si mali veliki nisi jer biti veliki znati ne moci proci kroz neka mala vrata ali ako ne nadjes mala vrata onda si uvek mali",
    "Datum": "12.31.41."
  },
  {
    "Autor": "Sele",
    "Tema" : "Opet",
    "Tekst": "Oni vele",
    "Datum": "12.31.41."
  },
  {
    "Autor": "Kele",
    "Tema" : "Sutra",
    "Tekst": "Oni zele",
    "Datum": "12.31.41."
  },
  {
    "Autor": "Kele",
    "Tema" : "Sutra",
    "Tekst": "Oni zele",
    "Datum": "12.31.41."
  }];
  ngOnInit() {
  }

}
