import { Injectable } from '@angular/core';
import { TodosStore } from '../state/todos.store';
import { TodosQuery } from '../state/todos.query';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(
    private todosStore: TodosStore,
    private todosQuery: TodosQuery,
  ) { }

  getAll() {
    return this.todosQuery.selectAll();
  }

  add(item) {
    this.todosStore.add(item);
  }

  delete(id) {
    this.todosStore.remove(id);
  }

  getById(id) {
    return this.todosQuery.getEntity(id)
  }

  update(todo) {
    return this.todosStore.update(todo.id, todo);
  }
}