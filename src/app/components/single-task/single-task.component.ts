import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/data';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.css']
})
export class SingleTaskComponent implements OnInit {
  @Input()task: Task
  faCoffee=faCoffee
  constructor() { }

  ngOnInit(): void {
  }

}
