import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor() { }
  getEmployees(){
    return[
      {"id":1 ,"name":"harika" ,"age":20},
      {"id":2 ,"name":"dhatri" ,"age":19},
      {"id":3 ,"name":"teju" ,"age":22},
      {"id":4 ,"name":"kshama" ,"age":18}
    ];

  }
}
