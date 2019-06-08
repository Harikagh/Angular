import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cevent',
  template: '<button type=button  (click)="onClick($event)">Click me!</button><br> <input #myid type="text"> <button type=button  (click)="log(myid.value)">log</button>',
  styleUrls: ['./cevent.component.css']
})
export class CeventComponent implements OnInit {
  public greeting="";
  constructor() { }

  ngOnInit() {
     
  }
  onClick(event){
    console.log(event)
    this.greeting='welcome to harika'
  }
  log(value){
    console.log(value);
  }

  
}
