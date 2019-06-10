import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tswitch',
  template: `
  <div  [ngSwitch]="color">
  <div *ngSwitchCase="'red'">RED</div>
  <div *ngSwitchCase="'blue'">RED</div>
  <div *ngSwitchCase="'green'">RED</div>
  </div>
  `,
  styleUrls: ['./tswitch.component.css']
})
export class TswitchComponent implements OnInit {
  public color="red";

  constructor() { }

  ngOnInit() {
  }

}
