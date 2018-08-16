import { Component, OnInit, Inject } from '@angular/core';
import { ForumComponent } from '../forum/forum.component';

@Component({
  selector: 'app-new-forum-thread',
  templateUrl: './new-forum-thread.component.html',
  styleUrls: ['./new-forum-thread.component.css']
})
export class NewForumThreadComponent implements OnInit {

  constructor(@Inject(ForumComponent) private parent:ForumComponent) { }

  public tema = "";
  public textTeme = "";

  public back() {
    this.parent.showForum = 0;
  }

  public post() {
    this.parent.showForum = 0; //implementirati metodu za cuvanje nove teme na forumu
    console.log(this.tema + "  " + this.textTeme);
  }

  ngOnInit() {
  }

}
