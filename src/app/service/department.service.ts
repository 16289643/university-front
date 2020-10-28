import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Department } from '../domain/department';
import { environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  public url: string;

  constructor(public httpClient: HttpClient) {
    //this.url =  'http://localhost/University.Web/api/Courses/';
    //this.url = 'http://localhost/University.Api/api/Courses';  
    //this.url = './assets/MOCK_DATA.json';
    this.url = environment.apiUrl + 'api/department/';
   }

   public getAll(): Observable<any>{
     return this.httpClient.get(this.url);
   }

   public getById(id: number): Observable<any>{
    return this.httpClient.get(this.url + id);
  };

   public save(department: Department): Observable<any>{
     return this.httpClient.post(this.url, department);
   }

   public edit(department: Department): Observable<any>{
    return this.httpClient.put(this.url + department.DepartmentID, department);
   };

   public delete(id: number) {
    return this.httpClient.delete(this.url + id);
  };
}
