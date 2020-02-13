import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos (){
    return [
      {
        id: 1,
        title: 'study',
        completed: false
      },
      {
        id: 1,
        title: 'lunch',
        completed: true
      },
      {
        id: 1,
        title: 'movie',
        completed: true
      },
      {
        id: 1,
        title: 'talk',
        completed: false
      }
    ]
  }

}
