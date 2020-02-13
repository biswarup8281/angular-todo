import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models/Todo';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

    @Input() todo: Todo;
  constructor() { }

  ngOnInit() {
  }

setClasses(){
  let classes = {
    todo : true,
    'is-completed': this.todo.completed
  }
  return classes;
}

onToggle(todo){
  todo.completed = !todo.completed;
}

}
