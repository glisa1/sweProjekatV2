import { Component, OnInit, Inject } from '@angular/core';
import { ForumComponent } from '../forum/forum.component';
import { MatDialog } from '@angular/material';
import { DialogThreadAnswerComponent } from '../dialog-thread-answer/dialog-thread-answer.component';

@Component({
  selector: 'app-forum-thread-view',
  templateUrl: './forum-thread-view.component.html',
  styleUrls: ['./forum-thread-view.component.css']
})
export class ForumThreadViewComponent implements OnInit {

  constructor(@Inject(ForumComponent) private parent:ForumComponent, public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(DialogThreadAnswerComponent, {
      height: '350px',
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  public back(){
    this.parent.showForum = true;
  }

  public tema=
  {
    "Naslov": "Djeca",
    "Autor": "Mika Mikic",
    "Tekst": "Zvacu decuuuu, decooooo, decooo. Oooo decoo ..!!",
    "Datum": "12.02.2015."
  }

  public odgovori=
  [
    {
      "Autor": "Josip Blagic",
      "Tekst": "Nemoj placam",
      "Datum": "12.02.2015."
    },
    {
      "Autor": "Ivana Simic",
      "Tekst": "Busi gume!",
      "Datum": "13.02.2015."
    },
    {
      "Autor": "Jovan Bojanic",
      "Tekst": "Pusti brate mili...",
      "Datum": "14.02.2015."
    },
    {
      "Autor": "Jovanka Bojanic",
      "Tekst": "Pusti brate mili...",
      "Datum": "14.02.2015."
    },
    {
      "Autor": "Katarina Saric",
      "Tekst": "Pusti brate mili...",
      "Datum": "14.02.2015."
    }
  ]

  ngOnInit() {
  }

}
