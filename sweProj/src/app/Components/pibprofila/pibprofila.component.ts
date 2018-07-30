import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pibprofila',
  templateUrl: './pibprofila.component.html',
  styleUrls: ['./pibprofila.component.css']
})
export class PIBProfilaComponent implements OnInit {

  constructor() { }

  public show:boolean = true;
  public showS:boolean = false;
  public showP:boolean = false;
  public showT:boolean = false;
  public showA:boolean = false;

  /* Retrieved from db(not implemented) */
  public dataFromDBd = [
    {

    }
  ]

  ngOnInit() {
  }

  public getStudent(){
    this.show = false;
    this.showS = true;
  }

  public notStudent(){
    this.show = true;
    this.showS = false;
  }

  public getParent(){
    this.show = false;
    this.showP = true;
  }

  public notParent(){
    this.show = true;
    this.showP = false;
  }

  public getTeacher(){
    this.show = false;
    this.showT = true;
  }

  public notTeacher(){
    this.show = true;
    this.showT = false;
  }

  public getAdmin(){
    this.show = false;
    this.showA = true;
  }

  public notAdmin(){
    this.show = true;
    this.showT = false;
  }

}
