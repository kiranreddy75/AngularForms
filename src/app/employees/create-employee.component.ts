import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  previewPhoto = false;
  departments: Department[] = [
    {id: 1, name: 'Help Desk'},
    {id: 2, name: 'HR'},
    {id: 3, name: 'IT'},
    {id: 4, name: 'Payroll'},
    {id: 5, name: 'Admin'},
    {id: 6, name: 'Manager'},
    {id: 7, name: 'Security'},
    {id: 8, name: 'Service'},

  ];
  constructor() { }

  togglePhotoPreview(){
    this.previewPhoto = !this.previewPhoto;
  }

  ngOnInit() {
  }
  saveEmployee(empForm: NgForm): void{
    console.log(empForm.value);
  }
}
