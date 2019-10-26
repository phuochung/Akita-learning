import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TodosService } from '../../services/todos.service';
declare var $: any;

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {
  @Input() id: any;
  @Output() save = new EventEmitter<any>();
  @Output() close = new EventEmitter<any>();
  statuses = ['New', 'In Progress', 'Completed', 'Cancel'];
  modalId = 'todo-detail';
  title = '';
  description = '';
  status = 'New';

  constructor(
    private todosService: TodosService,
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.id) {
      const todo = this.todosService.getById(this.id);
      this.title = todo.title;
      this.description = todo.description;
      this.status = todo.status;
    }
  }

  ngAfterViewInit() {
    let self = this;
    $(document).ready(function () {
      $(`#${self.modalId}`).on("hidden.bs.modal", function () {
        self.id = null;
        self.title = '';
        self.description = '';
        self.status = 'New';
        self.close.emit();
      });
    })
  }

  saveData() {
    this.save.emit({ title: this.title, description: this.description, status: this.status });
    $(`#${this.modalId}`).modal("hide");
  }
}
