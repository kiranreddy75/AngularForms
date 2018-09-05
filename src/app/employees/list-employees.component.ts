import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees = [
    {
      id: 1,
      name: 'Venkat',
      gender: 'Male',
      email: 'venkat@gmail.com',
      phoneNumber: '89819374937',
      contactPreference: 'Email',
      dateOfBirth: new Date('09/25/1975'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/BVN.jpg'
    },
    {
      id: 2,
      name: 'Sahithi',
      gender: 'Female',
      email: 'sahithi@gmail.com',
      phoneNumber: '89819374937',
      contactPreference: 'Email',
      dateOfBirth: new Date('05/13/1992'),
      department: 'HR',
      isActive: true,
      photoPath: 'assets/images/sahithi.jpg'
    },
    {
      id: 3,
      name: 'Venkat Ramana',
      gender: 'Male',
      email: 'ramana@gmail.com',
      phoneNumber: '89819374937',
      contactPreference: 'Email',
      dateOfBirth: new Date('08/15/1968'),
      department: 'CTO',
      isActive: true,
      photoPath: 'assets/images/Venkata-Ramana-Reddy.jpg'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
