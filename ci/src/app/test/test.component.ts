import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: ` 
  <h2>{{parentdata}}</h2>
  <button type="button" (click)="fireEvent()">send</button>
       `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input() public parentdata;
  @Output()  public childEvent=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  fireEvent(){
    this.childEvent.emit('data from the child');
  }

}
