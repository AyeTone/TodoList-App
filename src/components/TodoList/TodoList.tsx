import React from "react";
import { Todo } from "../../model";
import SingleTodo from "./SingleTodo/SingleTodo";
import { Container } from "./TodoListStyles";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <Container>
      {todos.map((todo) => (
        <SingleTodo
          key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </Container>
  );
};

export default TodoList;
