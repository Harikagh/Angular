import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cp',
  template: `
    <p>{{name|uppercase}}</p>
    <p>{{name|lowercase}}</p>
    <h2>{{name|titlecase}}</h2>
    <p>{{name|slice:2:4}}</p>
    <p>{{person | json}}</p>
    <h2>{{5.68|number:'2.4-5'}}</h2>
    <h2>{{0.25|percent}}</h2>
    <h2>{{0.25|currency}}</h2>
    <h2>{{0.25|currency:'GBP'}}</h2>
    <h2>{{date|date}}</h2>

       `,
  styleUrls: ['./cp.component.css']
})
export class CpComponent implements OnInit {
  public name="harika";
  public date=new Date();
  public person={
    "Firstname":"harika",
    "Lastname":"golla"
  }

  constructor() { }

  ngOnInit() {
  }

}
