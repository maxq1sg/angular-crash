import { Injectable } from '@angular/core';
import { TASKS } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  getTasks(){
    return TASKS
  }
}
