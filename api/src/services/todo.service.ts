import {injectable, BindingScope} from '@loopback/core';
import { repository } from '@loopback/repository';
import { TodoRepository } from '../repositories';

@injectable({scope: BindingScope.TRANSIENT})
export class TodoService {
  constructor(
    @repository(TodoRepository)
    private todoRepository: TodoRepository
  ) { }
}
