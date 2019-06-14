import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employ-list',
  template: ` 
  <ul *ngFor="let employee of employees">
  <li>{{employee.name}}</li>
  </ul>`,
  styleUrls: ['./employ-list.component.css']
})
export class EmployListComponent implements OnInit {
  public employees=[];
  constructor(private _emplyeeService:EmployeeServiceService) { }

  ngOnInit() {
    this.employees=this._emplyeeService.getEmployees();

  }

}
