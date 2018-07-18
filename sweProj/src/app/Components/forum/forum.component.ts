import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  panelOpenState = false;
  showForum = 0;

  public newThread(){
    this.showForum=2;
  }

  constructor() { }
  public teme = 
  [
    {
      "id": "0",
      "Naziv": "Mika i Pera",
      "Autor": "Jovan Pesic",
      "BrOdg": "2",
      "Datum": "13.02.2015."
    },
    {
      "id": "1",
      "Naziv": "Mika i Laza",
      "Autor": "Jovan Ristic",
      "BrOdg": "2",
      "Datum": "13.02.2015."
    },
    {
      "id": "2",
      "Naziv": "Nemarnost",
      "Autor": "Jovana Delic",
      "BrOdg": "2",
      "Datum": "13.02.2015."
    },
    {
      "id": "3",
      "Naziv": "Odsutnost",
      "Autor": "Jovana Delic",
      "BrOdg": "2",
      "Datum": "13.02.2015."
    },
    {
      "id": "4",
      "Naziv": "Galama",
      "Autor": "Isidor Belic",
      "BrOdg": "2",
      "Datum": "13.02.2015."
    },
    {
      "id": "5",
      "Naziv": "Buka",
      "Autor": "Jovana Delic",
      "BrOdg": "2",
      "Datum": "13.02.2015."
    },
    {
      "id": "6",
      "Naziv": "Roditeljski sastanak",
      "Autor": "Jovana Delic",
      "BrOdg": "2",
      "Datum": "13.02.2015."
    }
  ]

  public biraj(arg:number){ //funkcija ima id teme sa foruma, 
    console.log(arg);       //sve sto treba je da prikaze tu temu sa njenim odgovorima
    this.showForum = 1;
  }

  ngOnInit() {
  }

}
