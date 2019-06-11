import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ftest',
  template: `
  <div *ngFor = "let color of  colors;index as  i ;first as f ;even as e">
   <h2> {{i}} {{f}} {{color}} {{e}}</h2>
  </div>
  
  `,
  styleUrls: ['./ftest.component.css']
})
export class FtestComponent implements OnInit {
  public colors=["red","blue","black","green"];

  constructor() { }

  ngOnInit() {
  }

}
