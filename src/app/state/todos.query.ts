import { TodosStore, TodosState } from './todos.store';
import { Todo } from './todo.model';
import { QueryEntity } from '@datorama/akita';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosQuery extends QueryEntity<TodosState, Todo> {
  constructor(protected store: TodosStore) {
    super(store);
  }
}