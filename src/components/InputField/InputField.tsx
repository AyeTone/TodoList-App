import React, { useRef, useState } from "react";
import { Button, Container, Form, Input } from "./InputFieldStyles";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Container>
      <Form
        onSubmit={(e) => {
          handleAdd(e);
          inputRef.current?.blur();
        }}
      >
        <Input
          ref={inputRef}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="input"
          placeholder="Enter a task"
        />
        <Button type="submit">Go</Button>
      </Form>
    </Container>
  );
};

export default InputField;
