import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { time, timeLog } from 'console';
//import { timer } from 'rxjs';
//import { error } from 'console';
import { Student } from 'src/app/domain/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-save',
  templateUrl: './student-save.component.html',
  styleUrls: ['./student-save.component.css']
})
export class StudentSaveComponent implements OnInit {

  public student: Student;

  public showMsg: boolean = false;
  public msg: string;
  public type: string;

  constructor(public studentService: StudentService,
    private router: Router) { }

  ngOnInit(): void {
    this.student = new Student(0, '', '', new Date );
  }

  public save(){
    console.log(this.student);

    this.studentService.save(this.student).subscribe(data => {
      this.router.navigate(['/student-list']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger';
    }); 
  }

}

