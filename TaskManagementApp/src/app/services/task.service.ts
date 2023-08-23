import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Task } from 'src/models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private taskUrl = "tasks";

  constructor(private http: HttpClient) { }

  public getTasks() : Observable<Task[]> {
      return this.http.get<Task[]>(`${environment.apiUrl}/${this.taskUrl}`);
  }
}
