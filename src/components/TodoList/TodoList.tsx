import React from "react";
import { Todo } from "../../model";
import { Container } from "./TodoListStyles";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <Container>
      {todos.map((todo) => (
        <li> {todo.todo} </li>
      ))}
    </Container>
  );
};

export default TodoList;
