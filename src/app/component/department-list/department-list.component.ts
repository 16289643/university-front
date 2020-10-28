import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Department } from 'src/app/domain/department';
import { DepartmentService } from 'src/app/service/department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit, OnDestroy {

  public department: Department[];
  public subDepartment: Subscription;

  constructor(public departmentService: DepartmentService) { }

  ngOnDestroy(): void {
    this.subDepartment.unsubscribe();
  }

  ngOnInit(): void {
    this.getAll();
  }

  public getAll(){
    this.subDepartment = this.departmentService.getAll().subscribe(data =>{
      this.department = data;

    });
  }

}
