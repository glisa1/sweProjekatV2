import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pregled-izostanaka',
  templateUrl: './pregled-izostanaka.component.html',
  styleUrls: ['./pregled-izostanaka.component.css']
})
export class PregledIzostanakaComponent implements OnInit {

  constructor() { }

  displayedColumnsIzo: string[] = ['Datum', 'Opravdan', 'Predmet'];
  displayedColumnsNap: string[] = ['Datum', 'Razlog', 'Predmet'];
  public napomene:object[] = [
    {
      Datum: "12.02.2015.",
      Razlog: "Neprikladno ponasanje",
      Predmet: "Srpski jezik"
    },
    {
      Datum: "12.02.2015.",
      Razlog: "Neprikladno ponasanje",
      Predmet: "Matematika"
    },
    {
      Datum: "12.02.2015.",
      Razlog: "Neprikladno ponasanje",
      Predmet: "Hemija"
    }
  ]
  public izostanci:object[] = [
    {
      Datum: "12.02.2015.",
      Opravdan: "Da",
      Predmet: "Srpski jezik"
    },
    {
      Datum: "20.02.2015.",
      Opravdan: "Ne",
      Predmet: "Srpski jezik"
    },
    {
      Datum: "18.02.2015.",
      Opravdan: "Ne",
      Predmet: "Srpski jezik"
    },
    {
      Datum: "14.03.2015.",
      Opravdan: "Da",
      Predmet: "Srpski jezik"
    }
  ]
  ngOnInit() {
  }

}
