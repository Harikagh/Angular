import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employ-details',
  template: ` 
  <ul *ngFor="let employee of employees">
  <li>{{employee.id}}.{{employee.name}}-{{employee.age}}</li>
  </ul>
  `,
  styleUrls: ['./employ-details.component.css']
})
export class EmployDetailsComponent implements OnInit {
  
  public employees=[];
  constructor(private _emplyeeService:EmployeeServiceService) { }

  ngOnInit() {
    this.employees=this._emplyeeService.getEmployees();
  }

}
