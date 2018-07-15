import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-obavestenje-component',
  templateUrl: './obavestenje-component.component.html',
  styleUrls: ['./obavestenje-component.component.css']
})
export class ObavestenjeComponentComponent implements OnInit {

  constructor() { }
  public obavestenjaList = [
  {
    "Autor": "Miki",
    "Tekst": "Miki miki veliki",
    "Datum": "12.31.41."
  },
  {
    "Autor": "Sele",
    "Tekst": "Oni vele",
    "Datum": "12.31.41."
  }];
  ngOnInit() {
  }

}
