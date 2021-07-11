import {injectable, BindingScope} from '@loopback/core';
import { repository } from '@loopback/repository';
import { TodoListRepository } from '../repositories';

@injectable({scope: BindingScope.TRANSIENT})
export class TodoListService {
  constructor(
    @repository(TodoListRepository)
    private todoListRepository: TodoListRepository
  ) {}

  
}
