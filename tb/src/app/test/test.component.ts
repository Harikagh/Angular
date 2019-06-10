import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<input [(ngModel)]="name" type="text">
  {{name}} 
  <h2 *ngIf="true">HARIKA GOLLA</h2>
  <h2 *ngIf="dp">DHATRI REDDY</h2>
   <div *ngIf="dp; then thenblock; else elseblock">

   </div>
  <ng-template #thenblock>
  <h2>dhatri is a bad girl</h2>
  </ng-template>
  <ng-template #elseblock>
  <p>
      harika
  </p>
 </ng-template>
   `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public name="";
  public dp=true;

  constructor() { }

  ngOnInit() {
  }

}
