import { service } from "@loopback/core";
import { get } from "@loopback/rest";
import { TodoListService } from "../services";

export class TodoListController {
  constructor(
    @service(TodoListService)
    private todoListService: TodoListService
  ) { }
  
  @get('/api/todo-list')
  getAll() {
    
  }
}
