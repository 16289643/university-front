import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/domain/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit, OnDestroy {

  public student: Student[];
  public subStudent: Subscription;

  constructor(public studentService: StudentService) { }

  ngOnDestroy(): void {
    this.subStudent.unsubscribe();
  }

  ngOnInit(): void {
    this.getAll();
  }

  public getAll(){
    this.subStudent = this.studentService.getAll().subscribe(data =>{
      this.student = data;

    });
  }

}
