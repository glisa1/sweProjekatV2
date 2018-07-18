import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog-thread-answer',
  templateUrl: './dialog-thread-answer.component.html',
  styleUrls: ['./dialog-thread-answer.component.css']
})
export class DialogThreadAnswerComponent implements OnInit {

  constructor(public DialogRef: MatDialogRef<DialogThreadAnswerComponent>) { }

  public cancel() {
    this.DialogRef.close('Cancel');
  }

  public answer() {
    this.DialogRef.close('Answer');
  }

  ngOnInit() {
  }

}
