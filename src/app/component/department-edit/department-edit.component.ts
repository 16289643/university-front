import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Department } from 'src/app/domain/department';
import { Instructor } from 'src/app/domain/instructor';
import { DepartmentService } from 'src/app/service/department.service';
import { InstructorService } from 'src/app/service/instructor.service';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent implements OnInit, OnDestroy {

  public id: number;
  public department: Department;

  public showMsg: boolean = false;
  public msg: string;
  public type: string;

  public instructor: Instructor[];
  public subInstructor: Subscription;


  constructor(public departmentService: DepartmentService,
    public instructorService: InstructorService,
    private router: Router,
    private ActivatedRoute: ActivatedRoute) { }
  
    ngOnDestroy(): void {
    this.subInstructor.unsubscribe();
  }


  ngOnInit(): void {
    this.getById();
    this.getAllInstructor();
  }



  public getById(){
    let param = this.ActivatedRoute.params['_value'];
    this.id = param.id;

    this.departmentService.getById(this.id).subscribe(data => {
      this.department = data;
    });
  }

  public getAllInstructor(){
    this.subInstructor = this.instructorService.getAll().subscribe(data =>{
      this.instructor = data;

    });
  }

  public edit(){
    console.log(this.department);

    this.departmentService.edit(this.department).subscribe(data => {
      this.router.navigate(['/department-list']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger';
    }); 
  }
}
