import { Component, OnInit } from '@angular/core';
import { TodosService } from './services/todos.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  todos = [];
  id: any;
  constructor(
    private todosService: TodosService,
  ) {
  }

  ngOnInit() {
    this.todosService.getAll().subscribe(result => {
      this.todos = result;
    })
  }

  addTodo() {
    this.showTodoDetailModal()
  }

  saveData(todo) {
    if (this.id) { //update
      this.todosService.update({ id: this.id, ...todo });
      this.id = null;
    } else { //create new
      let object = JSON.parse(JSON.stringify(todo));
      object.id = this.todos[this.todos.length - 1] ? this.todos[this.todos.length - 1].id + 1 : 1;
      this.todosService.add(object);
    }
  }

  delete(id) {
    this.todosService.delete(id);
  }

  edit(id) {
    this.id = id;
    this.showTodoDetailModal();
  }

  closeModal() {
    this.id = null;
  }

  showTodoDetailModal() {
    $('#todo-detail').modal('show');
  }
}
