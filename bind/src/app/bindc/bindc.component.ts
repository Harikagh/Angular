import { Component, OnInit } from '@angular/core';
import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import { ArgumentOutOfRangeError } from 'rxjs';

@Component({
  selector: 'app-bindc',
  template: 
  '<p> <input  [id]="id" type="text" value="harika"> </p><p> <input  id="{{id}}" type="text" value="harika"> </p> <br><h2  class="green">harika</h2> <h2 [class]="st" >harika</h2><h3 [class.red]="haserror">satish</h3> <h3 [ngClass]="special">tejjj</h3> <h2 [style.color]="st">Stylebinding</h2> <h2 [ngStyle]="gh">Style binding</h2>'
  
  ,
  styles: ['.green{ color:green; } .blue{color:blue; }  .red{color:red;}']

})
export class BindcComponent implements OnInit {
  public id="myid";
  public st="blue";
  public haserror=true;
  public special={
    "green":!this.haserror,
    "blue":this.haserror
  }
  public gh={
     color:"orange",
     fontStyle:"italic"
      

  }

  constructor() { }
  
  ngOnInit() {
  }

}
