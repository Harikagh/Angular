import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-th',
  template:'<h2>{{"welcome"+ name}}</h2><h3>{{name.length}}</h3><h4>{{name.toUpperCase()}}<p>{{idex()}}',
  styles: ['']
})
export class ThComponent implements OnInit {
   name="harika";
   na="this a angular";

  constructor() { }

  ngOnInit() {
  }
  idex(){
     return  this.na.indexOf("a");
  }

}
