import React, { useEffect, useRef, useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../../../model";
import TodoList from "../TodoList";
import {
  BtnsContainer,
  Done,
  Edit,
  Form,
  Icons,
  Span,
} from "./SingleTodoStyles";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <Form onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <Edit
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : todo.isDone ? (
        <Done> {todo.todo} </Done>
      ) : (
        <Span> {todo.todo} </Span>
      )}

      <BtnsContainer>
        <Icons
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </Icons>
        <Icons onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </Icons>
        <Icons onClick={() => handleDone(todo.id)}>
          <MdDone />
        </Icons>
      </BtnsContainer>
    </Form>
  );
};

export default SingleTodo;
